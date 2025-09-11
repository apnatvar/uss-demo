'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface FooterAssuranceProps {
  message?: string
  className?: string
}

/** Full-width tinted band inside the footer */
export function FooterAssurance({
  message = "With years of hands-on experience across parking security and automation, we've honed reliable, backwards-compatible systems that scale. We’re excited to bring the same A-grade software and meticulous execution to your sites—without disruption.",
  className,
}: FooterAssuranceProps) {
  return (
    <section
      aria-label="Assurance"
      className={cn('w-[95%] mx-auto bg-muted text-muted-foreground rounded-4xl', 'py-6 sm:py-8')}
    >
      <article className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6', className)}>
        <p className="text-sm sm:text-base leading-relaxed">{message}</p>
      </article>
    </section>
  )
}
