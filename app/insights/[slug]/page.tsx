import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { SiteSidebar } from '@/components/site-sidebar'
import { getPostBySlug, insightPosts } from '@/lib/insights'

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Insights & Resources | CJ Healing Arts' }
  return {
    title: `${post.title} | CJ Healing Arts`,
    description: post.excerpt,
  }
}

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteSidebar />
      <main className="lg:ml-64">
        <article className="px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Insights &amp; Resources
            </Link>

            <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-muted-foreground">
              {post.author} &middot; {post.date}
            </p>

            <Image
              src={post.image || '/placeholder.svg'}
              alt={post.title}
              width={768}
              height={480}
              className="mt-8 aspect-[3/2] w-full rounded-xl object-cover"
              priority
            />

            <div className="mt-10 flex flex-col gap-6">
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-pretty text-lg leading-relaxed text-foreground/90"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
