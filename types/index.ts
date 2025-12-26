// ============================================
// SANITY TYPES - Aligned with Sanity Schemas
// ============================================

// Base Sanity Types
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface SanityReference {
  _ref: string;
  _type: 'reference';
}

export interface SanityBlock {
  _type: 'block';
  children: Array<{
    _type: 'span';
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _key: string;
    _type: string;
    href?: string;
  }>;
  style?: string;
}

// ============================================
// PERSONAL INFO
// ============================================
export interface PersonalInfo {
  _id: string;
  _type: 'personalInfo';
  _createdAt: string;
  _updatedAt: string;
  name: string;
  firstName: string;
  lastName?: string;
  title?: string;
  roles: string[];
  tagline: string;
  bio: SanityBlock[];
  profileImage?: SanityImage;
  resumeFile?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  location?: string;
  availability?: 'available' | 'busy' | 'unavailable';
  yearsOfExperience?: number;
  projectsCompleted?: number;
  email?: string;
  phone?: string;
  socialLinks?: SocialLink[];
}

// ============================================
// SKILL CATEGORY
// ============================================
export interface SkillCategory {
  _id: string;
  _ref?: string;
  _type: 'skillCategory';
  _createdAt: string;
  _updatedAt: string;
  name: string;
  slug: SanitySlug;
  description?: string;
  icon?: SanityImage;
  color?: string;
  order: number;
  isActive: boolean;
}

// ============================================
// SKILL
// ============================================
export interface Skill {
  _id: string;
  _type: 'skill';
  _createdAt: string;
  _updatedAt: string;
  name: string;
  category: SkillCategory;
  proficiency: number;
  proficiencyLabel?: 'learning' | 'intermediate' | 'advanced' | 'expert';
  icon?: SanityImage;
  description?: string;
  yearsOfExperience?: number;
  isHighlighted: boolean;
  order: number;
  isActive: boolean;
}

// ============================================
// PROJECT
// ============================================
export interface Project {
  _id: string;
  _type: 'project';
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: SanitySlug;
  description: string;
  longDescription?: SanityBlock[];
  mainImage?: SanityImage;
  gallery?: SanityImage[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'data' | 'devops' | 'ml' | 'design' | 'other';
  technologies?: Skill[];
  tags?: string[];
  features?: string[];
  challenges?: SanityBlock[];
  solutions?: SanityBlock[];
  results?: SanityBlock[];
  liveUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  startDate?: string;
  endDate?: string;
  duration?: string;
  client?: string;
  teamSize?: number;
  myRole?: string;
  status?: string;
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
  isFeatured: boolean;
  order: number;
  isActive: boolean;
  relatedExperience?: SanityReference;
}

// ============================================
// EXPERIENCE
// ============================================
export interface Experience {
  _id: string;
  _type: 'experience';
  _createdAt: string;
  _updatedAt: string;
  title: string;
  position?: string;
  company?: string;
  companyUrl?: string;
  type: 'fulltime' | 'parttime' | 'freelance' | 'contract' | 'internship' | 'project' | 'personal' | 'volunteer';
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  current?: boolean;
  description: SanityBlock[];
  responsibilities?: string[];
  achievements?: string[];
  technologies?: Skill[];
  relatedProjects?: Project[];
  companyLogo?: SanityImage;
  companyWebsite?: string;
  order: number;
  isActive: boolean;
}

// ============================================
// SOCIAL LINK
// ============================================
export interface SocialLink {
  _id: string;
  _key?: string;
  _type: 'socialLink';
  _createdAt: string;
  _updatedAt: string;
  platform: string;
  url: string;
  username?: string;
  displayText?: string;
  icon?: SanityImage;
  order: number;
  isActive: boolean;
  showInHeader: boolean;
  showInFooter: boolean;
  showInHero: boolean;
  showInContact: boolean;
}

// ============================================
// CONTACT INFO
// ============================================
export interface ContactInfo {
  _id: string;
  _type: 'contactInfo';
  _createdAt: string;
  _updatedAt: string;
  title?: string;
  subtitle?: string;
  description?: SanityBlock[];
  email: string;
  phone?: string;
  location?: string;
  availability?: string;
  preferredContactMethod?: 'email' | 'phone' | 'form';
  responseTime?: string;
  formEnabled: boolean;
  formSuccessMessage?: string;
  formErrorMessage?: string;
}

// ============================================
// SITE SETTINGS
// ============================================
export interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  _createdAt: string;
  _updatedAt: string;
  title: string;
  description: string;
  keywords?: string[];
  author: string;
  siteUrl: string;
  ogImage?: SanityImage;
  twitterHandle?: string;
  googleAnalyticsId?: string;
  enableBlog: boolean;
  enableDarkMode: boolean;
  primaryColor?: string;
  secondaryColor?: string;
}

// ============================================
// FORM TYPES
// ============================================
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ============================================
// UTILITY TYPES
// ============================================
export type SanityDocument = PersonalInfo | SkillCategory | Skill | Project | Experience | SocialLink | ContactInfo | SiteSettings;
