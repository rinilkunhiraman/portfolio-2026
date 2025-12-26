import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Skills from '@/components/sections/Skills'
import Footer from '@/components/layout/Footer'
import { getSkillsWithCategories, getSiteSettings } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { DEFAULT_OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT } from '@/lib/constants'

export const revalidate = 3600 // Revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings()

  const title = `Skills & Technologies | ${siteSettings?.title || 'Portfolio'}`
  const description = 'Explore my technical skills and expertise across various technologies and frameworks'
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
      url: `${siteUrl}/skills`,
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

export default async function SkillsPage() {
  const skillsData = await getSkillsWithCategories()

  return (
    <main className="min-h-screen">
      <Header />
      <Skills skillsData={skillsData} />
      <Footer />
    </main>
  )
}
