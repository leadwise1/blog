import posts from "../../../data/posts";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  return posts.map(({ slug }) => ({
    slug,
  }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-[#ffffff]">
      <h1 className="text-4xl font-bold mb-4 text-[#323652]">{post.title}</h1>
      <p className="text-[#323652] mb-8">{post.date} • {post.readTime} min read</p>
      {post.image && (
        <div className="relative w-full h-96 mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded"
          />
        </div>
      )}
      <div
        className="prose lg:prose-xl leading-relaxed [&>p]:mb-6 text-[#323652] prose-headings:text-[#323652] prose-a:text-[#efaa9c] prose-strong:text-[#323652] prose-li:text-[#323652]"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
