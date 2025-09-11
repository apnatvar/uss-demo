'use client'

import * as React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ShimmeringText } from '../../animations/ShimmerText'

export interface ProcessStep {
  step: number
  title: string
  subtitle: string // e.g. "expected timeline — 3 weeks"
  description: string
}

export interface ProcessStepCardProps {
  data: ProcessStep
  className?: string
}

export function ProcessStepCard({ data, className }: ProcessStepCardProps) {
  return (
    <Card className={cn('w-full h-full', `${className}`)}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-1">
          <Badge variant="secondary" aria-label={`Step ${data.step}`}>
            Step {data.step}
          </Badge>
          <CardTitle className="text-base font-semibold leading-none tracking-tight">
            {data.title}
          </CardTitle>
        </div>
        <CardDescription className="mt-1">{data.subtitle}</CardDescription>
      </CardHeader>

      <CardContent>
        <article>
          <p className="sr-only">Summary</p>
        </article>
        <article className="w-full">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <ShimmeringText text={data.description} />
          </p>
        </article>
      </CardContent>
    </Card>
  )
}
