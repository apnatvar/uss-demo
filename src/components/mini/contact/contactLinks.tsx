'use client'

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

export type ContactLinksData = {
  phone: string // E.164 or local string
  whatsapp: string // digits only for wa.me
  email: string
  instagramHandle: string // without @
}

export interface ContactLinksProps {
  data?: ContactLinksData
  className?: string
}

const mockContactLinks: ContactLinksData = {
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'hello@uss.example',
  instagramHandle: 'uss',
}

export function ContactLinks({ data = mockContactLinks, className }: ContactLinksProps) {
  const telHref = `tel:${data.phone.replace(/\s+/g, '')}`
  const waHref = `https://wa.me/${data.whatsapp}`
  const mailHref = `mailto:${data.email}`
  const igHref = `https://instagram.com/${data.instagramHandle}`

  const linkCls = 'underline underline-offset-4 hover:no-underline text-foreground'

  return (
    <article
      className={cn('rounded-2xl border bg-card text-card-foreground p-4 sm:p-6', className)}
    >
      <h3 className="text-base font-semibold tracking-tight">Reach us directly</h3>
      <p className="text-sm text-muted-foreground mt-1">
        Call, message, or write to us. We respond quickly during business hours.
      </p>

      <Separator className="my-4" />

      <ul className="space-y-3 text-sm">
        <li>
          <span className="text-muted-foreground">Phone: </span>
          <Link href={telHref} className={linkCls}>
            {data.phone}
          </Link>
        </li>
        <li>
          <span className="text-muted-foreground">WhatsApp: </span>
          <Link href={waHref} className={linkCls} target="_blank" rel="noopener noreferrer">
            +{data.whatsapp}
          </Link>
        </li>
        <li>
          <span className="text-muted-foreground">Email: </span>
          <Link href={mailHref} className={linkCls}>
            {data.email}
          </Link>
        </li>
        <li>
          <span className="text-muted-foreground">Instagram: </span>
          <Link href={igHref} className={linkCls} target="_blank" rel="noopener noreferrer">
            @{data.instagramHandle}
          </Link>
        </li>
      </ul>
    </article>
  )
}
