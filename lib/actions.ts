'use server'

import { ContactForm } from '@/types'

export async function submitContactForm(formData: ContactForm, captchaToken: string) {
  const accessKey = process.env.NEXT_PUBLIC_W3C_KEY

  if (!accessKey) {
    throw new Error('Web3Forms access key is not configured')
  }

  if (!captchaToken) {
    throw new Error('Captcha verification is required')
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        'h-captcha-response': captchaToken,
      }),
    })

    const result = await response.json()

    if (result.success) {
      return { success: true, message: 'Message sent successfully!' }
    } else {
      throw new Error(result.message || 'Failed to send message')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    throw new Error('Failed to send message. Please try again.')
  }
}
