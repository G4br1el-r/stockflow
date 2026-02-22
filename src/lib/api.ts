import { cookies } from 'next/headers'

async function refreshAccessToken(): Promise<string | null> {
  const cookieStore = await cookies()
  const refreshToken = cookieStore.get('refreshToken')?.value

  if (!refreshToken) return null

  const response = await fetch(`${process.env.API_URL}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  })

  if (!response.ok) return null

  const { accessToken } = await response.json()

  cookieStore.set('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 15,
  })

  return accessToken
}

export async function fetchAPI(path: string, options?: RequestInit) {
  const cookieStore = await cookies()
  let accessToken = cookieStore.get('accessToken')?.value

  let response = await fetch(`${process.env.API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      ...options?.headers,
    },
  })

  if (response.status === 401) {
    accessToken = (await refreshAccessToken()) ?? undefined

    if (!accessToken) return null

    response = await fetch(`${process.env.API_URL}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        ...options?.headers,
      },
    })
  }

  return response
}
