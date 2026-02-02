export const getGreeting = () => {
  const hour = new Date().getHours()

  if (hour < 12) return { text: 'Bom dia', emoji: '☀️', url: '/dia.webp' }
  if (hour < 18)
    return {
      text: 'Boa tarde',
      emoji: '🌤',
      url: '/tarde1.webp',
    }
  return { text: 'Boa noite', emoji: '🌙', url: '/noite.webp' }
}
