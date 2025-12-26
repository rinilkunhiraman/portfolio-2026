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
      name: 'icon',
      title: 'Skill Icon',
      type: 'image',
      description: 'Optional icon/logo for the skill (not currently displayed)',
      options: {
        hotspot: true
      }
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
    })
  ],
  orderings: [
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
      media: 'icon',
      category: 'category.name'
    },
    prepare(selection) {
      const { title, media, category } = selection
      return {
        title,
        subtitle: category || 'No category',
        media
      }
    }
  }
})
