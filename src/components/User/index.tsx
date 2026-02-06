'use client'

import * as Tooltip from '@radix-ui/react-tooltip'
import { DoorOpen } from 'lucide-react'
import Image from 'next/image'
import { Text } from '../Text'

export function User() {
  return (
    <div className="flex gap-2 group items-center lg:h-11 lg:pl-1.25 lg:pr-3 bg-background-sidebar-user border border-border-sidebar-user p-3 rounded-lg justify-between overflow-hidden">
      <div className="flex gap-2">
        <div className="h-12 w-12 lg:h-8 lg:w-8 shrink-0 relative rounded-full shadow-lg border-2">
          <Image
            alt="avatar"
            src="/avatar-female.png"
            fill
            className="object-cover "
          />
        </div>
        <div className="shrink-0">
          <Text as="p" className="font-bold lg:leading-4">
            Maria Julia
          </Text>
          <Text as="p" className="text-[0.8rem] text-base-primary">
            Administrador
          </Text>
        </div>
      </div>
      <div>
        <Tooltip.Provider delayDuration={500}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button type="button" className="IconButton">
                <DoorOpen className="w-5 h-5 text-icon-not-activate transition-colors duration-300 cursor-pointer hover:text-red-400" />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="TooltipContent bg-background-tooltip z-50 text-sm p-1 px-3 rounded-md shadow-lg text-variant-primary"
                sideOffset={5}
              >
                <Text as="p" className="text-sm">
                  Sair
                </Text>

                <Tooltip.Arrow className="TooltipArrow fill-background-tooltip" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    </div>
  )
}
