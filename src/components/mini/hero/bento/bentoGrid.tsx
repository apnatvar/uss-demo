'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { DesktopMetric, DesktopMetricCard } from './bentoCard'

export interface DesktopBentoGridProps {
  className?: string
  metrics?: DesktopMetric[]
  videoSrc?: string
  posterSrc?: string
}

/**
 * Desktop-only (hidden on smaller screens).
 * Grid: 12 cols × 8 rows for generous layout.
 * Central slab (4x4) is a video; all other tiles are metric cards.
 */
export default function DesktopBentoGrid({
  className,
  metrics = defaultMetrics,
  videoSrc = '/demo.mp4',
  posterSrc = '/1.jpg',
}: DesktopBentoGridProps) {
  return (
    <section
      className={cn('hidden md:block w-full bg-background text-foreground', className)}
      aria-labelledby="desktop-bento-title"
    >
      <article className="mx-auto w-full max-w-7xl px-6">
        <div
          className={cn(
            'grid gap-4',
            // Desktop canvas
            'grid-cols-12 grid-rows-8',
            // Row height baseline so spans look consistent
            'auto-rows-[240px] 2xl:auto-rows-[280px]',
          )}
        >
          {/* Central video slab (4x4) — placed roughly center */}
          <article className="col-start-5 col-span-4 row-start-3 row-span-4">
            <Card className="rounded-2xl border bg-card text-card-foreground overflow-hidden">
              <CardContent className="p-0">
                <video className="w-full" src={videoSrc} poster={posterSrc} muted loop autoPlay />
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

/* -------------------- Mock metrics with exact desktop placements -------------------- */
/**
 * Grid map (12x8):
 * - Top rows (1–2): four wide tiles across
 * - Mid rows (3–6): two left + two right flanking the central 4x4 video
 * - Bottom rows (7–8): four wide tiles across
 */
const defaultMetrics: DesktopMetric[] = [
  // Top row band (rows 1–2)
  {
    title: 'Trusted by',
    value: 450,
    valuePostfix: '+',
    label: 'clients worldwide',
    gridClass: 'col-start-1 col-span-3 row-start-1 row-span-2',
  },
  {
    title: 'Cities',
    value: 120,
    valuePostfix: '+',
    label: 'active deployments',
    gridClass: 'col-start-4 col-span-3 row-start-1 row-span-2',
  },
  {
    title: 'Cameras supported',
    value: 1200,
    valuePostfix: '+',
    label: 'models & SKUs',
    gridClass: 'col-start-7 col-span-3 row-start-1 row-span-2',
  },
  {
    title: 'Integrations',
    value: 35,
    valuePostfix: '+',
    label: 'parking & security',
    gridClass: 'col-start-10 col-span-3 row-start-1 row-span-2',
  },

  // Mid band left (rows 3–6, columns 1–4)
  {
    title: 'Avg deployment',
    value: 14,
    valuePostfix: ' days',
    label: 'site go-live',
    gridClass: 'col-start-1 col-span-4 row-start-3 row-span-2',
  },
  {
    title: 'Plate accuracy',
    value: 98.7,
    valuePostfix: '%',
    label: 'field-measured',
    gridClass: 'col-start-1 col-span-4 row-start-5 row-span-2',
  },

  // Mid band right (rows 3–6, columns 9–12)
  {
    title: 'SLA uptime',
    value: 99.95,
    valuePostfix: '%',
    label: 'contracted',
    gridClass: 'col-start-9 col-span-4 row-start-3 row-span-2',
  },
  {
    title: 'Cost savings',
    valuePrefix: 'Avg: ',
    value: 38,
    valuePostfix: '%',
    label: 'vs rip-and-replace',
    gridClass: 'col-start-9 col-span-4 row-start-5 row-span-2',
  },

  // Bottom row band (rows 7–8)
  {
    title: 'Daily events',
    value: 12,
    valuePostfix: 'M+',
    label: 'processed securely',
    gridClass: 'col-start-1 col-span-3 row-start-7 row-span-2',
  },
  {
    title: 'Latency',
    valuePrefix: '<',
    value: 120,
    valuePostfix: 'ms',
    label: 'edge-to-cloud',
    gridClass: 'col-start-4 col-span-3 row-start-7 row-span-2',
  },
  {
    title: 'NPS',
    value: 72,
    label: 'customer satisfaction',
    gridClass: 'col-start-7 col-span-3 row-start-7 row-span-2',
  },
  {
    title: 'Audit & RBAC',
    valuePrefix: 'Built-in',
    label: 'enterprise controls',
    gridClass: 'col-start-10 col-span-3 row-start-7 row-span-2',
  },
]
