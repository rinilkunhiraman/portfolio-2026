import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'The main title of your portfolio website',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'Brief description for SEO and social sharing',
      validation: Rule => Rule.required().max(160)
    }),
    defineField({
      name: 'keywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords for SEO (e.g., react developer, full-stack, portfolio)'
    }),
    defineField({
      name: 'url',
      title: 'Site URL',
      type: 'url',
      description: 'Your website URL (e.g., https://yourname.com)',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      description: 'Logo for your portfolio',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Small icon for browser tabs',
      options: {
        accept: '.ico,.png,.svg'
      }
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Default image for social media sharing',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'theme',
      title: 'Site Theme',
      type: 'object',
      fields: [
        {
          name: 'primaryColor',
          title: 'Primary Color',
          type: 'string',
          description: 'Main brand color (hex code)',
          validation: Rule => Rule.regex(/^#[0-9A-Fa-f]{6}$/, 'Must be a valid hex color')
        },
        {
          name: 'secondaryColor',
          title: 'Secondary Color',
          type: 'string',
          description: 'Secondary brand color (hex code)',
          validation: Rule => Rule.regex(/^#[0-9A-Fa-f]{6}$/, 'Must be a valid hex color')
        },
        {
          name: 'defaultMode',
          title: 'Default Theme Mode',
          type: 'string',
          options: {
            list: [
              { title: 'Light', value: 'light' },
              { title: 'Dark', value: 'dark' },
              { title: 'System', value: 'system' }
            ]
          },
          initialValue: 'system'
        },
        {
          name: 'allowThemeToggle',
          title: 'Allow Theme Toggle',
          type: 'boolean',
          description: 'Let users switch between light/dark mode',
          initialValue: true
        }
      ]
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation Settings',
      type: 'object',
      fields: [
        {
          name: 'showLogo',
          title: 'Show Logo in Navigation',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'menuItems',
          title: 'Navigation Menu Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'href',
                  title: 'Link',
                  type: 'string',
                  description: 'Section ID (e.g., #about) or external URL',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'isExternal',
                  title: 'External Link',
                  type: 'boolean',
                  initialValue: false
                },
                {
                  name: 'order',
                  title: 'Order',
                  type: 'number',
                  initialValue: 0
                }
              ],
              preview: {
                select: {
                  title: 'label',
                  subtitle: 'href'
                }
              }
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'footer',
      title: 'Footer Settings',
      type: 'object',
      fields: [
        {
          name: 'copyrightText',
          title: 'Copyright Text',
          type: 'string',
          description: 'Copyright notice (year will be auto-added)',
          initialValue: 'All rights reserved'
        },
        {
          name: 'showSocialLinks',
          title: 'Show Social Links',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'additionalText',
          title: 'Additional Footer Text',
          type: 'text',
          description: 'Optional additional text in footer'
        },
        {
          name: 'quickLinks',
          title: 'Quick Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'href',
                  title: 'Link',
                  type: 'string',
                  validation: Rule => Rule.required()
                }
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'analytics',
      title: 'Analytics & Tracking',
      type: 'object',
      fields: [
        {
          name: 'googleAnalyticsId',
          title: 'Google Analytics ID',
          type: 'string',
          description: 'GA4 Measurement ID (e.g., G-XXXXXXXXXX)'
        },
        {
          name: 'googleTagManagerId',
          title: 'Google Tag Manager ID',
          type: 'string',
          description: 'GTM Container ID (e.g., GTM-XXXXXXX)'
        },
        {
          name: 'facebookPixelId',
          title: 'Facebook Pixel ID',
          type: 'string'
        },
        {
          name: 'hotjarId',
          title: 'Hotjar ID',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'features',
      title: 'Site Features',
      type: 'object',
      fields: [
        {
          name: 'enableBlog',
          title: 'Enable Blog Section',
          type: 'boolean',
          initialValue: false
        },
        {
          name: 'enableTestimonials',
          title: 'Enable Testimonials',
          type: 'boolean',
          initialValue: false
        },
        {
          name: 'enableNewsletter',
          title: 'Enable Newsletter Signup',
          type: 'boolean',
          initialValue: false
        },
        {
          name: 'enableBackToTop',
          title: 'Enable Back to Top Button',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'enableProgressBar',
          title: 'Enable Reading Progress Bar',
          type: 'boolean',
          initialValue: false
        },
        {
          name: 'enableAnimations',
          title: 'Enable Scroll Animations',
          type: 'boolean',
          initialValue: true
        }
      ]
    }),
    defineField({
      name: 'maintenance',
      title: 'Maintenance Mode',
      type: 'object',
      fields: [
        {
          name: 'isEnabled',
          title: 'Enable Maintenance Mode',
          type: 'boolean',
          description: 'Show maintenance page instead of regular site',
          initialValue: false
        },
        {
          name: 'message',
          title: 'Maintenance Message',
          type: 'text',
          description: 'Message to show during maintenance'
        },
        {
          name: 'estimatedTime',
          title: 'Estimated Completion',
          type: 'datetime',
          description: 'When maintenance is expected to complete'
        }
      ]
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      readOnly: true
    })
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url'
    },
    prepare(selection) {
      const { title, url } = selection
      return {
        title: title || 'Site Settings',
        subtitle: url
      }
    }
  }
})
