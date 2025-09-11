'use client'

import * as React from 'react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { FaEnvelope, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa6'
import { IconType } from 'react-icons'

export type ContactItem = {
  label: string
  href: string
  ariaLabel?: string
  Icon: IconType
}

export interface FooterContactsProps {
  items?: ContactItem[]
  className?: string
}

const mockContacts: ContactItem[] = [
  { label: '+91 98765 43210', href: 'tel:+919876543210', ariaLabel: 'Call us', Icon: FaPhone },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919876543210',
    ariaLabel: 'Chat on WhatsApp',
    Icon: FaWhatsapp,
  },
  {
    label: 'hello@unisafe.example',
    href: 'mailto:hello@unisafe.example',
    ariaLabel: 'Email us',
    Icon: FaEnvelope,
  },
  {
    label: '@unisafesecurity',
    href: 'https://instagram.com/unisafesecurity',
    ariaLabel: 'Instagram',
    Icon: FaInstagram,
  },
]

export function FooterContacts({ items = mockContacts, className }: FooterContactsProps) {
  return (
    <section className={cn('w-full', className)} aria-label="Contact links">
      <Card className="w-full">
        <nav aria-label="Contact methods">
          <ul className="m-0 flex w-max list-none items-center gap-4 p-0 py-2 mx-auto flex-col md:flex-row">
            {items.map((item, i) => (
              <li key={`${item.label}-${i}`}>
                <Link
                  href={item.href}
                  aria-label={item.ariaLabel ?? item.label}
                  className="inline-flex items-center gap-2 underline underline-offset-4 hover:no-underline"
                >
                  <item.Icon aria-hidden className="h-4 w-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Card>

      <Separator className="my-3" />
    </section>
  )
}
