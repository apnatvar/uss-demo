'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

export interface PositiveDisclaimerProps {
  title?: string
  message?: string
  className?: string
}

const mockTitle = 'Innovation without disruption'
const mockMessage =
  'We modernize your parking operations while keeping your existing workflows and assets intact—minimizing cost, avoiding rip-and-replace projects, and ensuring a smooth, low-risk transition.'

export function PositiveDisclaimer({
  title = mockTitle,
  message = mockMessage,
  className,
}: PositiveDisclaimerProps) {
  return (
    <aside
      className={cn('rounded-xl border bg-card text-card-foreground p-4 sm:p-5', className)}
      aria-label="Positive disclaimer"
    >
      <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
      <Separator className="my-3" />
      <p className="text-sm text-muted-foreground leading-relaxed">{message}</p>
    </aside>
  )
}
