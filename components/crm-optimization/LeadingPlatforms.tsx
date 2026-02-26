"use client";

export default function LeadingPlatforms() {
  const platforms = [
    { name: "Zoho", color: "text-black" },
    { name: "Superbase", color: "text-pink-500" },
    { name: "HubSpot", color: "text-orange-500", badge: "new" },
  ];

  return (
    <section className="bg-white dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wider">
          CRM OPTIMIZATION LEADING PLATFORMS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {platforms.map((platform, index) => (
            <div key={index} className="relative">
              <div className={`text-2xl font-bold ${platform.name === 'Zoho' ? 'text-black dark:text-white' : platform.color} hover:opacity-80 transition-opacity`}>
                {platform.name}
              </div>
              {platform.badge && (
                <span className="absolute -top-2 -right-6 bg-gold-gradient text-[#1E293B] text-xs font-bold px-2 py-0.5 rounded">
                  {platform.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
