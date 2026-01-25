"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Reveal } from "@/components/Reveal";

const projectImages = [
    "/projects/heidelberg/DJI_0623.webp",
    "/projects/heidelberg/DJI_0626.webp",
    "/projects/heidelberg/DJI_0669.webp",
    "/projects/heidelberg/DJI_0673.webp",
    "/projects/heidelberg/DJI_0677.webp",
    "/projects/heidelberg/DJI_0681.webp",
    "/projects/heidelberg/DJI_0688.webp",
    "/projects/heidelberg/DJI_0693.webp",
    "/projects/heidelberg/IMG_4839.webp",
    "/projects/heidelberg/IMG_4843.webp",
    "/projects/heidelberg/IMG_4844.webp",
    "/projects/heidelberg/IMG_4847.webp",
    "/projects/heidelberg/IMG_4850.webp",
    "/projects/heidelberg/IMG_4852.webp",
    "/projects/heidelberg/IMG_4853.webp",
    "/projects/heidelberg/IMG_4855.webp",
    "/projects/heidelberg/IMG_4856.webp",
    "/projects/heidelberg/IMG_4857.webp",
    "/projects/heidelberg/IMG_4858.webp",
    "/projects/heidelberg/IMG_4859.webp",
    "/projects/heidelberg/IMG_4860.webp",
    "/projects/heidelberg/IMG_4869.webp",
    "/projects/heidelberg/IMG_4872.webp",
    "/projects/heidelberg/IMG_4885.webp",
    "/projects/heidelberg/IMG_4917.webp",
    "/projects/heidelberg/IMG_4919.webp",
    "/projects/heidelberg/IMG_4921.webp",
    "/projects/heidelberg/IMG_4923.webp",
    "/projects/heidelberg/IMG_4930.webp",
    "/projects/heidelberg/IMG_4931.webp",
    "/projects/heidelberg/IMG_9563.webp",
    "/projects/heidelberg/IMG_9566.webp",
    "/projects/heidelberg/IMG_9571.webp",
    "/projects/heidelberg/IMG_9574.webp",
    "/projects/heidelberg/IMG_9576.webp",
    "/projects/heidelberg/IMG_9577.webp",
    "/projects/heidelberg/IMG_9582.webp",
    "/projects/heidelberg/IMG_9583.webp",
    "/projects/heidelberg/IMG_9584.webp",
    "/projects/heidelberg/IMG_9585.webp",
    "/projects/heidelberg/IMG_9587.webp",
    "/projects/heidelberg/IMG_9588.webp",
    "/projects/heidelberg/IMG_9590.webp",
    "/projects/heidelberg/IMG_9591.webp",
    "/projects/heidelberg/IMG_9593.webp",
    "/projects/heidelberg/IMG_9594.webp",
    "/projects/heidelberg/IMG_9595.webp",
    "/projects/heidelberg/IMG_9597.webp",
    "/projects/heidelberg/IMG_9601.webp",
    "/projects/heidelberg/IMG_9602.webp",
    "/projects/heidelberg/IMG_9604.webp",
    "/projects/heidelberg/IMG_9607.webp",
    "/projects/heidelberg/IMG_9608.webp",
    "/projects/heidelberg/IMG_9609.webp",
    "/projects/heidelberg/IMG_9610.webp",
    "/projects/heidelberg/IMG_9612.webp",
    "/projects/heidelberg/IMG_9613.webp",
    "/projects/heidelberg/IMG_9616.webp",
    "/projects/heidelberg/IMG_9637.webp",
    "/projects/heidelberg/IMG_9647.webp",
    "/projects/heidelberg/IMG_9650.webp",
    "/projects/heidelberg/IMG_9663.webp",
    "/projects/heidelberg/IMG_9669.webp",
];

export default function HeidelbergPage() {
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
                        src="/projects/heidelberg/IMG_9607.webp"
                        alt="Heidelberg Project Aerial View"
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
                            Heidelberg
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
                                The construction of a modern cafeteria facility at the SEDCOL Heidelberg campus.
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <div className="prose prose-invert prose-lg max-w-none text-slate-400 font-body">
                                <p>
                                    The project involved the construction of a cafeteria facility aimed at improving student amenities, supporting campus life, and enhancing the overall learning environment.
                                </p>
                                <p>
                                    As the appointed Principal Agent and Project Management service provider, SRSQS was responsible for managing the full project lifecycle from planning and procurement through to construction, commissioning, and close-out ensuring compliance with educational infrastructure standards, health and safety regulations, and client requirements.
                                </p>
                                <p>
                                    The scope included coordination of all professional disciplines, stakeholder engagement with college management and end users, quality assurance, programme and cost control, and risk management to ensure the successful delivery of a functional, modern, and student-centred cafeteria facility within budget and programme.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-4 space-y-12">
                        <Reveal delay={0.4}>
                            <div className="space-y-6 border-t border-white/10 pt-8">
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Client</h4>
                                    <p className="text-xl">SEDCOL</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Location</h4>
                                    <p className="text-xl">Heidelberg, Gauteng</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Year</h4>
                                    <p className="text-xl">2025</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Market Sector</h4>
                                    <p className="text-xl">Education</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Responsibilities</h4>
                                    <p className="text-xl">Principal Agent, All disciplines</p>
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
                                        alt={`Heidelberg detail ${index + 1}`}
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
                        href="/projects/lords-signature"
                        className="text-4xl md:text-6xl font-display font-semibold hover:text-primary transition-colors uppercase tracking-tight"
                    >
                        Lords&apos; Signature →
                    </a>
                </Reveal>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
