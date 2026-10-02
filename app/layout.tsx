import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['SOFT', 'opsz'],
})

export const metadata: Metadata = {
  title: 'Loki Pawprints — Creator Portfolio & Media Kit',
  description:
    'Meet Loki, a Cavapoo with main-character energy. Dog comedy, lifestyle, UGC and brand partnerships from Dallas–Fort Worth. @lokipawprints',
  generator: 'v0.app',
  openGraph: {
    title: 'Loki Pawprints — Creator Portfolio & Media Kit',
    description: 'Professional treat tester. Part-time troublemaker. Full-time main character.',
    images: ['/images/loki-hero.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f1e8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
