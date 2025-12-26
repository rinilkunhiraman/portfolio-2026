import { defineField, defineType } from 'sanity'

export const contactInfo = defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Contact Section Title',
      type: 'string',
      initialValue: 'Get In Touch'
    }),
    defineField({
      name: 'subtitle',
      title: 'Contact Section Subtitle',
      type: 'text',
      description: 'Brief message encouraging visitors to get in touch'
    }),
    defineField({
      name: 'description',
      title: 'Contact Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' }
            ]
          }
        }
      ],
      description: 'Detailed description for the contact section'
    }),
    defineField({
      name: 'email',
      title: 'Primary Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'alternateEmail',
      title: 'Alternate Email',
      type: 'string',
      validation: Rule => Rule.email()
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'city',
          title: 'City',
          type: 'string'
        },
        {
          name: 'state',
          title: 'State/Province',
          type: 'string'
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string'
        },
        {
          name: 'displayText',
          title: 'Display Text',
          type: 'string',
          description: 'How location should be displayed (e.g., "San Francisco, CA")'
        },
        {
          name: 'coordinates',
          title: 'Coordinates',
          type: 'geopoint',
          description: 'Optional: for maps integration'
        },
        {
          name: 'timezone',
          title: 'Timezone',
          type: 'string',
          description: 'e.g., America/New_York, Europe/London'
        }
      ]
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'object',
      fields: [
        {
          name: 'status',
          title: 'Current Status',
          type: 'string',
          options: {
            list: [
              { title: 'Available for new projects', value: 'available' },
              { title: 'Partially available', value: 'partial' },
              { title: 'Not available', value: 'unavailable' },
              { title: 'Open to opportunities', value: 'opportunities' }
            ]
          },
          initialValue: 'available'
        },
        {
          name: 'message',
          title: 'Availability Message',
          type: 'text',
          description: 'Additional context about your availability'
        },
        {
          name: 'responseTime',
          title: 'Typical Response Time',
          type: 'string',
          description: 'e.g., "within 24 hours", "1-2 business days"',
          initialValue: 'within 24 hours'
        }
      ]
    }),
    defineField({
      name: 'preferredContactMethods',
      title: 'Preferred Contact Methods',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Email', value: 'email' },
              { title: 'Phone', value: 'phone' },
              { title: 'LinkedIn', value: 'linkedin' },
              { title: 'Contact Form', value: 'form' },
              { title: 'Social Media', value: 'social' }
            ]
          }
        }
      ],
      description: 'How you prefer to be contacted (in order of preference)'
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'object',
      fields: [
        {
          name: 'timezone',
          title: 'Timezone',
          type: 'string',
          description: 'e.g., PST, EST, GMT'
        },
        {
          name: 'schedule',
          title: 'Schedule',
          type: 'text',
          description: 'e.g., "Monday-Friday, 9 AM - 6 PM PST"'
        },
        {
          name: 'note',
          title: 'Additional Note',
          type: 'string',
          description: 'e.g., "Available for urgent matters outside these hours"'
        }
      ]
    }),
    defineField({
      name: 'formSettings',
      title: 'Contact Form Settings',
      type: 'object',
      fields: [
        {
          name: 'isEnabled',
          title: 'Enable Contact Form',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'submitMessage',
          title: 'Success Message',
          type: 'text',
          description: 'Message shown after successful form submission',
          initialValue: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.'
        },
        {
          name: 'errorMessage',
          title: 'Error Message',
          type: 'text',
          description: 'Message shown when form submission fails',
          initialValue: 'Sorry, there was an error sending your message. Please try again or contact me directly.'
        },
        {
          name: 'requiredFields',
          title: 'Required Fields',
          type: 'array',
          of: [
            {
              type: 'string',
              options: {
                list: [
                  { title: 'Name', value: 'name' },
                  { title: 'Email', value: 'email' },
                  { title: 'Subject', value: 'subject' },
                  { title: 'Message', value: 'message' },
                  { title: 'Phone', value: 'phone' },
                  { title: 'Company', value: 'company' }
                ]
              }
            }
          ],
          initialValue: ['name', 'email', 'subject', 'message']
        },
        {
          name: 'enableSpamProtection',
          title: 'Enable Spam Protection',
          type: 'boolean',
          description: 'Add honeypot fields and other spam prevention measures',
          initialValue: true
        }
      ]
    }),
    defineField({
      name: 'ctaText',
      title: 'Call-to-Action Text',
      type: 'string',
      description: 'Text for contact buttons and CTAs',
      initialValue: 'Let\'s work together'
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether contact information should be displayed',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'title',
      email: 'email',
      status: 'availability.status'
    },
    prepare(selection) {
      const { title, email, status } = selection
      return {
        title: title || 'Contact Information',
        subtitle: `${email} • ${status || 'No status set'}`
      }
    }
  }
})
