"use client";

import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { RevealSimple } from "./Reveal";

export default function Hero() {
    const { hero } = siteData;

    return (
        <header className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <RevealSimple delay={0.1}>
                            <div className="inline-flex items-center gap-2 mb-8 px-0 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                {hero.badge}
                            </div>
                        </RevealSimple>

                        <RevealSimple delay={0.2}>
                            <h1 className="font-display text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tighter mb-8 text-white/95">
                                {hero.title.line1} <br />
                                {hero.title.line2} <span className="text-primary">{hero.title.highlight}</span> <br />
                                {hero.title.line3}
                            </h1>
                        </RevealSimple>

                        <RevealSimple delay={0.3}>
                            <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-medium">
                                {hero.description}
                            </p>
                        </RevealSimple>

                        <RevealSimple delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                {hero.ctas.map((cta) => (
                                    <a
                                        key={cta.label}
                                        className={`inline-flex items-center justify-center px-10 py-4 rounded-sm font-bold transition-all group uppercase text-xs tracking-widest ${cta.primary
                                            ? "bg-primary text-white hover:bg-primary-hover"
                                            : "bg-white text-black hover:bg-gray-100"
                                            }`}
                                        href={cta.href}
                                    >
                                        {cta.label}
                                        {cta.icon && <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">{cta.icon}</span>}
                                    </a>
                                ))}
                            </div>
                        </RevealSimple>

                        <RevealSimple delay={0.5}>
                            <div className="mt-12 flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-gray-600">
                                <div className="flex gap-1 text-primary">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <span key={i} className="material-symbols-outlined text-xs">
                                            star
                                        </span>
                                    ))}
                                </div>
                                <span>{hero.trust}</span>
                            </div>
                        </RevealSimple>
                    </div>
                    <div className="grid grid-cols-2 gap-2 relative">
                        <div className="space-y-2 lg:translate-y-12">
                            <RevealSimple delay={0.6}>
                                <div className="aspect-[3/4] overflow-hidden relative group">
                                    <img
                                        alt="Architectural Blueprints"
                                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90"
                                        src={hero.images[0]}
                                    />
                                </div>
                            </RevealSimple>
                            <RevealSimple delay={0.8}>
                                <div className="aspect-square overflow-hidden relative group">
                                    <img
                                        alt="Construction Site Detail"
                                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90"
                                        src={hero.images[1]}
                                    />
                                </div>
                            </RevealSimple>
                        </div>
                        <div className="space-y-2">
                            <RevealSimple delay={0.7}>
                                <div className="aspect-square overflow-hidden relative group">
                                    <img
                                        alt="Financial Planning Meeting"
                                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90"
                                        src={hero.images[2]}
                                    />
                                </div>
                            </RevealSimple>
                            <RevealSimple delay={0.9}>
                                <div className="aspect-[3/4] overflow-hidden relative group">
                                    <img
                                        alt="Commercial Building Site"
                                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90"
                                        src={hero.images[3]}
                                    />
                                </div>
                            </RevealSimple>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
                    </div>
                </div>
            </div>

        </header>
    );
}
