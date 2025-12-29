import posts from "../data/posts";
import Link from "next/link";
export default function BlogHome() {
  if (!Array.isArray(posts)) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">LeadWise Blog</h1>
        <p>Error: Posts data is not an array.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">LeadWise Blog</h1>
      {posts.map((post) => (
        <div key={post.slug} className="mb-12 border-b pb-6">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover mb-4 rounded"
            />
          )}
          <h2 className="text-2xl font-semibold mb-1">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="text-gray-600 mb-2">
            {post.date} • {post.readTime} min read
          </p>
          <p className="text-gray-700 mb-2">{post.excerpt}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-600 mt-2 inline-block"
          >
            Read more →
          </Link>
        </div>
      ))}
    </div>
  );
}
