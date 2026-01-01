import posts from "../../../data/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

// This function generates the static paths for export (optional but good for performance)
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Find the post that matches the URL slug
  const post = posts.find((p) => p.slug === params.slug);

  // If no post found, show 404
  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen pb-20">
      
      {/* Header Image & Title */}
      <header className="relative w-full h-[60vh] bg-gray-900 flex items-end">
        <img 
          src={post.image} 
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Link href="/" className="inline-block mb-6 text-white/80 hover:text-white text-sm font-semibold tracking-wide uppercase">
              &larr; Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
              {post.title}
            </h1>
            <div className="flex items-center text-white/90 text-sm font-medium">
              <span>{post.date}</span>
              <span className="mx-3">•</span>
              <span>{post.readTime} min read</span>
            </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100">
            {/* Render the HTML content safely */}
            <div 
              className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
            <hr className="my-12 border-gray-200" />
            
            {/* Call to Action */}
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Inspired?</h3>
              <p className="text-gray-600 mb-6">Join our community or support our mission today.</p>
              <div className="flex justify-center gap-4">
                <a href="https://services.letsleadwise.org/courses" className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                  Start Learning
                </a>
                <a href="https://services.letsleadwise.org/donate" className="bg-white text-primary border border-primary hover:bg-blue-50 font-bold py-2 px-6 rounded-lg transition-colors">
                  Donate
                </a>
              </div>
            </div>
        </div>
      </div>
    </article>
  );
}
