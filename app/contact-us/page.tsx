import type { Metadata } from 'next'
import { Mail, Phone, Globe } from 'lucide-react'
import { SiteSidebar } from '@/components/site-sidebar'
import { SiteFooter } from '@/components/site-footer'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us | CJ Healing Arts',
  description:
    'Get in touch with CJ Healing Arts. We'd love to hear from you — whether you have a question about our services or want to learn more about how we can help.',
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteSidebar />
      <main className="lg:ml-64">
        <section className="px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Have a question or want to learn more about our services? Fill out
              the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          {/* Two-column layout: form + contact details */}
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-12 md:mt-20 lg:grid-cols-3">
            {/* Form takes 2/3 */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact details take 1/3 */}
            <aside className="flex flex-col gap-8">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  Reach us directly
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Prefer to reach out another way? We're happy to hear from
                  you.
                </p>
              </div>

              <ul className="flex flex-col gap-5">
                <li>
                  <a
                    href="mailto:cjhealingart1999@gmail.com"
                    className="inline-flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>cjhealingart1999@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+17543683864"
                    className="inline-flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Phone className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>(754) 368-3864</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cjhealingarts.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Globe className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>cjhealingarts.org</span>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  )
}
