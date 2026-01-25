"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Reveal } from "@/components/Reveal";

const projectImages = [
    "/projects/krugersdorp/DJI_0505.webp",
    "/projects/krugersdorp/DJI_0516.webp",
    "/projects/krugersdorp/DJI_0517.webp",
    "/projects/krugersdorp/DJI_0518.webp",
    "/projects/krugersdorp/DJI_0519.webp",
    "/projects/krugersdorp/DJI_0526.webp",
    "/projects/krugersdorp/IMG_4603.webp",
    "/projects/krugersdorp/IMG_4609.webp",
    "/projects/krugersdorp/IMG_4716.webp",
    "/projects/krugersdorp/IMG_4717.webp",
    "/projects/krugersdorp/IMG_4718.webp",
    "/projects/krugersdorp/IMG_4719.webp",
    "/projects/krugersdorp/IMG_4720.webp",
    "/projects/krugersdorp/IMG_4721.webp",
    "/projects/krugersdorp/IMG_4722.webp",
    "/projects/krugersdorp/IMG_4723.webp",
    "/projects/krugersdorp/IMG_4724.webp",
    "/projects/krugersdorp/IMG_4725.webp",
    "/projects/krugersdorp/IMG_4726.webp",
    "/projects/krugersdorp/IMG_4727.webp",
    "/projects/krugersdorp/IMG_4728.webp",
    "/projects/krugersdorp/IMG_4729.webp",
    "/projects/krugersdorp/IMG_4730.webp",
    "/projects/krugersdorp/IMG_4731.webp",
    "/projects/krugersdorp/IMG_4732.webp",
    "/projects/krugersdorp/IMG_4733.webp",
    "/projects/krugersdorp/IMG_4734.webp",
    "/projects/krugersdorp/IMG_4735.webp",
    "/projects/krugersdorp/IMG_4736.webp",
    "/projects/krugersdorp/IMG_4737.webp",
    "/projects/krugersdorp/IMG_4738.webp",
    "/projects/krugersdorp/IMG_4749.webp",
    "/projects/krugersdorp/IMG_4750.webp",
    "/projects/krugersdorp/IMG_4751.webp",
    "/projects/krugersdorp/IMG_4752.webp",
    "/projects/krugersdorp/IMG_4754.webp",
    "/projects/krugersdorp/IMG_4755.webp",
    "/projects/krugersdorp/IMG_4756.webp",
    "/projects/krugersdorp/IMG_4757.webp",
    "/projects/krugersdorp/IMG_4758.webp",
    "/projects/krugersdorp/IMG_4759.webp",
    "/projects/krugersdorp/IMG_4761.webp",
    "/projects/krugersdorp/IMG_4762.webp",
    "/projects/krugersdorp/IMG_4763.webp",
    "/projects/krugersdorp/IMG_4764.webp",
    "/projects/krugersdorp/IMG_9291.webp",
    "/projects/krugersdorp/IMG_9292.webp",
    "/projects/krugersdorp/IMG_9297.webp",
    "/projects/krugersdorp/IMG_9298.webp",
    "/projects/krugersdorp/IMG_9299.webp",
    "/projects/krugersdorp/IMG_9301.webp",
    "/projects/krugersdorp/IMG_9302.webp",
    "/projects/krugersdorp/IMG_9303.webp",
    "/projects/krugersdorp/IMG_9304.webp",
    "/projects/krugersdorp/IMG_9305.webp",
    "/projects/krugersdorp/IMG_9306.webp",
    "/projects/krugersdorp/IMG_9307.webp",
    "/projects/krugersdorp/IMG_9319.webp",
    "/projects/krugersdorp/IMG_9322.webp",
    "/projects/krugersdorp/IMG_9323.webp",
    "/projects/krugersdorp/IMG_9324.webp",
    "/projects/krugersdorp/IMG_9326.webp",
    "/projects/krugersdorp/IMG_9328.webp",
    "/projects/krugersdorp/IMG_9330.webp",
    "/projects/krugersdorp/IMG_9332.webp",
    "/projects/krugersdorp/IMG_9334.webp",
    "/projects/krugersdorp/IMG_9350.webp",
    "/projects/krugersdorp/IMG_9354.webp",
    "/projects/krugersdorp/IMG_9355.webp",
    "/projects/krugersdorp/IMG_9356.webp",
    "/projects/krugersdorp/IMG_9358.webp",
];

export default function KrugersdorpPage() {
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
                        src="/projects/krugersdorp/DJI_0516.webp"
                        alt="Krugersdorp Project Aerial View"
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
                            Krugersdorp
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
                                Demolition and construction of new, purpose-built classrooms at Westcol Krugersdorp Campus.
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <div className="prose prose-invert prose-lg max-w-none text-slate-400 font-body">
                                <p>
                                    The project entails the demolition of existing classrooms containing asbestos material and construction of new, fit for purpose classrooms.
                                </p>
                                <p>
                                    As the appointed consultants, SRSQS is responsible for the full project lifecycle, including design development, project cost estimation, and tender procurement and adjudication.
                                </p>
                                <p>
                                    Our key responsibilities extend to construction supervision in terms of budget, time and quality management, continuous stakeholder engagement, and project close-out, ensuring a safe and modern learning environment for the college.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-4 space-y-12">
                        <Reveal delay={0.4}>
                            <div className="space-y-6 border-t border-white/10 pt-8">
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Client</h4>
                                    <p className="text-xl">Western TVET College (Westcol)</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Location</h4>
                                    <p className="text-xl">Krugersdorp Central Campus, Gauteng</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Year</h4>
                                    <p className="text-xl">2025</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Market Sector</h4>
                                    <p className="text-xl">Public/Educational Sector</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Disciplines</h4>
                                    <p className="text-xl italic text-sm">QS, Architectural, Engineering (Civil, Structural, Electrical, Mechanical), OHS</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Responsibilities</h4>
                                    <p className="text-xl">Appointed as the Consultants</p>
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
                                        alt={`Krugersdorp detail ${index + 1}`}
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
                        href="/projects/marapyane"
                        className="text-4xl md:text-6xl font-display font-semibold hover:text-primary transition-colors uppercase tracking-tight"
                    >
                        Marapyane →
                    </a>
                </Reveal>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
