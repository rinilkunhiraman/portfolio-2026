import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'Brief project description (1-2 sentences)',
      validation: Rule => Rule.required().max(200)
    }),
    defineField({
      name: 'longDescription',
      title: 'Detailed Description',
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
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' }
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        }
      ],
      description: 'Comprehensive project description with formatting'
    }),
    defineField({
      name: 'category',
      title: 'Project Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Full-Stack', value: 'fullstack' },
          { title: 'Mobile', value: 'mobile' },
          { title: 'Data Engineering', value: 'data' },
          { title: 'DevOps', value: 'devops' },
          { title: 'Machine Learning', value: 'ml' },
          { title: 'Design', value: 'design' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
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
      description: 'Technologies and skills used in this project'
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of main features/functionality'
    }),
    defineField({
      name: 'challenges',
      title: 'Technical Challenges',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key challenges faced and how they were solved'
    }),
    defineField({
      name: 'learnings',
      title: 'Key Learnings',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'What you learned from this project'
    }),
    defineField({
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            },
            {
              name: 'isMain',
              title: 'Main Image',
              type: 'boolean',
              description: 'Use as the primary project image',
              initialValue: false
            }
          ],
          preview: {
            select: {
              title: 'caption',
              subtitle: 'alt',
              media: 'image'
            }
          }
        }
      ]
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Demo URL',
      type: 'url',
      description: 'Link to live project demo'
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub Repository',
      type: 'url',
      description: 'Link to GitHub repository'
    }),
    defineField({
      name: 'caseStudyUrl',
      title: 'Case Study URL',
      type: 'url',
      description: 'Link to detailed case study or blog post'
    }),
    defineField({
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'On Hold', value: 'on-hold' },
          { title: 'Archived', value: 'archived' }
        ]
      },
      initialValue: 'completed'
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date'
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty if project is ongoing'
    }),
    defineField({
      name: 'teamSize',
      title: 'Team Size',
      type: 'number',
      description: 'Number of people who worked on this project',
      validation: Rule => Rule.min(1)
    }),
    defineField({
      name: 'myRole',
      title: 'My Role',
      type: 'string',
      description: 'Your specific role in this project'
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Show this project prominently',
      initialValue: false
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in project listing (lower numbers first)',
      initialValue: 0
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this project should be displayed',
      initialValue: true
    }),
    defineField({
      name: 'relatedExperience',
      title: 'Related Experience',
      type: 'reference',
      to: [{ type: 'experience' }],
      description: 'Link to related work experience'
    })
  ],
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'isFeatured', direction: 'desc' },
        { field: 'endDate', direction: 'desc' }
      ]
    },
    {
      title: 'Most Recent First',
      name: 'dateDesc',
      by: [{ field: 'endDate', direction: 'desc' }]
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
      category: 'category',
      status: 'status',
      isFeatured: 'isFeatured',
      media: 'images.0.image'
    },
    prepare(selection) {
      const { title, category, status, isFeatured, media } = selection
      const badges = []
      if (isFeatured) badges.push('★ Featured')
      if (status !== 'completed') badges.push(status)
      
      return {
        title,
        subtitle: `${category}${badges.length > 0 ? ` • ${badges.join(' • ')}` : ''}`,
        media
      }
    }
  }
})
