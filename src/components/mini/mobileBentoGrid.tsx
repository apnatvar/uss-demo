'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { DesktopMetric, DesktopMetricCard } from './bentoCard'

export interface MobileBentoGridProps {
  className?: string
  metrics?: DesktopMetric[]
  videoSrc?: string
  posterSrc?: string
}

/**
 * Mobile-only grid (hidden on lg+).
 * Layout: 5 columns, implicit rows with fixed baseline height.
 * Central slab is a video; surrounding tiles are metric cards.
 */
export default function MobileBentoGrid({
  className,
  metrics = defaultMobileMetrics,
  videoSrc = '/demo.mp4',
  posterSrc = '/1.jpg',
}: MobileBentoGridProps) {
  return (
    <section
      className={cn('block lg:hidden w-full bg-background text-foreground', className)}
      aria-labelledby="mobile-bento-title"
    >
      <article className="mx-auto w-full max-w-[28rem] px-4 py-6">
        <div
          className={cn(
            'grid gap-3',
            // Mobile canvas: 5 columns; rows are implicit (so auto-rows applies)
            'grid-cols-5 grid-rows-none',
            // Row height baseline (tweak to taste)
            'auto-rows-[88px] sm:auto-rows-[96px]',
          )}
        >
          {/* Central video slab — positioned near the middle */}
          <article className="col-start-1 col-span-5 row-start-5 row-span-6">
            <Card className="h-full rounded-2xl border bg-card text-card-foreground overflow-hidden">
              <CardContent className="p-0 h-full">
                <video
                  className="h-full w-full object-cover"
                  src={videoSrc}
                  poster={posterSrc}
                  muted
                  autoPlay
                  loop
                  playsInline
                />
              </CardContent>
            </Card>
          </article>

          {/* Metric tiles */}
          {metrics.map((m, i) => (
            <DesktopMetricCard key={`${m.title}-${i}`} metric={m} />
          ))}
        </div>
      </article>
    </section>
  )
}

const defaultMobileMetrics: DesktopMetric[] = [
  {
    title: 'Trusted by',
    value: '4,500+',
    label: 'clients',
    gridClass: 'col-start-1 col-span-2 row-start-1 row-span-2',
  },
  {
    title: 'Cities',
    value: '120+',
    label: 'deployments',
    gridClass: 'col-start-3 col-span-3 row-start-1 row-span-2',
  },
  {
    title: 'Cameras',
    value: '1,200+',
    label: 'supported models',
    gridClass: 'col-start-1 col-span-3 row-start-3 row-span-2',
  },
  {
    title: 'Integrations',
    value: '35+',
    label: 'parking & security',
    gridClass: 'col-start-4 col-span-2 row-start-3 row-span-2',
  },
  {
    title: 'Uptime',
    value: '99.95%',
    label: 'SLA-backed',
    gridClass: 'col-start-1 col-span-2 row-start-11 row-span-2',
  },
  {
    title: 'Accuracy',
    value: '98.7%',
    label: 'field-measured',
    gridClass: 'col-start-3 col-span-3 row-start-11 row-span-2',
  },
  {
    title: 'Savings',
    value: '30–45%',
    label: 'vs rip-and-replace',
    gridClass: 'col-start-1 col-span-3 row-start-13 row-span-2',
  },
  {
    title: 'Latency',
    value: '< 120ms',
    label: 'edge-to-cloud',
    gridClass: 'col-start-4 col-span-2 row-start-13 row-span-2',
  },
  {
    title: 'Daily events',
    value: '12M+',
    label: 'processed',
    gridClass: 'col-start-1 col-span-2 row-start-15 row-span-2',
  },
  {
    title: 'NPS',
    value: '72',
    label: 'satisfaction',
    gridClass: 'col-start-3 col-span-3 row-start-15 row-span-2',
  },
]
