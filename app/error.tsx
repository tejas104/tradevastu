"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] font-bold text-[#EAB308] mb-4">Unexpected Error</p>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {error?.message || "An unexpected error occurred while loading this page."}
        </p>
        <button
          onClick={reset}
          className="inline-flex rounded-md bg-[#1E293B] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#2c3e5a] transition-colors"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}

