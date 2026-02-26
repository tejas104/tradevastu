import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] font-bold text-[#EAB308] mb-4">404</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The page you are looking for does not exist.</p>
          <Link
            href="/"
            className="inline-flex rounded-md bg-[#1E293B] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#2c3e5a] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

