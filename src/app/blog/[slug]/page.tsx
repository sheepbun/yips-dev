import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPostSlugs, getPostData } from '@/lib/posts'
import { GradientText } from '@/components/GradientText'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostData(slug).catch(() => null)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostData(slug).catch(() => null)

  if (!post) notFound()

  return (
    <article>
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Blog
        </Link>

        <h1 className="text-3xl font-bold tracking-tight mb-3">
          <GradientText>{post.title}</GradientText>
        </h1>

        <div className="flex items-center gap-2 text-sm text-yips-blue">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.tags.length > 0 && (
            <>
              <span>·</span>
              <span>{post.tags.join(', ')}</span>
            </>
          )}
        </div>
      </div>

      <div
        className="prose-blog"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}
