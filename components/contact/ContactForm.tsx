"use client";

import { useState } from "react";
import { Mail, Phone, Clock, MapPin, Building2, Globe, MessageSquare, Briefcase, Users, PieChart, Send, ExternalLink, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ContactForm() {
    const googleMapsUrl = "https://www.google.com/maps/place/10,+Narhe+Rd,+Wadgaon+Budruk,+Dhayari+Phata,+Pune,+Maharashtra+411041,+India/@18.4551147,73.8195689,19z/data=!3m1!4b1!4m6!3m5!1s0x3bc2953fb13570dd:0xec6e6da05ee45855!8m2!3d18.4551147!4d73.8202126!16s%2Fg%2F11tt5pcy4t?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoASAFQAw%3D%3D";

    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        businessEmail: "",
        companyName: "",
        phoneNumber: "",
        industry: "",
        companySize: "",
        projectScope: "",
        budgetRange: "",
        projectDetails: "",
        website: ""
    });

    const industries = ["Real Estate", "Fintech", "E-commerce", "SaaS", "Manufacturing", "Other"];
    const sizes = ["1-10 Employees", "11-50 Employees", "51-100 Employees", "100+ Employees"];
    const scopes = ["Sales Infrastructure Audit", "CRM Optimization", "Digital Architecture Design", "Managed Support Package", "End-to-End Engineering"];
    const budgets = ["< ₹25,000", "₹25,000 - ₹50,000", "₹50,000 - ₹1.5L", "₹1.5L - ₹5L", "₹5L+"];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            if (process.env.NODE_ENV === "development") {
                const { error: directError } = await supabase.from("contact_inquiries").insert([
                    {
                        full_name: formData.fullName,
                        email: formData.businessEmail,
                        company: formData.companyName,
                        phone: formData.phoneNumber,
                        industry: formData.industry,
                        company_size: formData.companySize,
                        project_scope: formData.projectScope,
                        budget_range: formData.budgetRange,
                        details: formData.projectDetails,
                        status: "new",
                    },
                ]);

                if (directError) {
                    throw new Error(directError.message || "Failed to submit inquiry");
                }

                alert("Thank you! Your request has been recorded. We will contact you shortly.");
                setFormData({
                    fullName: "",
                    businessEmail: "",
                    companyName: "",
                    phoneNumber: "",
                    industry: "",
                    companySize: "",
                    projectScope: "",
                    budgetRange: "",
                    projectDetails: "",
                    website: ""
                });
                return;
            }

            const response = await fetch("/api/contact-inquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const payload = await response.json().catch(() => ({}));
                const apiError = payload?.error || "Failed to submit inquiry";
                const shouldFallbackByStatus = response.status >= 500;

                // Fallback for local/dev network issues where API route cannot reach Supabase.
                const shouldFallback =
                    shouldFallbackByStatus ||
                    (typeof apiError === "string" &&
                        (apiError.toLowerCase().includes("fetch failed") ||
                            apiError.toLowerCase().includes("timeout") ||
                            apiError.toLowerCase().includes("connect")));

                if (!shouldFallback) {
                    throw new Error(apiError);
                }

                const { error: directError } = await supabase.from("contact_inquiries").insert([
                    {
                        full_name: formData.fullName,
                        email: formData.businessEmail,
                        company: formData.companyName,
                        phone: formData.phoneNumber,
                        industry: formData.industry,
                        company_size: formData.companySize,
                        project_scope: formData.projectScope,
                        budget_range: formData.budgetRange,
                        details: formData.projectDetails,
                        status: "new",
                    },
                ]);

                if (directError) {
                    throw new Error(directError.message || apiError);
                }
            }

            alert("Thank you! Your request has been recorded. We will contact you shortly.");
            setFormData({
                fullName: "",
                businessEmail: "",
                companyName: "",
                phoneNumber: "",
                industry: "",
                companySize: "",
                projectScope: "",
                budgetRange: "",
                projectDetails: "",
                website: ""
            });
        } catch (error) {
            console.error('Error submitting inquiry:', error);
            alert(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact-form" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

                    {/* Left: Form */}
                    <div className="lg:col-span-2 animate-reveal">
                        <div className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
                                Request a <span className="text-[#EAB308]">Consultation</span>
                            </h2>
                            <div className="h-0.5 w-12 bg-gold-gradient" />
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                                value={formData.website}
                                onChange={handleChange}
                                className="hidden"
                                aria-hidden="true"
                            />
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label htmlFor="fullName" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                                    <input
                                        type="text" id="fullName" name="fullName" required
                                        className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-white/5 rounded-lg p-4 text-sm dark:text-white focus:bg-white dark:focus:bg-slate-700 focus:border-[#EAB308] outline-none transition-all"
                                        placeholder="e.g. Rahul Sharma"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="businessEmail" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Business Email</label>
                                    <input
                                        type="email" id="businessEmail" name="businessEmail" required
                                        className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-white/5 rounded-lg p-4 text-sm dark:text-white focus:bg-white dark:focus:bg-slate-700 focus:border-[#EAB308] outline-none transition-all"
                                        placeholder="rahul@company.in"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label htmlFor="companyName" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Company Name</label>
                                    <input
                                        type="text" id="companyName" name="companyName" required
                                        className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-white/5 rounded-lg p-4 text-sm dark:text-white focus:bg-white dark:focus:bg-slate-700 focus:border-[#EAB308] outline-none transition-all"
                                        placeholder="Enterprise Pvt Ltd"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="phoneNumber" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                                    <input
                                        type="tel" id="phoneNumber" name="phoneNumber" required
                                        className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-white/5 rounded-lg p-4 text-sm dark:text-white focus:bg-white dark:focus:bg-slate-700 focus:border-[#EAB308] outline-none transition-all"
                                        placeholder="+91 9XXXX XXXXX"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label htmlFor="industry" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Industry</label>
                                    <select
                                        id="industry" name="industry" required
                                        className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-white/5 rounded-lg p-4 text-sm dark:text-white focus:bg-white dark:focus:bg-slate-700 focus:border-[#EAB308] outline-none transition-all appearance-none"
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Industry</option>
                                        {industries.map(i => <option key={i} value={i}>{i}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="companySize" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Company Size</label>
                                    <select
                                        id="companySize" name="companySize" required
                                        className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-white/5 rounded-lg p-4 text-sm dark:text-white focus:bg-white dark:focus:bg-slate-700 focus:border-[#EAB308] outline-none transition-all appearance-none"
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Size</option>
                                        {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label htmlFor="projectScope" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Project Scope</label>
                                    <select
                                        id="projectScope" name="projectScope" required
                                        className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-white/5 rounded-lg p-4 text-sm dark:text-white focus:bg-white dark:focus:bg-slate-700 focus:border-[#EAB308] outline-none transition-all appearance-none"
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Scope</option>
                                        {scopes.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="budgetRange" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Budget Range (Monthly)</label>
                                    <select
                                        id="budgetRange" name="budgetRange" required
                                        className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-white/5 rounded-lg p-4 text-sm dark:text-white focus:bg-white dark:focus:bg-slate-700 focus:border-[#EAB308] outline-none transition-all appearance-none"
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Budget</option>
                                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="projectDetails" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Project Details</label>
                                <textarea
                                    id="projectDetails" name="projectDetails" rows={4} required
                                    className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-white/5 rounded-lg p-4 text-sm dark:text-white focus:bg-white dark:focus:bg-slate-700 focus:border-[#EAB308] outline-none transition-all resize-none"
                                    placeholder="Briefly describe your current sales challenges..."
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-[#1E293B] dark:bg-[#FFD700] text-white dark:text-[#1E293B] py-5 rounded-md font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-[#2c3e5a] dark:hover:bg-[#FFD700]/90 transition-all transform active:scale-[0.98] shadow-xl shadow-slate-200 dark:shadow-none"
                            >
                                {submitting ? "Submitting..." : "Submit Consultation Request"}
                            </button>
                        </form>
                    </div>

                    {/* Right: Info Cards */}
                    <div className="space-y-8 animate-reveal" style={{ animationDelay: "0.2s" }}>
                        {/* Office Location */}
                        <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover-lift transition-all">
                            <div className="flex items-center gap-3 mb-8">
                                <Building2 className="w-5 h-5 text-[#EAB308]" />
                                <h3 className="font-display font-bold text-gray-900 dark:text-white uppercase tracking-widest text-xs">Corporate Office</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Registered Address</p>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            <span className="text-black-gold-gradient">TRADEVASTU ENTERPRISES</span><br />
                                            10, Narhe Rd, Wadgaon Budruk,<br />
                                            Dhayari Phata, Pune - 411041.
                                        </p>
                                        <a
                                            href={googleMapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 mt-2 text-[10px] font-bold uppercase tracking-wider text-[#1E293B] dark:text-[#EAB308] hover:opacity-80 transition-all"
                                        >
                                            Open in Google Maps
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Globe className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">GSTIN</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">27AAACT1234F1Z5</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Clock className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Business Hours</p>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Monday – Friday: 09:00 AM – 07:00 PM IST
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Direct Contact */}
                        <div className="p-8 rounded-2xl border border-gray-100 dark:border-white/5 bg-white dark:bg-slate-800 hover-glow transition-all">
                            <h3 className="font-display font-bold text-gray-900 dark:text-white uppercase tracking-widest text-xs mb-2">Direct Contact</h3>
                            <p className="text-[10px] text-gray-400 mb-8 leading-relaxed">
                                For urgent procurement or strategic partnership inquiries, connect with our executive desk directly.
                            </p>

                            <div className="space-y-6 mb-10">
                                <a href="mailto:info@tradevastu.com" className="flex items-center gap-4 group">
                                    <Mail className="w-4 h-4 text-[#EAB308]" />
                                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium group-hover:text-[#EAB308] transition-colors">info@tradevastu.com</span>
                                </a>
                                <a href="tel:+917558516577" className="flex items-center gap-4 group">
                                    <Phone className="w-4 h-4 text-[#EAB308]" />
                                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium group-hover:text-[#EAB308] transition-colors">+91 755 851 6577</span>
                                </a>
                                <a href="https://wa.me/917558516577" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                    <MessageSquare className="w-4 h-4 text-emerald-500" />
                                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium group-hover:text-emerald-500 transition-colors">WhatsApp Corporate Desk</span>
                                    <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-emerald-500 transition-colors" />
                                </a>
                            </div>

                            <button className="w-full border border-gray-200 dark:border-white/10 py-3.5 rounded font-bold uppercase tracking-widest text-[10px] text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                                Book Discovery Session
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
