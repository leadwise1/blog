import Image from 'next/image';

export default function PostPage({ post }) {
  return (
    <div>
      <header className="relative h-96">
        <Image
          src={post.headerImage}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-black-900 text-4xl font-bold">{post.title}</h1>
            <p className="text-black-600 mt-2">{post.metadata}</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-4">
        <article dangerouslySetInnerHTML={{ __html: post.content }} />
      </main>

      <section className="cta-section bg-secondary text-white text-center py-8">
        <h2 className="text-2xl font-semibold mb-4">Enjoyed this post?</h2>
        <button className="bg-accent-dark text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent transition">
          Subscribe
        </button>
      </section>
    </div>
  );
}
