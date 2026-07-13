import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { SiteSidebar } from '@/components/site-sidebar'
import { getInsightPostBySlug, getAllInsightSlugs, urlFor } from '@/lib/sanity'
import { getPostBySlug, insightPosts } from '@/lib/insights'
import { PortableText } from '@/components/portable-text'

export const revalidate = 60

export async function generateStaticParams() {
  // Merge slugs from Sanity (if available) and static fallback
  let slugs: string[] = []
  try {
    slugs = await getAllInsightSlugs()
  } catch {
    // Sanity not configured yet
  }
  const staticSlugs = insightPosts.map((p) => p.slug)
  const merged = Array.from(new Set([...slugs, ...staticSlugs]))
  return merged.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  try {
    const post = await getInsightPostBySlug(slug)
    if (post) {
      return {
        title: `${post.title} | CJ Healing Arts`,
        description: post.excerpt,
      }
    }
  } catch {
    // fall through to static
  }

  const staticPost = getPostBySlug(slug)
  if (staticPost) {
    return {
      title: `${staticPost.title} | CJ Healing Arts`,
      description: staticPost.excerpt,
    }
  }

  return { title: 'Insights & Resources | CJ Healing Arts' }
}

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // ── Try Sanity first ───────────────────────────────────────────────────────
  let sanityPost: Awaited<ReturnType<typeof getInsightPostBySlug>> = null
  try {
    sanityPost = await getInsightPostBySlug(slug)
  } catch {
    // Sanity not configured yet
  }

  if (sanityPost) {
    const imageUrl = sanityPost.image
      ? urlFor(sanityPost.image).width(768).height(512).url()
      : null
    const formattedDate = new Date(sanityPost.date).toLocaleDateString(
      'en-US',
      { year: 'numeric', month: 'long', day: 'numeric' }
    )

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
                {sanityPost.title}
              </h1>
              <p className="mt-4 text-muted-foreground">
                {sanityPost.author} &middot; {formattedDate}
              </p>

              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={
                    (sanityPost.image as { alt?: string })?.alt ??
                    sanityPost.title
                  }
                  width={768}
                  height={512}
                  className="mt-8 aspect-[3/2] w-full rounded-xl object-cover"
                  priority
                />
              )}

              <div className="mt-10">
                <PortableText value={sanityPost.content as unknown[]} />
              </div>
            </div>
          </article>
        </main>
      </div>
    )
  }

  // ── Fall back to static data ───────────────────────────────────────────────
  const staticPost = getPostBySlug(slug)
  if (!staticPost) notFound()

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
              {staticPost.title}
            </h1>
            <p className="mt-4 text-muted-foreground">
              {staticPost.author} &middot; {staticPost.date}
            </p>

            <Image
              src={staticPost.image || '/placeholder.svg'}
              alt={staticPost.title}
              width={768}
              height={480}
              className="mt-8 aspect-[3/2] w-full rounded-xl object-cover"
              priority
            />

            <div className="mt-10 flex flex-col gap-6">
              {staticPost.content.map((paragraph, index) => (
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
