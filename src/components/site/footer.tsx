'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { FooterContacts } from '../mini/footer/footerContacts'
import { FooterAssurance } from '../mini/footer/footerAssurance'

export interface FooterProps {
  className?: string
  caption?: string
}

export default function Footer({
  className,
  caption = 'Unisafe Security Solutions - Since 2008',
}: FooterProps) {
  return (
    <footer
      className={cn(
        // Full bleed + distinct surface so it stands out
        'w-100vw rounded-4xl bg-card text-secondary-foreground bottom-0',
        className,
      )}
      role="contentinfo"
    >
      {/* Top: contacts (contained) */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-5 sm:py-6">
        <FooterContacts />
      </section>

      {/* Middle: full-width tinted assurance band */}
      <FooterAssurance />

      {/* Bottom: centered caption (contained) */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-4">
        <p className="text-center text-xs text-muted-foreground">{caption}</p>
      </section>
    </footer>
  )
}
