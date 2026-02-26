"use client";

import { MapPin } from "lucide-react";

export default function ContactMap() {
    const googleMapsUrl = "https://www.google.com/maps/place/10,+Narhe+Rd,+Wadgaon+Budruk,+Dhayari+Phata,+Pune,+Maharashtra+411041,+India/@18.4551147,73.8195689,19z/data=!3m1!4b1!4m6!3m5!1s0x3bc2953fb13570dd:0xec6e6da05ee45855!8m2!3d18.4551147!4d73.8202126!16s%2Fg%2F11tt5pcy4t?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoASAFQAw%3D%3D";

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-10 animate-reveal">
                    <MapPin className="w-5 h-5 text-[#EAB308]" />
                    <h2 className="text-xs font-display font-bold text-gray-900 dark:text-white uppercase tracking-[0.3em]">
                        Registered Business Location
                    </h2>
                </div>

                <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative h-[250px] md:h-[400px] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5 shadow-2xl animate-reveal"
                    style={{ animationDelay: "0.2s" }}
                    aria-label="Open location in Google Maps"
                >
                    {/* Placeholder for actual map - using a stylized grid/image representation as per design */}
                    <div className="absolute inset-0 bg-[#f0f0f0] dark:bg-slate-800 flex items-center justify-center">
                        <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: "radial-gradient(#999 0.5px, transparent 0.5px)",
                            backgroundSize: "20px 20px"
                        }} />
                        <div className="relative z-10 text-center px-6">
                            <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4 border-4 border-[#1E293B]">
                                <div className="w-4 h-4 bg-[#1E293B] rounded-full" />
                            </div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Narhe Road, Pune</p>
                            <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-wider">Tap to open in Google Maps</p>
                        </div>
                    </div>

                    {/* Stylized shadows to match the "embedded map" feel of the design */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
                </a>
            </div>
        </section>
    );
}
