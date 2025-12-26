import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StructuredData from '@/components/StructuredData'
import {
  getProjectBySlug,
  getProjectSlugs,
  getSiteSettings,
  getPersonalInfo,
} from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import ProjectDetail from '@/components/sections/ProjectDetail'
import {
  generateProjectSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
} from '@/lib/structured-data'
import { DEFAULT_OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT } from '@/lib/constants'

export const revalidate = 3600 // Revalidate every hour
export const dynamicParams = true

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = await getProjectSlugs()

  return (
    slugs?.map((item) => ({
      slug: item.slug,
    })) || []
  )
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const [project, siteSettings] = await Promise.all([
    getProjectBySlug(slug),
    getSiteSettings(),
  ])

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  const title = `${project.title} | ${siteSettings?.title || 'Portfolio'}`
  const description = project.description
  const siteUrl = siteSettings?.siteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  let ogImage = `${siteUrl}${DEFAULT_OG_IMAGE}`
  if (project.mainImage?.asset?._ref) {
    ogImage = urlFor(project.mainImage.asset._ref).width(OG_IMAGE_WIDTH).height(OG_IMAGE_HEIGHT).url()
  } else if (siteSettings?.ogImage?.asset?._ref) {
    ogImage = urlFor(siteSettings.ogImage.asset._ref).width(OG_IMAGE_WIDTH).height(OG_IMAGE_HEIGHT).url()
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/projects/${slug}`,
      siteName: siteSettings?.title,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const [project, personalInfo, siteSettings] = await Promise.all([
    getProjectBySlug(slug),
    getPersonalInfo(),
    getSiteSettings(),
  ])

  if (!project) {
    notFound()
  }

  const siteUrl = siteSettings?.siteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  // Generate structured data
  const structuredData = [
    generateProjectSchema(project, siteSettings),
    generateArticleSchema(project, personalInfo, siteSettings),
    generateBreadcrumbSchema([
      { name: 'Home', url: siteUrl },
      { name: 'Projects', url: `${siteUrl}/projects` },
      { name: project.title, url: `${siteUrl}/projects/${slug}` },
    ]),
  ]

  return (
    <>
      <StructuredData data={structuredData} />
      <main className="min-h-screen">
        <Header />
        <ProjectDetail project={project} />
        <Footer />
      </main>
    </>
  )
}
