import { defineField, defineType } from 'sanity'

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'GitHub', value: 'github' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Twitter/X', value: 'twitter' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'Medium', value: 'medium' },
          { title: 'Dev.to', value: 'devto' },
          { title: 'Hashnode', value: 'hashnode' },
          { title: 'Stack Overflow', value: 'stackoverflow' },
          { title: 'CodePen', value: 'codepen' },
          { title: 'Dribbble', value: 'dribbble' },
          { title: 'Behance', value: 'behance' },
          { title: 'Discord', value: 'discord' },
          { title: 'Slack', value: 'slack' },
          { title: 'Email', value: 'email' },
          { title: 'Website', value: 'website' },
          { title: 'RSS', value: 'rss' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'name',
      title: 'Display Name',
      type: 'string',
      description: 'Custom name for this link (optional, defaults to platform name)',
      placeholder: 'e.g., My GitHub Profile'
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'username',
      title: 'Username/Handle',
      type: 'string',
      description: 'Your username on this platform (without @)',
      placeholder: 'e.g., rinilkunhiraman'
    }),
    defineField({
      name: 'icon',
      title: 'Custom Icon',
      type: 'image',
      description: 'Upload custom icon (optional, will use default platform icon if not provided)',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of what people can find on this platform'
    }),
    defineField({
      name: 'isPublic',
      title: 'Show Publicly',
      type: 'boolean',
      description: 'Whether this link should be displayed on the website',
      initialValue: true
    }),
    defineField({
      name: 'showInHero',
      title: 'Show in Hero Section',
      type: 'boolean',
      description: 'Display this link in the hero/header area',
      initialValue: false
    }),
    defineField({
      name: 'showInContact',
      title: 'Show in Contact Section',
      type: 'boolean',
      description: 'Display this link in the contact section',
      initialValue: true
    }),
    defineField({
      name: 'showInFooter',
      title: 'Show in Footer',
      type: 'boolean',
      description: 'Display this link in the footer',
      initialValue: false
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which links appear (lower numbers first)',
      initialValue: 0
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this link is currently active',
      initialValue: true
    })
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Platform A-Z',
      name: 'platformAsc',
      by: [{ field: 'platform', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      platform: 'platform',
      name: 'name',
      username: 'username',
      url: 'url',
      isPublic: 'isPublic',
      media: 'icon'
    },
    prepare(selection) {
      const { platform, name, username, url, isPublic, media } = selection

      const displayName = name || platform.charAt(0).toUpperCase() + platform.slice(1)
      const subtitle = username ? `@${username}` : url

      return {
        title: `${displayName}${!isPublic ? ' (Private)' : ''}`,
        subtitle,
        media
      }
    }
  }
})
