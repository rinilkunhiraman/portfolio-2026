import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import About from '@/components/sections/About'
import Footer from '@/components/layout/Footer'
import StructuredData from '@/components/StructuredData'
import { getPersonalInfo, getSiteSettings } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { generatePersonSchema, generateBreadcrumbSchema } from '@/lib/structured-data'
import { DEFAULT_OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT } from '@/lib/constants'

export const revalidate = 3600 // Revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const [personalInfo, siteSettings] = await Promise.all([
    getPersonalInfo(),
    getSiteSettings(),
  ])

  const title = `About ${personalInfo?.firstName || 'Me'} | ${siteSettings?.title || 'Portfolio'}`
  const description = personalInfo?.tagline || siteSettings?.description || 'Learn more about my journey and expertise'
  const siteUrl = siteSettings?.siteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  let ogImage = `${siteUrl}${DEFAULT_OG_IMAGE}`
  if (personalInfo?.profileImage?.asset?._ref) {
    ogImage = urlFor(personalInfo.profileImage.asset._ref).width(OG_IMAGE_WIDTH).height(OG_IMAGE_HEIGHT).url()
  } else if (siteSettings?.ogImage?.asset?._ref) {
    ogImage = urlFor(siteSettings.ogImage.asset._ref).width(OG_IMAGE_WIDTH).height(OG_IMAGE_HEIGHT).url()
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/about`,
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
      type: 'profile',
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

export default async function AboutPage() {
  const [personalInfo, siteSettings] = await Promise.all([getPersonalInfo(), getSiteSettings()])

  const siteUrl = siteSettings?.siteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  // Generate structured data
  const structuredData = []
  if (personalInfo) {
    structuredData.push(generatePersonSchema(personalInfo, siteSettings))
  }
  structuredData.push(
    generateBreadcrumbSchema([
      { name: 'Home', url: siteUrl },
      { name: 'About', url: `${siteUrl}/about` },
    ])
  )

  return (
    <>
      <StructuredData data={structuredData} />
      <main className="min-h-screen">
        <Header />
        <About personalInfo={personalInfo} />
        <Footer />
      </main>
    </>
  )
}
