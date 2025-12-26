import type { PersonalInfo, Project, Experience, SiteSettings } from '@/types'

export function generatePersonSchema(personalInfo: PersonalInfo, siteSettings?: SiteSettings | null) {
  const siteUrl = siteSettings?.siteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: `${personalInfo.firstName} ${personalInfo.lastName}`,
    jobTitle: personalInfo.title,
    description: personalInfo.bio,
    url: siteUrl,
    image: personalInfo.profileImage?.asset?._ref
      ? `${siteUrl}/api/og?image=${personalInfo.profileImage.asset._ref}`
      : undefined,
    sameAs: personalInfo.socialLinks?.map((link) => link.url) || [],
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: personalInfo.location
      ? {
          '@type': 'PostalAddress',
          addressLocality: personalInfo.location,
        }
      : undefined,
  }
}

export function generateWebsiteSchema(siteSettings: SiteSettings) {
  const siteUrl = siteSettings.siteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteSettings.title,
    description: siteSettings.description,
    url: siteUrl,
    author: {
      '@type': 'Person',
      name: siteSettings.author,
    },
  }
}

export function generateProjectSchema(project: Project, siteSettings?: SiteSettings | null) {
  const siteUrl = siteSettings?.siteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: project.liveUrl || `${siteUrl}/projects/${project.slug?.current}`,
    image: project.mainImage?.asset?._ref
      ? `${siteUrl}/api/og?image=${project.mainImage.asset._ref}`
      : undefined,
    dateCreated: project.startDate,
    dateModified: project.endDate || project.startDate,
    keywords: project.tags?.join(', '),
    author: {
      '@type': 'Person',
      name: siteSettings?.author || 'Portfolio Owner',
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateOrganizationSchema(
  experience: Experience,
  siteSettings?: SiteSettings | null
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: experience.company,
    url: experience.companyUrl,
    logo: experience.companyLogo?.asset?._ref
      ? `${siteSettings?.siteUrl || process.env.NEXT_PUBLIC_SITE_URL}/api/og?image=${experience.companyLogo.asset._ref}`
      : undefined,
  }
}

export function generateWorkExperienceSchema(
  experience: Experience,
  personalInfo?: PersonalInfo | null,
  siteSettings?: SiteSettings | null
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WorkExperience',
    name: experience.position,
    description: experience.description,
    startDate: experience.startDate,
    endDate: experience.current ? undefined : experience.endDate,
    employer: generateOrganizationSchema(experience, siteSettings),
    employee: personalInfo
      ? {
          '@type': 'Person',
          name: `${personalInfo.firstName} ${personalInfo.lastName}`,
        }
      : undefined,
  }
}

export function generateArticleSchema(
  project: Project,
  personalInfo?: PersonalInfo | null,
  siteSettings?: SiteSettings | null
) {
  const siteUrl = siteSettings?.siteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: project.title,
    description: project.description,
    image: project.mainImage?.asset?._ref
      ? `${siteUrl}/api/og?image=${project.mainImage.asset._ref}`
      : undefined,
    datePublished: project.startDate,
    dateModified: project.endDate || project.startDate,
    author: personalInfo
      ? {
          '@type': 'Person',
          name: `${personalInfo.firstName} ${personalInfo.lastName}`,
        }
      : undefined,
    publisher: siteSettings
      ? {
          '@type': 'Organization',
          name: siteSettings.title,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`,
          },
        }
      : undefined,
  }
}

