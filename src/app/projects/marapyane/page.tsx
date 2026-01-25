"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Reveal } from "@/components/Reveal";

const projectImages = [
    "/projects/marapyane/DJI_0850.webp",
    "/projects/marapyane/DJI_0853.webp",
    "/projects/marapyane/DJI_0856.webp",
    "/projects/marapyane/DJI_0857.webp",
    "/projects/marapyane/DJI_0858.webp",
    "/projects/marapyane/DJI_0859.webp",
    "/projects/marapyane/DJI_0863.webp",
    "/projects/marapyane/DJI_0864.webp",
    "/projects/marapyane/DJI_0865.webp",
    "/projects/marapyane/DJI_0870.webp",
    "/projects/marapyane/DJI_0875.webp",
    "/projects/marapyane/DJI_0876.webp",
    "/projects/marapyane/DJI_0879.webp",
    "/projects/marapyane/DJI_0882.webp",
    "/projects/marapyane/DJI_0884.webp",
    "/projects/marapyane/DJI_0888.webp",
    "/projects/marapyane/DJI_0890.webp",
    "/projects/marapyane/DJI_0891.webp",
    "/projects/marapyane/DJI_0892.webp",
    "/projects/marapyane/DJI_0894.webp",
    "/projects/marapyane/DJI_0895.webp",
    "/projects/marapyane/DJI_0896.webp",
    "/projects/marapyane/DJI_0897.webp",
    "/projects/marapyane/DJI_0901.webp",
    "/projects/marapyane/DJI_0920.webp",
    "/projects/marapyane/DJI_0921.webp",
    "/projects/marapyane/DJI_0922.webp",
    "/projects/marapyane/DJI_0927.webp",
    "/projects/marapyane/DJI_0930.webp",
    "/projects/marapyane/DJI_0936.webp",
    "/projects/marapyane/DJI_0937.webp",
    "/projects/marapyane/DJI_0940.webp",
    "/projects/marapyane/DJI_0942.webp",
    "/projects/marapyane/DJI_0945.webp",
    "/projects/marapyane/DJI_0950.webp",
    "/projects/marapyane/IMG_0753.webp",
    "/projects/marapyane/IMG_0754.webp",
    "/projects/marapyane/IMG_0755.webp",
    "/projects/marapyane/IMG_0757.webp",
    "/projects/marapyane/IMG_0758.webp",
    "/projects/marapyane/IMG_0760.webp",
    "/projects/marapyane/IMG_0774.webp",
    "/projects/marapyane/IMG_0780.webp",
    "/projects/marapyane/IMG_0783.webp",
    "/projects/marapyane/IMG_0809.webp",
    "/projects/marapyane/IMG_0814.webp",
    "/projects/marapyane/IMG_0821.webp",
    "/projects/marapyane/IMG_0861.webp",
    "/projects/marapyane/IMG_0863.webp",
    "/projects/marapyane/IMG_0878.webp",
    "/projects/marapyane/IMG_0883.webp",
    "/projects/marapyane/IMG_0886.webp",
    "/projects/marapyane/IMG_0889.webp",
    "/projects/marapyane/IMG_0892.webp",
    "/projects/marapyane/IMG_0894.webp",
    "/projects/marapyane/IMG_5238.webp",
    "/projects/marapyane/IMG_5239.webp",
    "/projects/marapyane/IMG_5241.webp",
    "/projects/marapyane/IMG_5243.webp",
    "/projects/marapyane/IMG_5244.webp",
    "/projects/marapyane/IMG_5249.webp",
    "/projects/marapyane/IMG_5252.webp",
    "/projects/marapyane/IMG_5253.webp",
    "/projects/marapyane/IMG_5254.webp",
    "/projects/marapyane/IMG_5255.webp",
    "/projects/marapyane/IMG_5256.webp",
    "/projects/marapyane/IMG_5260.webp",
    "/projects/marapyane/IMG_5261.webp",
    "/projects/marapyane/IMG_5272.webp",
    "/projects/marapyane/IMG_5274.webp",
    "/projects/marapyane/IMG_5282.webp",
    "/projects/marapyane/IMG_5283.webp",
    "/projects/marapyane/IMG_5289.webp",
    "/projects/marapyane/IMG_5296.webp",
    "/projects/marapyane/IMG_5297.webp",
    "/projects/marapyane/IMG_5317.webp",
    "/projects/marapyane/IMG_5339.webp",
    "/projects/marapyane/IMG_5341.webp",
];

export default function MarapyanePage() {
    return (
        <main className="min-h-screen bg-background-dark text-white selection:bg-primary/30">
            <Nav />

            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/projects/marapyane/DJI_0858.webp"
                        alt="Marapyane Project Aerial View"
                        fill
                        className="object-cover z-0"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-background-dark/20 to-background-dark/80 z-10" />
                </motion.div>

                <div className="relative z-20 container mx-auto px-6 text-center">
                    <Reveal>
                        <h1 className="text-7xl md:text-9xl font-display font-semibold tracking-tighter uppercase mb-6 leading-none">
                            Marapyane
                        </h1>
                    </Reveal>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                >
                    <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
                </motion.div>
            </section>

            {/* Project Overview */}
            <section className="py-32 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8">
                        <Reveal>
                            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-8">
                                Project Overview
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-3xl md:text-5xl font-display leading-tight text-slate-100 mb-12">
                                Extensive infrastructure development project in Mpumalanga.
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <div className="prose prose-invert prose-lg max-w-none text-slate-400 font-body">
                                <p>
                                    The Marapyane project involves significant construction and development works. SRSQS provided comprehensive services to ensure the successful delivery of this infrastructure.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-4 space-y-12">
                        <Reveal delay={0.4}>
                            <div className="space-y-6 border-t border-white/10 pt-8">
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Location</h4>
                                    <p className="text-xl">Mpumalanga</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Year</h4>
                                    <p className="text-xl">2025</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Market Sector</h4>
                                    <p className="text-xl">Construction</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 bg-surface-dark/30">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectImages.map((src, index) => (
                            <Reveal key={src} delay={index % 3 * 0.1} width="100%">
                                <motion.div
                                    whileHover={{ scale: 0.98 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className={`relative overflow-hidden aspect-[4/5] bg-surface-dark border border-white/5 group`}
                                >
                                    <Image
                                        src={src}
                                        alt={`Marapyane detail ${index + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                        quality={75}
                                    />
                                    <div className="absolute inset-0 bg-background-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Navigation */}
            <section className="py-32 border-t border-white/10 text-center">
                <Reveal>
                    <p className="text-slate-500 uppercase tracking-widest text-sm mb-4">View Next Project</p>
                    <a
                        href="/projects/randfontein"
                        className="text-4xl md:text-6xl font-display font-semibold hover:text-primary transition-colors uppercase tracking-tight"
                    >
                        Randfontein →
                    </a>
                </Reveal>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
