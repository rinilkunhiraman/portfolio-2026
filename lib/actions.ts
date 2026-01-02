// NOTE: This is now a CLIENT-SIDE function, not a server action
// Web3Forms API is protected by Cloudflare which blocks server-side requests
// We need to call it from the browser to pass Cloudflare's protection

import { ContactForm } from '@/types'

export async function submitContactForm(formData: ContactForm) {
  const accessKey = process.env.NEXT_PUBLIC_W3C_KEY

  if (!accessKey) {
    console.error('Web3Forms access key is not configured')
    throw new Error('Contact form is not configured. Please email contactme.izbf7@passinbox.com directly.')
  }

  try {
    const requestBody = {
      access_key: accessKey,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    console.log('Submitting to Web3Forms from client...')
    console.log('Access key:', accessKey.substring(0, 8) + '...')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    console.log('Response status:', response.status, response.statusText)

    // Check content type before parsing JSON
    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text()
      console.error('Non-JSON response (Cloudflare block?):', text.substring(0, 200))
      throw new Error('Request blocked. Please try again or email contactme.izbf7@passinbox.com directly.')
    }

    const result = await response.json()
    console.log('Web3Forms response:', result)

    if (!response.ok) {
      console.error('API Error:', result)
      throw new Error(result.message || 'Failed to send message. Please try again or email contactme.izbf7@passinbox.com directly.')
    }

    if (result.success) {
      console.log('✅ Form submitted successfully!')
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
