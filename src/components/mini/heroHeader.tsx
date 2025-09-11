'use client'

import * as React from 'react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface HeroHeaderProps {
  className?: string
  title?: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

const mockTitle = 'Built for modern parking.'
const mockSubtitle =
  'Security, automation, and compatibility—without ripping and replacing your existing cameras or workflows.'
const mockPrimary = { label: 'See a demo', href: '/demo' }
const mockSecondary = { label: 'Talk to us', href: '/contact' }

export default function HeroHeader({
  className,
  title = mockTitle,
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
            {title}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{subtitle}</p>
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
