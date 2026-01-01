import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog | LeadWise Foundation",
  description: "Stories of growth, career tips, and tech trends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 font-sans`}>
        
        {/* NAVIGATION - Dark Blue Theme */}
        <nav className="bg-primary sticky top-0 z-50 shadow-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Logo */}
              <div className="h-10 w-10 bg-accent rounded flex items-center justify-center text-primary font-bold text-xl">LW</div>
              <span className="font-bold text-white text-lg tracking-tight">LeadWise Foundation</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="https://services.letsleadwise.org" className="text-gray-300 hover:text-accent transition duration-200">Academy</a>
              <a href="https://services.letsleadwise.org/templates" className="text-gray-300 hover:text-accent transition duration-200">Templates</a>
              <a href="#" className="text-white font-semibold border-b-2 border-accent pb-1">Blog</a>
            </div>
            <a href="https://services.letsleadwise.org/courses" className="bg-accent hover:bg-white hover:text-primary text-primary font-bold py-2 px-6 rounded-lg transition-all duration-200 shadow-md">
              Start Learning
            </a>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="bg-primary text-gray-400 py-12 mt-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 LeadWise Foundation. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
