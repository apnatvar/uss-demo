'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { ProcessStep, ProcessStepCard } from './processCard'

export interface ProcessCarouselProps {
  steps?: ProcessStep[]
  className?: string
  /**
   * Constrain height to enable vertical scrolling inside the carousel if content is tall.
   * Adjust or override as needed; remove to let it grow naturally.
   */
}

export function ProcessCarousel({ steps = defaultSteps, className }: ProcessCarouselProps) {
  return (
    <section aria-label="Process steps" className={cn('relative', className)}>
      {/* ScrollArea provides custom, theme-aware scrollbars (both axes). */}
      <ScrollArea type="hover" className={cn('w-full')}>
        {/* Track: always horizontal via flex-row; width grows with content. */}
        <ul
          role="list"
          className={cn(
            'm-0 list-none p-1',
            'flex flex-row gap-3',
            // Always X snapping
            'snap-x snap-mandatory',
            // Great touch handling on phones
            'touch-pan-x touch-pan-y',
          )}
        >
          {steps.map((s) => (
            <li
              key={s.step}
              // Each card occupies a sensible min width so X-scroll makes sense.
              className="snap-start min-w-[75%] md:min-w-3/5"
            >
              <ProcessStepCard data={s} />
            </li>
          ))}
        </ul>
        {/* Custom, token-colored scrollbars from Shadcn (both axes). */}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <p className="text-muted-foreground text-sm md:hidden text-center">Swipe Right to See More</p>
    </section>
  )
}

/* ---------- Embedded mock data ---------- */
const defaultSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Get in touch',
    subtitle: 'expected timeline — 3 weeks',
    description:
      'Reach out via phone, WhatsApp, or email. We gather basic context and align on your goals and constraints right away.Reach out via phone, WhatsApp, or email. We gather basic context and align on your goals and constraints right away.Reach out via phone, WhatsApp, or email. We gather basic context and align on your goals and constraints right away.Reach out via phone, WhatsApp, or email. We gather basic context and align on your goals and constraints right away.Reach out via phone, WhatsApp, or email. We gather basic context and align on your goals and constraints right away.Reach out via phone, WhatsApp, or email. We gather basic context and align on your goals and constraints right away.',
  },
  {
    step: 2,
    title: 'Demo + services explained',
    subtitle: 'expected timeline — 3 weeks',
    description:
      'See a focused walkthrough of how our software and integrations solve real parking security & automation problems.',
  },
  {
    step: 3,
    title: 'Catalogue your requirements',
    subtitle: 'expected timeline — 3 weeks',
    description:
      'We document sites, lanes, camera setups, and operational workflows to ensure compatibility and smooth rollout.',
  },
  {
    step: 4,
    title: 'Getting started with a quote',
    subtitle: 'expected timeline — 3 weeks',
    description:
      'You receive a transparent, itemized quote—software, services, and optional add-ons—so you can plan budgets confidently.',
  },
  {
    step: 5,
    title: 'Sourcing & setup',
    subtitle: 'expected timeline — 3 weeks',
    description:
      'We coordinate equipment sourcing (mostly cameras) and configure software with backward-compatible, low-disruption changes.',
  },
  {
    step: 6,
    title: 'On-site working demo & wrap-up',
    subtitle: 'expected timeline — 3 weeks',
    description:
      'We validate performance on-site, train your team, finalize docs, and hand over a system that just works—day one and beyond.',
  },
]
