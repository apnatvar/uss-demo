'use client'

import * as React from 'react'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { ContactLinks, ContactLinksData } from '../mini/contact/contactLinks'
import { ContactForm } from '../mini/contact/contactForm'

export interface GetInTouchProps {
  className?: string
  linksData?: ContactLinksData
}

export default function GetInTouch({ className, linksData }: GetInTouchProps) {
  return (
    <section
      className={cn(
        'w-full bg-background text-foreground min-h-[100dvh] overflow-hidden',
        'py-8 sm:py-12',
        className,
      )}
      id="contact"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <header className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Get in Touch</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {
              'Looking for a quote, or a quick demo? We are for you. We will walk you through options and tailor recommendations for your needs. Reach us directly below, or request a call back and we’ll follow up shortly.'
            }
          </p>
        </header>

        <Separator className="my-6" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <ContactLinks data={linksData} />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
