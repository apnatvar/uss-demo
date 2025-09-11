'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import HeroHeader from '../mini/heroHeader'
import BentoGrid from '../mini/bentoGrid'
import MobileBentoGrid from '../mini/mobileBentoGrid'

export interface HeroBentoProps {
  className?: string
}

export default function HeroBento({ className }: HeroBentoProps) {
  return (
    <section className={cn('w-full', className)}>
      <HeroHeader />
      <BentoGrid />
      <MobileBentoGrid />
    </section>
  )
}
