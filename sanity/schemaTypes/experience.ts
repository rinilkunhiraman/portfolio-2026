import { defineField, defineType } from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'company',
      title: 'Company/Organization',
      type: 'string',
      description: 'Leave empty for personal projects'
    }),
    defineField({
      name: 'type',
      title: 'Experience Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time Job', value: 'fulltime' },
          { title: 'Part-time Job', value: 'parttime' },
          { title: 'Freelance', value: 'freelance' },
          { title: 'Contract', value: 'contract' },
          { title: 'Internship', value: 'internship' },
          { title: 'Project Work', value: 'project' },
          { title: 'Personal Project', value: 'personal' },
          { title: 'Volunteer', value: 'volunteer' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., San Francisco, CA or Remote'
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty if current position'
    }),
    defineField({
      name: 'isCurrent',
      title: 'Is Current Position',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H4', value: 'h4' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' }
            ]
          }
        }
      ],
      description: 'Detailed description of role and responsibilities'
    }),
    defineField({
      name: 'achievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points of key achievements and impact'
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'skill' }]
        }
      ],
      description: 'Skills/technologies used in this role'
    }),
    defineField({
      name: 'relatedProjects',
      title: 'Related Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }]
        }
      ],
      description: 'Projects completed during this experience'
    }),
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'companyWebsite',
      title: 'Company Website',
      type: 'url'
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in timeline (lower numbers first, typically most recent first)',
      initialValue: 0
    }),
    defineField({
      name: 'isHighlighted',
      title: 'Highlighted Experience',
      type: 'boolean',
      description: 'Mark as featured/important experience',
      initialValue: false
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this experience should be displayed',
      initialValue: true
    })
  ],
  orderings: [
    {
      title: 'Most Recent First',
      name: 'dateDesc',
      by: [{ field: 'startDate', direction: 'desc' }]
    },
    {
      title: 'Oldest First',
      name: 'dateAsc',
      by: [{ field: 'startDate', direction: 'asc' }]
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      company: 'company',
      startDate: 'startDate',
      endDate: 'endDate',
      isCurrent: 'isCurrent',
      media: 'companyLogo'
    },
    prepare(selection) {
      const { title, company, startDate, endDate, isCurrent, media } = selection
      const startYear = startDate ? new Date(startDate).getFullYear() : ''
      const endYear = isCurrent ? 'Present' : (endDate ? new Date(endDate).getFullYear() : '')
      const dateRange = startYear && endYear ? `${startYear} - ${endYear}` : ''
      
      return {
        title: `${title}${company ? ` at ${company}` : ''}`,
        subtitle: dateRange,
        media
      }
    }
  }
})
