'use server'

import { ContactForm } from '@/types'

export async function submitContactForm(formData: ContactForm) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real application, this would send the form data to your backend
  console.log('Form submitted:', formData)

  // Simulate success/error
  if (Math.random() > 0.1) {
    // 90% success rate
    return { success: true, message: 'Message sent successfully!' }
  } else {
    throw new Error('Failed to send message. Please try again.')
  }
}
