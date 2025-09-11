'use client'

import * as React from 'react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import TrueFocus from '../animations/TrueFocus'
import { ShimmeringText } from '../animations/ShimmerText'

export interface HeroHeaderProps {
  className?: string
  title?: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

const mockSubtitle =
  'Up-to-date Security and Automation services that easily integrate into your existing workflows.'
const mockPrimary = { label: 'Schedule a Demo', href: '/demo' }
const mockSecondary = { label: 'Get a Quote', href: '/contact' }

export default function HeroHeader({
  className,
  subtitle = mockSubtitle,
  primaryCta = mockPrimary,
  secondaryCta = mockSecondary,
}: HeroHeaderProps) {
  return (
    <section
      className={cn('w-full bg-background text-foreground', className)}
      aria-labelledby="hero-title"
    >
      <article className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-10 text-center">
        <header className="space-y-3">
          <h1 id="hero-title" className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built for
            <TrueFocus
              sentence="Modern Parking Solutions"
              manualMode={false}
              blurAmount={3}
              borderColor="red"
              animationDuration={1}
              pauseBetweenAnimations={1}
            />
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            <ShimmeringText text={subtitle} />
          </p>
        </header>

        <Separator className="my-4 sm:my-6" />

        <nav className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        </nav>
      </article>
    </section>
  )
}
