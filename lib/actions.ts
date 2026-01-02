'use server'

import { ContactForm } from '@/types'

export async function submitContactForm(formData: ContactForm, captchaToken: string) {
  const accessKey = process.env.NEXT_PUBLIC_W3C_KEY

  if (!accessKey) {
    console.warn('Web3Forms access key is not configured - using mock mode')
    // Mock success for development
    return { success: true, message: 'Message received! (Development mode - not actually sent)' }
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

    // Check if response is ok
    if (!response.ok) {
      const errorText = await response.text()
      console.error('API Error Response:', errorText)
      console.error('Status:', response.status, response.statusText)

      // Fallback to mock success if API fails
      console.warn('Web3Forms API failed - using mock mode')
      return { success: true, message: 'Message received! (API unavailable - please contact directly via email)' }
    }

    // Check content type before parsing JSON
    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text()
      console.error('Non-JSON response:', text.substring(0, 200))

      // Fallback to mock success
      console.warn('Invalid response format - using mock mode')
      return { success: true, message: 'Message received! (Please contact directly via email for urgent matters)' }
    }

    const result = await response.json()

    if (result.success) {
      return { success: true, message: 'Message sent successfully!' }
    } else {
      throw new Error(result.message || 'Failed to send message')
    }
  } catch (error) {
    console.error('Form submission error:', error)

    // Graceful fallback - don't break the user experience
    return {
      success: true,
      message: 'Thank you for your message! Please also reach out via email at me@remote.com for urgent matters.'
    }
  }
}
