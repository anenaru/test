import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, Globe } from 'lucide-react'
import { SiteSidebar } from '@/components/site-sidebar'
import { insightPosts } from '@/lib/insights'

export const metadata: Metadata = {
  title: 'Insights & Resources | CJ Healing Arts',
  description:
    'Empowering tools, community highlights, and resources for individuals navigating career growth, independent living, and wellness.',
}

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteSidebar />
      <main className="lg:ml-64">
        <section className="px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Insights &amp; Resources
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Empowering tools, community highlights, and resources for
              individuals navigating career growth, independent living, and
              wellness.
            </p>
          </div>

          <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-14 md:mt-20 md:gap-20">
            {insightPosts.map((post) => (
              <article
                key={post.slug}
                className="grid items-center gap-6 md:grid-cols-2 md:gap-10"
              >
                <Link
                  href={`/insights/${post.slug}`}
                  className="block overflow-hidden rounded-xl"
                >
                  <Image
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    width={640}
                    height={420}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <div>
                  <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl">
                    <Link
                      href={`/insights/${post.slug}`}
                      className="transition-colors hover:text-muted-foreground"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    {post.author} &middot; {post.date}
                  </p>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="mt-6 inline-flex items-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-20 flex max-w-5xl flex-wrap items-center justify-center gap-8 border-t border-border pt-10">
            <a
              href="mailto:cjhealingart1999@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
              cjhealingart1999@gmail.com
            </a>
            <a
              href="tel:+17542342324"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-5 w-5" />
              (754) 234-2324
            </a>
            <a
              href="https://cjhealingarts.org"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Globe className="h-5 w-5" />
              cjhealingarts.org
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
