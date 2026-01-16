import { siteData } from "@/data/siteData";
import { categories } from "@/data/projects";
import { RevealSimple } from "./Reveal";

export default function Contact() {
    const { contact } = siteData;

    return (
        <section className="bg-[#f8f6f6] py-32 px-6 lg:px-20 border-t border-slate-200">
            <div className="max-w-4xl mx-auto flex flex-col gap-12">
                <div className="text-center space-y-6">
                    <RevealSimple>
                        <div className="w-12 h-1 bg-primary mx-auto mb-6"></div>
                    </RevealSimple>
                    <RevealSimple delay={0.1}>
                        <h2 className="text-slate-900 text-3xl md:text-6xl font-display font-semibold tracking-tighter uppercase leading-none">
                            {contact.title}
                        </h2>
                    </RevealSimple>
                    <RevealSimple delay={0.2}>
                        <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto font-body leading-relaxed">
                            {contact.description}
                        </p>
                    </RevealSimple>
                </div>

                <RevealSimple delay={0.3}>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8" action="#" method="POST">
                        <div className="space-y-2.5">
                            <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 ml-1">Full Name</label>
                            <input
                                className="w-full bg-white border-slate-200 focus:ring-primary focus:border-primary text-slate-900 rounded-none h-16 px-6 transition-all text-sm font-medium placeholder:text-slate-300"
                                placeholder="Enter your full name"
                                type="text"
                                required
                            />
                        </div>
                        <div className="space-y-2.5">
                            <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 ml-1">Email Address</label>
                            <input
                                className="w-full bg-white border-slate-200 focus:ring-primary focus:border-primary text-slate-900 rounded-none h-16 px-6 transition-all text-sm font-medium placeholder:text-slate-300"
                                placeholder="name@company.com"
                                type="email"
                                required
                            />
                        </div>
                        <div className="space-y-2.5 md:col-span-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 ml-1">Interested Service</label>
                            <div className="relative">
                                <select className="w-full bg-white border-slate-200 focus:ring-primary focus:border-primary text-slate-900 rounded-none h-16 px-6 appearance-none transition-all text-sm font-medium pr-12 cursor-pointer">
                                    <option disabled selected value="">Select a service category</option>
                                    {categories.slice(1).map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                    <span className="material-symbols-outlined text-lg">expand_more</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2.5 md:col-span-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 ml-1">Your Message</label>
                            <textarea
                                className="w-full bg-white border-slate-200 focus:ring-primary focus:border-primary text-slate-900 rounded-none px-6 py-5 transition-all text-sm font-medium placeholder:text-slate-300"
                                placeholder="Tell us more about your project goals and how we can support you..."
                                rows={6}
                                required
                            ></textarea>
                        </div>
                        <div className="md:col-span-2 mt-4">
                            <button
                                className="w-full bg-primary hover:bg-black text-white font-bold py-6 uppercase tracking-[0.25em] text-xs rounded-none transition-all duration-500 shadow-2xl shadow-primary/20 group flex items-center justify-center gap-4"
                                type="submit"
                            >
                                Send Inquiry
                                <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform duration-500">arrow_right_alt</span>
                            </button>
                        </div>
                    </form>
                </RevealSimple>
            </div>
        </section>
    );
}
