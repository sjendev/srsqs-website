"use client";

import { siteData } from "@/data/siteData";
import { RevealSimple } from "./Reveal";
import { motion, Easing } from "framer-motion";

export default function Partners() {
    const { partners } = siteData;
    // Double the items for a seamless marquee effect
    const marqueeItems = [...partners.items, ...partners.items, ...partners.items];

    return (
        <section className="py-20 bg-black border-y border-gray-900 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left: Title */}
                    <div className="lg:w-1/4 flex-shrink-0">
                        <RevealSimple delay={0.1}>
                            <h3 className="text-white text-[13px] font-bold uppercase tracking-[0.2em] leading-relaxed whitespace-nowrap">
                                {partners.title}
                            </h3>
                        </RevealSimple>
                    </div>

                    {/* Right: Marquee */}
                    <div className="lg:w-3/4 w-full relative overflow-hidden">
                        {/* Gradient Fades for smoothness */}
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

                        <motion.div
                            className="flex items-center gap-16 py-4"
                            animate={{
                                x: ["0%", "-33.33%"]
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30,
                                    ease: "linear" as Easing,
                                },
                            }}
                        >
                            {marqueeItems.map((partner, idx) => (
                                <div
                                    key={`${partner.name}-${idx}`}
                                    className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer group flex-shrink-0"
                                >
                                    {partner.icon ? (
                                        <span className="material-symbols-outlined text-2xl text-gray-500 group-hover:text-primary transition-colors">{partner.icon}</span>
                                    ) : (
                                        <span className="text-sm font-black tracking-widest text-gray-500 group-hover:text-primary transition-colors">{partner.text}</span>
                                    )}
                                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600 group-hover:text-white transition-colors">{partner.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
