'use client'

import * as React from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export interface FeatureChipsProps {
  items?: string[]
  className?: string
}

const mockFeatures: string[] = [
  'Experience',
  'Security',
  'Automation',
  'Compatibility',
  'Cameras',
  'Lower-cost',
  'A-grade Software',
  'Uptime',
]

export function FeatureChips({ items = mockFeatures, className }: FeatureChipsProps) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)} aria-label="Feature highlights">
      {items.map((f, i) => (
        <li key={`${f}-${i}`}>
          <Badge variant="secondary" className="text-foreground">
            {f}
          </Badge>
        </li>
      ))}
    </ul>
  )
}
