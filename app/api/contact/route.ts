import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      // Fallback: log and return success in dev so the form still works without a key
      console.warn('[contact] RESEND_API_KEY not set — email not sent.')
      console.info('[contact] Would have sent:', { name, email, phone, subject, message })
      return NextResponse.json({ success: true })
    }

    const htmlBody = `
      <p><strong>Name:</strong> ${name}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Email:</strong> ${email}</p>
      ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${message}</p>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'CJ Healing Arts Contact Form <onboarding@resend.dev>',
        to: ['cjhealingart1999@gmail.com'],
        reply_to: email,
        subject: subject
          ? `[Contact Form] ${subject}`
          : `[Contact Form] Message from ${name}`,
        html: htmlBody,
      }),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.error('[contact] Resend error:', res.status, detail)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
