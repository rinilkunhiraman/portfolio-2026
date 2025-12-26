import { sanityFetch } from './live'
import {
  PERSONAL_INFO_QUERY,
  SKILLS_WITH_CATEGORIES_QUERY,
  SKILLS_QUERY,
  SKILL_CATEGORIES_QUERY,
  PROJECTS_QUERY,
  FEATURED_PROJECTS_QUERY,
  PROJECT_BY_SLUG_QUERY,
  PROJECT_SLUGS_QUERY,
  EXPERIENCES_QUERY,
  SOCIAL_LINKS_QUERY,
  HEADER_SOCIAL_LINKS_QUERY,
  FOOTER_SOCIAL_LINKS_QUERY,
  CONTACT_SOCIAL_LINKS_QUERY,
  CONTACT_INFO_QUERY,
  SITE_SETTINGS_QUERY,
} from '../groq'
import type {
  PersonalInfo,
  Skill,
  SkillCategory,
  Project,
  Experience,
  SocialLink,
  ContactInfo,
  SiteSettings,
} from '@/types'

// ============================================
// PERSONAL INFO
// ============================================

export async function getPersonalInfo() {
  const { data } = await sanityFetch({
    query: PERSONAL_INFO_QUERY,
    perspective: 'published',
  })
  return data as PersonalInfo | null
}

// ============================================
// SKILLS
// ============================================

export async function getSkillsWithCategories() {
  const { data } = await sanityFetch({
    query: SKILLS_WITH_CATEGORIES_QUERY,
    perspective: 'published',
  })
  return data as { categories: SkillCategory[]; skills: Skill[] } | null
}

export async function getSkills() {
  const { data } = await sanityFetch({
    query: SKILLS_QUERY,
    perspective: 'published',
  })
  return data as Skill[] | null
}

export async function getSkillCategories() {
  const { data } = await sanityFetch({
    query: SKILL_CATEGORIES_QUERY,
    perspective: 'published',
  })
  return data as SkillCategory[] | null
}

// ============================================
// PROJECTS
// ============================================

export async function getProjects() {
  const { data } = await sanityFetch({
    query: PROJECTS_QUERY,
    perspective: 'published',
  })
  return data as Project[] | null
}

export async function getFeaturedProjects() {
  const { data } = await sanityFetch({
    query: FEATURED_PROJECTS_QUERY,
    perspective: 'published',
  })
  return data as Project[] | null
}

export async function getProjectBySlug(slug: string) {
  const { data } = await sanityFetch({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug },
    perspective: 'published',
  })
  return data as Project | null
}

export async function getProjectSlugs() {
  const { data } = await sanityFetch({
    query: PROJECT_SLUGS_QUERY,
    perspective: 'published',
  })
  return data as Array<{ slug: string }> | null
}

// ============================================
// EXPERIENCE
// ============================================

export async function getExperiences() {
  const { data } = await sanityFetch({
    query: EXPERIENCES_QUERY,
    perspective: 'published',
  })
  return data as Experience[] | null
}

// ============================================
// SOCIAL LINKS
// ============================================

export async function getSocialLinks() {
  const { data } = await sanityFetch({
    query: SOCIAL_LINKS_QUERY,
    perspective: 'published',
  })
  return data as SocialLink[] | null
}

export async function getHeaderSocialLinks() {
  const { data } = await sanityFetch({
    query: HEADER_SOCIAL_LINKS_QUERY,
    perspective: 'published',
  })
  return data as SocialLink[] | null
}

export async function getFooterSocialLinks() {
  const { data } = await sanityFetch({
    query: FOOTER_SOCIAL_LINKS_QUERY,
    perspective: 'published',
  })
  return data as SocialLink[] | null
}

export async function getContactSocialLinks() {
  const { data } = await sanityFetch({
    query: CONTACT_SOCIAL_LINKS_QUERY,
    perspective: 'published',
  })
  return data as SocialLink[] | null
}

// ============================================
// CONTACT INFO
// ============================================

export async function getContactInfo() {
  const { data } = await sanityFetch({
    query: CONTACT_INFO_QUERY,
    perspective: 'published',
  })
  return data as ContactInfo | null
}

// ============================================
// SITE SETTINGS
// ============================================

export async function getSiteSettings() {
  const { data } = await sanityFetch({
    query: SITE_SETTINGS_QUERY,
    perspective: 'published',
  })
  return data as SiteSettings | null
}
