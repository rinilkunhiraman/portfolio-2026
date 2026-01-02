'use server'

import { ContactForm } from '@/types'

export async function submitContactForm(formData: ContactForm, captchaToken: string) {
  const accessKey = process.env.NEXT_PUBLIC_W3C_KEY

  if (!accessKey) {
    console.error('Web3Forms access key is not configured')
    throw new Error('Contact form is not configured. Please email contactme.izbf7@passinbox.com directly.')
  }

  if (!captchaToken) {
    throw new Error('Please complete the captcha verification')
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

    // Check content type before parsing JSON
    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text()
      console.error('Non-JSON response:', text.substring(0, 200))
      throw new Error('Invalid response from server. Please email contactme.izbf7@passinbox.com directly.')
    }

    const result = await response.json()

    // Check if response is ok
    if (!response.ok) {
      console.error('API Error:', result)
      console.error('Status:', response.status, response.statusText)

      if (response.status === 403) {
        throw new Error('Contact form is temporarily unavailable. Please email contactme.izbf7@passinbox.com directly.')
      }

      throw new Error(result.message || 'Failed to send message. Please try again or email contactme.izbf7@passinbox.com directly.')
    }

    if (result.success) {
      return { success: true, message: 'Message sent successfully! I\'ll get back to you soon.' }
    } else {
      throw new Error(result.message || 'Failed to send message')
    }
  } catch (error) {
    console.error('Form submission error:', error)

    if (error instanceof Error) {
      throw error
    }

    throw new Error('Failed to send message. Please email contactme.izbf7@passinbox.com directly.')
  }
}
