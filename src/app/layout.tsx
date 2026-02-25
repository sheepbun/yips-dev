import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ThemeScript } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'yips.dev',
    template: '%s · yips.dev',
  },
  description: 'Local Personal Assistant, Code Editor, and Self-Hosted Gateway.',
  openGraph: {
    title: 'yips.dev',
    description: 'Local Personal Assistant, Code Editor, and Self-Hosted Gateway.',
    url: 'https://yips.dev',
    siteName: 'yips.dev',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
