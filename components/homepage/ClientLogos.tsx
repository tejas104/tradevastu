"use client";

export default function ClientLogos() {
  const clients = [
    "VDS International Trades",
    "Abhay Sales Group",

  ];

  return (
    <section className="bg-white dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
          Trusted by real estate developers and sales experts across India
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-gray-400 dark:text-gray-500 text-lg font-semibold tracking-wider hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
