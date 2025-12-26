import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Projects from '@/components/sections/Projects'
import Footer from '@/components/layout/Footer'
import { getProjects, getSiteSettings } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { DEFAULT_OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT } from '@/lib/constants'

export const revalidate = 3600 // Revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings()

  const title = `Projects & Work | ${siteSettings?.title || 'Portfolio'}`
  const description = 'Browse through my portfolio of projects showcasing my development skills and expertise'
  const siteUrl = siteSettings?.siteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  const ogImage = siteSettings?.ogImage?.asset?._ref
    ? urlFor(siteSettings.ogImage.asset._ref).width(OG_IMAGE_WIDTH).height(OG_IMAGE_HEIGHT).url()
    : `${siteUrl}${DEFAULT_OG_IMAGE}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/projects`,
      siteName: siteSettings?.title,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: siteSettings?.twitterHandle,
    },
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <main className="min-h-screen">
      <Header />
      <Projects projects={projects} />
      <Footer />
    </main>
  )
}
