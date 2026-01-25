"use client";

import { useRef } from "react";
import { siteData } from "@/data/siteData";
import { motion, useScroll, useSpring, useTransform, Easing } from "framer-motion";

export default function Process() {
    const { process } = siteData;
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress within the steps container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 30%", "end 70%"],
    });

    // Smooth out the scroll progress
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="py-24 bg-background-dark text-white relative overflow-hidden">
            {/* Background Image/Overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlQR0Pnq3bM49Zk6AZvZT0Q2NMYJlPxGehh6e_yaU4x1N93DmGq-6fiUv2uP3-urtDP7pWDj_Jp0v_rOrfYv51RDtvdWPxGS3PX_-oebJChpy-Lr5hxspeK20hoGzczIJiNVFBTgNlH3m6x3N4h0JZnXX0qmRvK3ftlv8o7YxzPS0yfs2dVJM19Ydq-QCQxbzo2S-Hl9S91Pj4lAnOtVVG4tFj3XmpYGOmUknWd7UeWKVikTnqvAJyzIxJ0hhfiIbhCD6UTjaN5GM')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "invert(1)",
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16">
                {/* Sticky Left Content */}
                <div className="lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" as Easing }}
                    >
                        <span className="text-gray-500 font-bold text-sm mb-4 block uppercase tracking-wide">{process.label}</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{process.title}</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed max-w-md">{process.description}</p>
                        <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-none font-semibold transition-all">
                            {process.cta}
                        </button>
                    </motion.div>
                </div>

                {/* Steps with Animated Line */}
                <div ref={containerRef} className="relative pl-8 space-y-24 py-12">
                    {/* Static Background Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-800 z-0 origin-top"></div>

                    {/* Animated Progress Line */}
                    <motion.div
                        className="absolute left-0 top-0 w-[2px] bg-primary z-10 origin-top"
                        style={{ scaleY }}
                    />

                    {process.steps.map((step, idx) => (
                        <StepItem key={step.id} step={step} index={idx} total={process.steps.length} scrollYProgress={scrollYProgress} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StepItem({ step, index, total, scrollYProgress }: { step: any, index: number, total: number, scrollYProgress: any }) {
    const threshold = index / (total - 1);

    return (
        <motion.div
            className="relative z-10 group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.8 }}
            variants={{
                hidden: { opacity: 0.3, x: 10 },
                visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" as Easing }}
        >
            <motion.span
                className="absolute -left-[41px] bg-background-dark border-[2px] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-20"
                style={{
                    borderColor: useTransform(scrollYProgress,
                        [threshold - 0.1, threshold, threshold + 0.1],
                        ["#374151", "#FF4500", "#FF4500"]
                    ),
                    color: useTransform(scrollYProgress,
                        [threshold - 0.1, threshold, threshold + 0.1],
                        ["#6B7280", "#FFFFFF", "#FFFFFF"]
                    ),
                    scale: useTransform(scrollYProgress,
                        [threshold - 0.1, threshold, threshold + 0.1],
                        [0.9, 1.25, 1]
                    )
                }}
            >
                {step.id}
            </motion.span>

            <div className="pl-4">
                <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-wider group-hover:text-primary transition-colors">
                    {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-sm">
                    {step.description}
                </p>
            </div>
        </motion.div>
    );
}
