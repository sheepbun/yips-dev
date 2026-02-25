import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'
import { GradientText } from '@/components/GradientText'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}/`} className="group block">
      <article className="py-6 border-b last:border-0">
        <div className="flex items-center gap-2 text-xs text-yips-blue mb-2">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.tags.length > 0 && (
            <>
              <span>·</span>
              <span>{post.tags.join(', ')}</span>
            </>
          )}
        </div>
        <h2 className="text-lg font-semibold mb-1">
          <GradientText>{post.title}</GradientText>
        </h2>
        {post.excerpt && (
          <p className="text-sm leading-relaxed line-clamp-2">
            <GradientText>{post.excerpt}</GradientText>
          </p>
        )}
      </article>
    </Link>
  )
}
