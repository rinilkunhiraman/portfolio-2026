import { defineField, defineType } from 'sanity'

export const personalInfo = defineType({
  name: 'personalInfo',
  title: 'Personal Information',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'roles',
      title: 'Professional Roles',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Rotating roles displayed in hero section',
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      description: 'Brief description in hero section',
      validation: Rule => Rule.required().max(200)
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: Rule => Rule.required()
        }
      ]
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Section Title',
      type: 'string',
      initialValue: 'About Me'
    }),
    defineField({
      name: 'aboutSubtitle',
      title: 'About Section Subtitle',
      type: 'text',
      validation: Rule => Rule.max(250)
    }),
    defineField({
      name: 'journey',
      title: 'My Journey',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'My Journey'
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' }
              ],
              marks: {
                decorators: [
                  { title: 'Strong', value: 'strong' },
                  { title: 'Emphasis', value: 'em' }
                ]
              }
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'whatDrivesMe',
      title: 'What Drives Me',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'What Drives Me'
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' }
              ],
              marks: {
                decorators: [
                  { title: 'Strong', value: 'strong' },
                  { title: 'Emphasis', value: 'em' }
                ]
              }
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'stats',
      title: 'Key Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'color',
              title: 'Color Theme',
              type: 'string',
              options: {
                list: [
                  { title: 'Blue', value: 'blue' },
                  { title: 'Purple', value: 'purple' },
                  { title: 'Green', value: 'green' },
                  { title: 'Orange', value: 'orange' },
                  { title: 'Red', value: 'red' },
                  { title: 'Indigo', value: 'indigo' }
                ]
              },
              initialValue: 'blue'
            }
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value'
            }
          }
        }
      ],
      validation: Rule => Rule.max(4)
    }),
    defineField({
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of core professional values'
    }),
    defineField({
      name: 'resumeFile',
      title: 'Resume File',
      type: 'file',
      options: {
        accept: '.pdf'
      }
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Current location (e.g., San Francisco, CA)'
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tagline',
      media: 'profileImage'
    }
  }
})
