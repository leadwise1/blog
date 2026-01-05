import posts from "../../../data/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

// This function generates the static paths for export
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [post.image],
    },
  };
}

export default async function BlogPost({ params }) {
  // In Next.js 15+, params might be a Promise, but standard access often works. 
  // Ideally, we treat it simply here for JS.
  const { slug } = await params; 
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen pb-20">
      
      {/* Header Image & Title */}
      <header className="relative w-full h-[60vh] bg-primary flex items-end">
        <img 
          src={post.image} 
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Link href="/" className="inline-block mb-6 text-accent hover:text-white text-sm font-semibold tracking-wide uppercase transition-colors">
              &larr; Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-300 text-sm font-medium">
              <span>{post.date}</span>
              <span className="mx-3">•</span>
              <span>{post.readTime} min read</span>
            </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100">
            <div 
              className="prose prose-lg prose-slate max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
            <hr className="my-12 border-gray-200" />
            
            <div className="bg-slate-50 p-8 rounded-lg text-center border border-slate-100">
              <h3 className="text-xl font-bold text-primary mb-2">Inspired?</h3>
              <p className="text-gray-600 mb-6">Join our community or support our mission today.</p>
              <div className="flex justify-center gap-4">
                <a href="https://services.letsleadwise.org/courses" className="bg-primary hover:bg-slate-800 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                  Start Learning
                </a>
                <a href="https://services.letsleadwise.org/donate" className="bg-white text-primary border border-primary hover:bg-slate-50 font-bold py-2 px-6 rounded-lg transition-colors">
                  Donate
                </a>
              </div>
            </div>
        </div>
      </div>
    </article>
  );
}
