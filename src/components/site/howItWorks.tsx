'use client'

import * as React from 'react'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { ProcessCarousel } from '../mini/process/processCarousel'

export interface HowItWorksProps {
  className?: string
  title?: string
  subtitle?: string
}

export default function HowItWorks({
  className,
  title = 'So How Does it Work?',
  subtitle = 'Swipe right to see an approximate timeline of our process, from first getting in touch to final demo and delivery',
}: HowItWorksProps) {
  return (
    <section
      id="process"
      className={cn(
        'w-full bg-background text-foreground min-h-[100dvh] overflow-hidden',
        'py-8 sm:py-12',
        className,
      )}
      aria-labelledby="how-it-works-title"
    >
      <article className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <header>
          <h2 id="how-it-works-title" className="text-2xl sm:text-3xl font-bold tracking-tight">
            {title}
          </h2>
          <Separator className="my-3 sm:my-4" />
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{subtitle}</p>
        </header>

        <ProcessCarousel className="mt-5 sm:mt-6" />
      </article>
    </section>
  )
}
