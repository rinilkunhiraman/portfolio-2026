import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import StructuredData from '@/components/StructuredData'
import {
  getPersonalInfo,
  getSiteSettings,
  getSkills,
  getSkillCategories,
  getProjects,
  getExperiences,
} from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { generatePersonSchema, generateWebsiteSchema } from '@/lib/structured-data'
import { DEFAULT_OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT } from '@/lib/constants'

export const revalidate = 3600 // Revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const [personalInfo, siteSettings] = await Promise.all([
    getPersonalInfo(),
    getSiteSettings(),
  ])

  const title = siteSettings?.title || 'Portfolio'
  const description = siteSettings?.description || personalInfo?.tagline || 'Professional Portfolio'
  const siteUrl = siteSettings?.siteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  const ogImage = siteSettings?.ogImage?.asset?._ref
    ? urlFor(siteSettings.ogImage.asset._ref).width(OG_IMAGE_WIDTH).height(OG_IMAGE_HEIGHT).url()
    : `${siteUrl}${DEFAULT_OG_IMAGE}`

  return {
    title,
    description,
    keywords: siteSettings?.keywords || [],
    authors: siteSettings?.author ? [{ name: siteSettings.author }] : [],
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: title,
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

export default async function Home() {
  // Fetch all data in parallel
  const [personalInfo, siteSettings, skills, categories, projects, experiences] = await Promise.all([
    getPersonalInfo(),
    getSiteSettings(),
    getSkills(),
    getSkillCategories(),
    getProjects(),
    getExperiences(),
  ])

  const skillsData = {
    skills: skills || [],
    categories: categories || [],
  }

  // Generate structured data
  const structuredData = []
  if (personalInfo) {
    structuredData.push(generatePersonSchema(personalInfo, siteSettings))
  }
  if (siteSettings) {
    structuredData.push(generateWebsiteSchema(siteSettings))
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <main className="min-h-screen">
        <Header />
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} />
        <Skills skillsData={skillsData} />
        <Projects projects={projects} />
        <Experience experiences={experiences} />
        <Contact personalInfo={personalInfo} />
        <Footer />
      </main>
    </>
  )
}
