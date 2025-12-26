import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rinil Kunhiraman - Full-Stack Developer Portfolio',
  description:
    'Professional portfolio showcasing full-stack development expertise, data engineering, and DevOps skills. Experienced in React, Next.js, Node.js, MongoDB, and modern web technologies.',
  keywords: [
    'full-stack developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'portfolio',
    'web developer',
    'data engineering',
    'DevOps',
    'JavaScript',
    'frontend',
    'backend',
  ],
  authors: [{ name: 'Rinil Kunhiraman', url: 'https://rinil.dev' }],
  creator: 'Rinil Kunhiraman' ,
  publisher: 'Rinil Kunhiraman',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rinilkunhiraman.dev',
    title: 'Rinil Kunhiraman - Full-Stack Developer Portfolio',
    description:
      'Professional portfolio showcasing full-stack development expertise, data engineering, and DevOps skills.',
    siteName: 'Rinil Kunhiraman Portfolio',
    images: [
      {
        url: '/og-image-placeholder.svg',
        width: 1200,
        height: 630,
        alt: 'Rinil Kunhiraman - Full-Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rinil Kunhiraman - Full-Stack Developer Portfolio',
    description:
      'Professional portfolio showcasing full-stack development expertise, data engineering, and DevOps skills.',
    images: ['/og-image-placeholder.svg'],
    creator: '@rinilkunhiraman',
  },
  alternates: {
    canonical: 'https://rinilkunhiraman.dev',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rinil Kunhiraman',
  jobTitle: 'Full-Stack Developer',
  description:
    'Professional full-stack developer with expertise in React, Next.js, Node.js, and modern web technologies. Expanding into data engineering and DevOps.',
  url: 'https://rinilkunhiraman.dev',
  sameAs: [
    'https://github.com/rinilkunhiraman',
    'https://linkedin.com/in/rinilkunhiraman',
    'https://twitter.com/rinilkunhiraman',
  ],
  knowsAbout: [
    'React.js',
    'Next.js',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'Full-Stack Development',
    'Data Engineering',
    'DevOps',
    'Web Development',
  ],
  alumniOf: {
    '@type': 'Organization',
    name: 'Self-Taught Developer',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  )
}
