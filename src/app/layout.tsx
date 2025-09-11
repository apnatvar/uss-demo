import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#060010' },
    { media: '(prefers-color-scheme: dark)', color: '#060010' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'),
  title: {
    default: 'Ariyana Ethnic – Indian Wear',
    template: '%s | Ariyana Ethnic',
  },
  description: 'Shop curated Indian ethnic wear: sarees, lehengas, kurtas, bridal couture.',
  keywords: ['Indian wear', 'Sarees', 'Lehengas', 'Ethnic wear', 'Bridal'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ariyana Ethnic – Indian Wear',
    description: 'Curated sarees, lehengas, kurtas, bridal couture.',
    url: '/',
    siteName: 'Ariyana Ethnic',
    images: [{ url: '/1.jpg', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ariyana Ethnic – Indian Wear',
    description: 'Curated sarees, lehengas, kurtas, bridal couture.',
    images: ['/1.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh font-body antialiased">
        {/* <Header /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto px-3 py-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
