'use client'

import Image from 'next/image'
import { Text } from '../Text'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@radix-ui/react-tooltip'
import { DoorOpen } from 'lucide-react'

export function User() {
  return (
    <div className="flex group items-center lg:h-11 lg:pl-1.25 lg:pr-3 bg-background-sidebar-user border border-border-sidebar-user p-3 rounded-lg overflow-hidden">
      <div className="flex gap-2 w-full items-center">
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
      <div className="overflow-hidden">
        <Tooltip>
          <TooltipTrigger asChild>
            <button type="button" className="cursor-pointer">
              <DoorOpen className="w-5 h-5 text-icon-not-activate transition-colors duration-300 group-hover:text-red-300" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="bg-background-tooltip mb-1 z-10 text-sm p-1 px-3 rounded-md shadow-lg text-variant-primary">
            <Text as="p" className="text-sm">
              Sair
            </Text>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}
