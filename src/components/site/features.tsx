'use client'

import * as React from 'react'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { PositiveDisclaimer } from '../mini/featureDisclaimer'
import { FeatureChips } from '../mini/featureList'

export interface UnmatchedSectionProps {
  className?: string
  // Long muted paragraph content
  blurb?: string
  // Inline subtitle (on same line as title)
  subtitle?: string
  // Title text
  title?: string
  // Feature list
  features?: string[]
}

const mockBlurb =
  'With decades of hands-on experience across parking security and automation, we deliver systems that simply work—day one and day 1,000. Our software is intentionally built for backwards compatibility with new, old, or mixed equipment (especially camera ecosystems), so you can upgrade capabilities without replacing your infrastructure. We consistently come in lower than competitors—not by cutting corners—but by investing in A-grade software that keeps your brand reliable, scalable, and alive for years to come.'

const mockFeatures = [
  'Experience',
  'Security',
  'Automation',
  'Compatibility',
  'Cameras',
  'Lower-cost',
  'A-grade Software',
  'Reliability',
]

export default function UnmatchedSection({
  className,
  blurb = mockBlurb,
  subtitle = 'and Unmatched prices',
  title = 'Unmatched experience',
  features = mockFeatures,
}: UnmatchedSectionProps) {
  return (
    <section className={cn('w-full bg-background text-foreground min-h-[100dvh] overflow-hidden', 'py-8 sm:py-12', className)}>
      <article className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        {/* Title + inline subtitle */}
        <header className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
          <span className="text-base sm:text-lg text-muted-foreground">{subtitle}</span>
        </header>

        <Separator className="my-4 sm:my-6" />

        {/* Long muted text */}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{blurb}</p>

        {/* Features for quick scanning */}
        <section className="mt-4 sm:mt-6" aria-labelledby="quick-features">
          <h3 id="quick-features" className="sr-only">
            Quick features
          </h3>
          <FeatureChips items={features} />
        </section>

        {/* Positive disclaimer highlight */}
        <PositiveDisclaimer className="mt-6 sm:mt-8" />
      </article>
    </section>
  )
}
