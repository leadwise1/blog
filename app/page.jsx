import posts from "../data/posts";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION - Dark Blue & Peach Theme */}
      <header className="bg-primary border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 inline-block bg-white/10 px-3 py-1 rounded-full">
            Empowering Careers
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 mb-6 tracking-tight leading-tight">
            Stories of Growth & <span className="text-accent">Opportunity</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Read success stories from our students, get career advice from industry mentors, and stay updated on the latest tech trends.
          </p>
        </div>
      </header>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              
              {/* Image Area */}
              <div className="h-52 w-full bg-gray-100 relative overflow-hidden">
                 <img 
                    src={post.image} 
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop";
                    }}
                 />
                 <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center text-xs font-semibold text-accent-dark mb-3 uppercase tracking-wide">
                  <span>{post.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span>{post.readTime} min read</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 leading-snug group-hover:text-blue-700 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="text-primary font-bold hover:text-accent-dark inline-flex items-center gap-2 mt-auto group/link">
                  Read Full Story <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                </Link>
              </div>
            </article>
          ))}

        </div>
      </section>
    </main>
  );
}
