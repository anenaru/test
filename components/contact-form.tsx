'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        setState('error')
        return
      }

      setState('success')
      setFields({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setErrorMsg('Unable to reach the server. Please try again later.')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-muted/40 px-8 py-14 text-center">
        <CheckCircle className="h-12 w-12 text-foreground" />
        <h2 className="text-2xl font-semibold tracking-tight">Message sent!</h2>
        <p className="max-w-sm text-pretty text-muted-foreground">
          Thank you for reaching out. We&apos;ll get back to you as soon as
          possible.
        </p>
        <button
          type="button"
          onClick={() => setState('idle')}
          className="mt-4 text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          value={fields.name}
          onChange={handleChange}
          required
          autoComplete="name"
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane@example.com"
          value={fields.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
      </div>

      {/* Phone + Subject */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="(754) 368-3864"
          value={fields.phone}
          onChange={handleChange}
          autoComplete="tel"
        />
        <Field
          label="Subject"
          name="subject"
          type="text"
          placeholder="How can we help?"
          value={fields.subject}
          onChange={handleChange}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-sm font-medium tracking-tight"
        >
          Message <span className="text-muted-foreground">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us about yourself or how we can support you…"
          value={fields.message}
          onChange={handleChange}
          required
          className="resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm leading-relaxed placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
        />
      </div>

      {/* Error banner */}
      {state === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="inline-flex items-center justify-center gap-2 self-start rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}

// ---------- reusable input field ----------

type FieldProps = {
  label: string
  name: string
  type: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  autoComplete?: string
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  autoComplete,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium tracking-tight">
        {label}{' '}
        {required ? (
          <span className="text-muted-foreground">(required)</span>
        ) : (
          <span className="text-muted-foreground">(optional)</span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className="rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
      />
    </div>
  )
}
