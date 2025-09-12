'use client'

import * as React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import CountUp from '../../../animations/CountUp'

export interface DesktopMetric {
  title: string // e.g., "Trusted by"
  valuePrefix?: string
  value?: number // e.g., "4,500+"
  valuePostfix?: string
  label?: string // e.g., "clients"
  description?: string // optional fine print
  gridClass: string // exact desktop grid placement (col/row spans + starts)
}

export interface DesktopMetricCardProps {
  metric: DesktopMetric
  className?: string
}

export function DesktopMetricCard({ metric, className }: DesktopMetricCardProps) {
  return (
    <article className={cn(metric.gridClass, className)}>
      <Card className="h-full rounded-2xl border bg-card text-card-foreground">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm md:text-lg font-semibold tracking-tight">
            {metric.title}
          </CardTitle>
          {metric.label ? (
            <CardDescription className="text-sm">{metric.label}</CardDescription>
          ) : null}
        </CardHeader>
        <Separator className="my-1" />
        <CardContent className="pt-0">
          <p className="text-xl md:text-3xl 2xl:text-5xl font-bold leading-tight">
            {metric.valuePrefix}
            {metric.value && (
              <CountUp
                from={0}
                to={metric.value}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
            )}
            {metric.valuePostfix}
          </p>
          {metric.description ? (
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              {metric.description}
            </p>
          ) : null}
        </CardContent>
      </Card>
    </article>
  )
}
