"use client";

import { siteData } from "@/data/siteData";
import { RevealSimple } from "./Reveal";
import { motion, Easing } from "framer-motion";

export default function Partners() {
    const { partners } = siteData;
    // Quadruple the items for a seamless marquee effect
    const marqueeItems = [...partners.items, ...partners.items, ...partners.items, ...partners.items];

    return (
        <section className="py-20 bg-background-dark border-y border-white/5 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left: Title */}
                    <div className="lg:w-1/4 flex-shrink-0">
                        <RevealSimple delay={0.1}>
                            <h3 className="text-text-dark/80 text-[13px] font-bold uppercase tracking-[0.2em] leading-relaxed whitespace-nowrap">
                                {partners.title}
                            </h3>
                        </RevealSimple>
                    </div>

                    {/* Right: Marquee */}
                    <div className="lg:w-3/4 w-full relative overflow-hidden">
                        {/* Gradient Fades for smoothness */}
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background-dark to-transparent z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background-dark to-transparent z-10"></div>

                        <motion.div
                            className="flex items-center py-4 w-max"
                            animate={{
                                x: ["0%", "-25%"]
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 40,
                                    ease: "linear" as Easing,
                                },
                            }}
                        >
                            {marqueeItems.map((partner: any, idx) => (
                                <div
                                    key={`${partner.name}-${idx}`}
                                    className="flex items-center pr-4 transition-all duration-500 cursor-pointer group flex-shrink-0"
                                >
                                    <div className="rounded-xl p-4 h-32 w-64 flex items-center justify-center transition-transform group-hover:scale-105">
                                        {partner.image ? (
                                            <img
                                                src={partner.image}
                                                alt={partner.name}
                                                className="h-full w-full object-contain"
                                            />
                                        ) : partner.icon ? (
                                            <span className="material-symbols-outlined text-3xl text-white">{partner.icon}</span>
                                        ) : (
                                            <span className="text-xs font-black tracking-widest text-white uppercase">{partner.text}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
