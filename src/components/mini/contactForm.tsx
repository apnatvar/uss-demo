'use client'

import * as React from 'react'
import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const FormSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  phone: z.string().min(7, 'Phone seems short'),
  email: z.email('Enter a valid email'),
  inquiry: z.string().max(1000).optional().or(z.literal('')),
})

export type ContactFormValues = z.infer<typeof FormSchema>

export interface ContactFormProps {
  className?: string
  // If you need to override the API path later via env or prop
  apiPath?: string // default '/api/telegram/contact'
}

const mockDefaults: ContactFormValues = {
  name: 'Aarav Mehta',
  phone: '+91 90000 00000',
  email: 'aarav@example.com',
  inquiry: 'I’d like a quote and a demo for bridal portfolio.',
}

export function ContactForm({ className, apiPath = '/api/telegram/contact' }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: mockDefaults,
    mode: 'onBlur',
  })

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('submitting')
    try {
      const res = await fetch(apiPath, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      form.reset({ name: '', phone: '', email: '', inquiry: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <article
      className={cn('rounded-2xl border bg-card text-card-foreground p-4 sm:p-6', className)}
    >
      <h3 className="text-base font-semibold tracking-tight">Get a call back</h3>
      <p className="text-sm text-muted-foreground mt-1">
        Share your details and we’ll call you shortly. We can also send a PDF portfolio and set up a
        demo.
      </p>

      <Separator className="my-4" />

      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              placeholder="Your name"
              {...form.register('name')}
              aria-invalid={!!form.formState.errors.name}
            />
            {form.formState.errors.name && (
              <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              placeholder="+91 9xxxx xxxxx"
              {...form.register('phone')}
              aria-invalid={!!form.formState.errors.phone}
            />
            {form.formState.errors.phone && (
              <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...form.register('email')}
            aria-invalid={!!form.formState.errors.email}
          />
          {form.formState.errors.email && (
            <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="inquiry">Inquiry (optional)</Label>
          <Textarea
            id="inquiry"
            placeholder="Tell us a bit about what you need…"
            rows={5}
            {...form.register('inquiry')}
          />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Button type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Request Callback'}
          </Button>
          {status === 'success' && (
            <p className="text-sm text-muted-foreground">Thanks! We’ll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-destructive">Something went wrong. Please try again.</p>
          )}
        </div>
      </form>
    </article>
  )
}
