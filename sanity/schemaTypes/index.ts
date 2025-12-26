import { type SchemaTypeDefinition } from 'sanity'
import { personalInfo } from '@/sanity/schemaTypes/personalInfo'
import { skillCategory } from '@/sanity/schemaTypes/skillCategory'
import { skill } from '@/sanity/schemaTypes/skill'
import { experience } from '@/sanity/schemaTypes/experience'
import { project } from '@/sanity/schemaTypes/project'
import { socialLink } from '@/sanity/schemaTypes/socialLink'
import { contactInfo } from '@/sanity/schemaTypes/contactInfo'
import { siteSettings } from '@/sanity/schemaTypes/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    personalInfo,
    skillCategory,
    skill,
    experience,
    project,
    socialLink,
    contactInfo,
    siteSettings
  ],
}
