import { defineField, defineType } from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'skillCategory' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'proficiency',
      title: 'Proficiency Level',
      type: 'number',
      description: 'Proficiency level from 0 to 100',
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
    defineField({
      name: 'proficiencyLabel',
      title: 'Proficiency Label',
      type: 'string',
      options: {
        list: [
          { title: 'Learning (0-59)', value: 'learning' },
          { title: 'Intermediate (60-69)', value: 'intermediate' },
          { title: 'Advanced (70-84)', value: 'advanced' },
          { title: 'Expert (85-100)', value: 'expert' }
        ]
      },
      description: 'Auto-calculated based on proficiency level'
    }),
    defineField({
      name: 'icon',
      title: 'Skill Icon',
      type: 'image',
      description: 'Optional icon/logo for the skill',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of experience with this skill'
    }),
    defineField({
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
      description: 'How many years you\'ve been using this skill',
      validation: Rule => Rule.min(0).max(20)
    }),
    defineField({
      name: 'isHighlighted',
      title: 'Highlighted Skill',
      type: 'boolean',
      description: 'Mark as a key/featured skill',
      initialValue: false
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order within category (lower numbers first)',
      initialValue: 0
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this skill should be displayed',
      initialValue: true
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
      description: 'Projects that showcase this skill'
    })
  ],
  orderings: [
    {
      title: 'Proficiency (High to Low)',
      name: 'proficiencyDesc',
      by: [{ field: 'proficiency', direction: 'desc' }]
    },
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }]
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'proficiency',
      media: 'icon',
      category: 'category.name'
    },
    prepare(selection) {
      const { title, subtitle, media, category } = selection
      return {
        title,
        subtitle: `${subtitle}% • ${category || 'No category'}`,
        media
      }
    }
  }
})
