"use client";

import { useState } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface LeadCaptureModalProps {
    isOpen: boolean;
    onClose: () => void;
    source: string;
    title?: string;
    subtitle?: string;
    apiEndpoint?: string;
}

export default function LeadCaptureModal({
    isOpen,
    onClose,
    source,
    title = "Get Started",
    subtitle = "Fill in your details and our team will reach out within 24 hours.",
    apiEndpoint = "/api/leads",
}: LeadCaptureModalProps) {
    const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "", website: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            if (process.env.NODE_ENV === "development") {
                const { error: directError } = await supabase.from("leads").insert([
                    {
                        full_name: form.name,
                        email: form.email,
                        phone: form.phone,
                        company: form.company,
                        message: form.message,
                        source,
                        status: "new",
                    },
                ]);
                if (directError) {
                    throw new Error(directError.message || "Failed to submit. Please try again.");
                }
                setSuccess(true);
                setForm({ name: "", email: "", phone: "", company: "", message: "", website: "" });
                return;
            }

            const response = await fetch(apiEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    company: form.company,
                    message: form.message,
                    source,
                    website: form.website,
                }),
            });

            if (!response.ok) {
                const payload = await response.json().catch(() => ({}));
                const apiError = payload?.error || "Failed to submit. Please try again.";
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

                const { error: directError } = await supabase.from("leads").insert([
                    {
                        full_name: form.name,
                        email: form.email,
                        phone: form.phone,
                        company: form.company,
                        message: form.message,
                        source,
                        status: "new",
                    },
                ]);

                if (directError) {
                    throw new Error(directError.message || apiError);
                }
            }

            setSuccess(true);
            setForm({ name: "", email: "", phone: "", company: "", message: "", website: "" });
        } catch (err: any) {
            setError(err.message || "Failed to submit. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 z-10">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                    <X className="w-4 h-4 text-gray-600" />
                </button>

                {success ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Request Received!</h3>
                        <p className="text-gray-600 text-sm">Our team will reach out to you within 24 hours.</p>
                        <button
                            onClick={() => { setSuccess(false); onClose(); }}
                            className="mt-6 bg-[#1E293B] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#1E293B]/90 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mb-6">
                            <div className="w-1 h-8 bg-gradient-to-b from-[#FFD700] to-[#FFA500] rounded-full mb-4" />
                            <h2 className="text-2xl font-display font-bold text-gray-900 mb-1">{title}</h2>
                            <p className="text-sm text-gray-500">{subtitle}</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                                value={form.website}
                                onChange={(e) => setForm({ ...form, website: e.target.value })}
                                className="hidden"
                                aria-hidden="true"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700] transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700] transition-colors"
                                        placeholder="you@company.com"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700] transition-colors"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">Company</label>
                                    <input
                                        type="text"
                                        value={form.company}
                                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700] transition-colors"
                                        placeholder="Company name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">Message</label>
                                <textarea
                                    rows={3}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-[#FFD700] transition-colors resize-none"
                                    placeholder="Tell us about your requirements..."
                                />
                            </div>

                            {error && (
                                <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#1E293B] text-white py-3 rounded-lg font-semibold uppercase tracking-wide text-sm hover:bg-[#1E293B]/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? "Submitting..." : "Submit Request"}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
