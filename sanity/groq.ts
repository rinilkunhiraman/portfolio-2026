import { defineQuery } from 'next-sanity'

// ============================================
// PERSONAL INFO QUERIES
// ============================================

export const PERSONAL_INFO_QUERY = defineQuery(`
  *[_type == "personalInfo"][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    name,
    firstName,
    roles,
    tagline,
    bio,
    profileImage {
      asset->{
        _id,
        url
      },
      alt,
      hotspot
    },
    resumeFile {
      asset->{
        _id,
        url
      }
    },
    location,
    availability,
    yearsOfExperience,
    projectsCompleted,
    "socialLinks": *[_type == "socialLink" && showInHero == true && isActive == true] | order(order asc) {
      _id,
      platform,
      url,
      username,
      displayText,
      icon {
        asset->{
          _id,
          url
        },
        alt
      },
      order
    }
  }
`)

// ============================================
// SKILL QUERIES
// ============================================

export const SKILL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "skillCategory" && isActive == true] | order(order asc) {
    _id,
    _type,
    name,
    slug,
    description,
    icon {
      asset->{
        _id,
        url
      },
      alt
    },
    color,
    order,
    isActive
  }
`)

export const SKILLS_QUERY = defineQuery(`
  *[_type == "skill" && isActive == true] | order(order asc) {
    _id,
    _type,
    name,
    category->{
      _id,
      name,
      slug,
      color
    },
    proficiency,
    proficiencyLabel,
    icon {
      asset->{
        _id,
        url
      },
      alt
    },
    description,
    yearsOfExperience,
    isHighlighted,
    order,
    isActive
  }
`)

export const SKILLS_WITH_CATEGORIES_QUERY = defineQuery(`
  {
    "categories": *[_type == "skillCategory" && isActive == true] | order(order asc) {
      _id,
      name,
      slug,
      description,
      color,
      order
    },
    "skills": *[_type == "skill" && isActive == true] | order(order asc) {
      _id,
      name,
      category->{
        _id,
        name,
        slug,
        color
      },
      proficiency,
      proficiencyLabel,
      icon {
        asset->{
          _id,
          url
        },
        alt
      },
      description,
      yearsOfExperience,
      isHighlighted,
      order
    }
  }
`)

// ============================================
// PROJECT QUERIES
// ============================================

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && isActive == true] | order(order asc) {
    _id,
    _type,
    title,
    slug,
    description,
    mainImage {
      asset->{
        _id,
        url
      },
      alt,
      hotspot
    },
    category,
    technologies[]->{
      _id,
      name,
      category->{
        name,
        color
      }
    },
    features,
    liveUrl,
    githubUrl,
    demoUrl,
    startDate,
    endDate,
    duration,
    client,
    teamSize,
    myRole,
    isFeatured,
    order
  }
`)

export const FEATURED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && isActive == true && isFeatured == true] | order(order asc) {
    _id,
    title,
    slug,
    description,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    category,
    technologies[]->{
      _id,
      name
    },
    features,
    liveUrl,
    githubUrl,
    isFeatured
  }
`)

export const PROJECT_SLUGS_QUERY = defineQuery(`
  *[_type == "project" && isActive == true] {
    "slug": slug.current
  }
`)

export const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug && isActive == true][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    slug,
    description,
    longDescription,
    mainImage {
      asset->{
        _id,
        url
      },
      alt,
      hotspot
    },
    gallery[] {
      asset->{
        _id,
        url
      },
      alt
    },
    category,
    technologies[]->{
      _id,
      name,
      category->{
        name,
        color
      },
      proficiency
    },
    features,
    challenges,
    solutions,
    results,
    liveUrl,
    githubUrl,
    demoUrl,
    caseStudyUrl,
    startDate,
    endDate,
    duration,
    client,
    teamSize,
    myRole,
    isFeatured,
    relatedExperience->{
      _id,
      title,
      company
    }
  }
`)

// ============================================
// EXPERIENCE QUERIES
// ============================================

export const EXPERIENCES_QUERY = defineQuery(`
  *[_type == "experience" && isActive == true] | order(order asc) {
    _id,
    _type,
    title,
    company,
    type,
    location,
    startDate,
    endDate,
    isCurrent,
    description,
    responsibilities,
    achievements,
    technologies[]->{
      _id,
      name,
      category->{
        name,
        color
      }
    },
    relatedProjects[]->{
      _id,
      title,
      slug
    },
    companyLogo {
      asset->{
        _id,
        url
      },
      alt
    },
    companyWebsite,
    order
  }
`)

// ============================================
// SOCIAL LINK QUERIES
// ============================================

export const SOCIAL_LINKS_QUERY = defineQuery(`
  *[_type == "socialLink" && isActive == true] | order(order asc) {
    _id,
    platform,
    url,
    username,
    displayText,
    icon {
      asset->{
        _id,
        url
      },
      alt
    },
    order,
    showInHeader,
    showInFooter,
    showInHero,
    showInContact
  }
`)

export const HEADER_SOCIAL_LINKS_QUERY = defineQuery(`
  *[_type == "socialLink" && isActive == true && showInHeader == true] | order(order asc) {
    _id,
    platform,
    url,
    username,
    displayText,
    order
  }
`)

export const FOOTER_SOCIAL_LINKS_QUERY = defineQuery(`
  *[_type == "socialLink" && isActive == true && showInFooter == true] | order(order asc) {
    _id,
    platform,
    url,
    username,
    displayText,
    order
  }
`)

export const CONTACT_SOCIAL_LINKS_QUERY = defineQuery(`
  *[_type == "socialLink" && isActive == true && showInContact == true] | order(order asc) {
    _id,
    platform,
    url,
    username,
    displayText,
    icon {
      asset->{
        _id,
        url
      },
      alt
    },
    order
  }
`)

// ============================================
// CONTACT INFO QUERIES
// ============================================

export const CONTACT_INFO_QUERY = defineQuery(`
  *[_type == "contactInfo"][0] {
    _id,
    _type,
    title,
    subtitle,
    description,
    email,
    phone,
    location,
    availability,
    preferredContactMethod,
    responseTime,
    formEnabled,
    formSuccessMessage,
    formErrorMessage
  }
`)

// ============================================
// SITE SETTINGS QUERIES
// ============================================

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0] {
    _id,
    _type,
    title,
    description,
    keywords,
    author,
    siteUrl,
    ogImage {
      asset->{
        _id,
        url
      },
      alt
    },
    twitterHandle,
    googleAnalyticsId,
    enableBlog,
    enableDarkMode,
    primaryColor,
    secondaryColor
  }
`)
