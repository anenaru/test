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

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      console.warn('[contact] WEB3FORMS_ACCESS_KEY not set — email not sent.')
      console.info('[contact] Would have sent:', { name, email, phone, subject, message })
      return NextResponse.json({ success: true })
    }

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        phone: phone || '',
        subject: subject ? `[Contact Form] ${subject}` : `[Contact Form] Message from ${name}`,
        message,
        replyto: email,
      }),
    })

    const data = await res.json()

    if (!res.ok || !data.success) {
      console.error('[contact] Web3Forms error:', data)
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
