"use client";

import Image from "next/image";
import { motion, Easing } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Reveal } from "@/components/Reveal";

const projectImages = [
    "/projects/callertonville/DJI_0819.webp",
    "/projects/callertonville/DJI_0821.webp",
    "/projects/callertonville/DJI_0824.webp",
    "/projects/callertonville/DJI_0826.webp",
    "/projects/callertonville/DJI_0831.webp",
    "/projects/callertonville/DJI_0846.webp",
    "/projects/callertonville/DJI_0847.webp",
    "/projects/callertonville/IMG_5130.webp",
    "/projects/callertonville/IMG_5131.webp",
    "/projects/callertonville/IMG_5132.webp",
    "/projects/callertonville/IMG_5134.webp",
    "/projects/callertonville/IMG_5139.webp",
    "/projects/callertonville/IMG_5149.webp",
    "/projects/callertonville/IMG_5168.webp",
    "/projects/callertonville/IMG_5171.webp",
    "/projects/callertonville/IMG_5174.webp",
    "/projects/callertonville/IMG_5215.webp",
    "/projects/callertonville/IMG_5220.webp",
    "/projects/callertonville/IMG_5223.webp",
    "/projects/callertonville/IMG_5226.webp",
    "/projects/callertonville/IMG_5230.webp",
    "/projects/callertonville/IMG_5232.webp",
];

export default function CallertonvillePage() {
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
                        src="/projects/callertonville/DJI_0824.webp"
                        alt="Callertonville Aerial View"
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
                            Carletonville
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
                                Construction of a guardhouse at the Carletonville TVET College campus.
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <div className="prose prose-invert prose-lg max-w-none text-slate-400 font-body">
                                <p>
                                    The project entails the construction of a guardhouse at the Carletonville TVET College premises to enhance security measures and to safeguard both the students and the facility.
                                </p>
                                <p>
                                    As the appointed Consultants, our key responsibilities include design development, project cost estimation, tender procurement and adjudication, construction supervision in terms of budget, time and quality management, continuous stakeholder engagement and project close-out.
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
                                    <p className="text-xl">Carletonville Campus, Gauteng</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Market Sector</h4>
                                    <p className="text-xl">Public/Educational Sector</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Disciplines</h4>
                                    <p className="text-xl">QS, Architectural, Civil and Structural Engineering, Electrical Engineering, Mechanical Engineering, OHS</p>
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
                                        alt={`Callertonville detail ${index + 1}`}
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
                        href="/projects/krugersdorp"
                        className="text-4xl md:text-6xl font-display font-semibold hover:text-primary transition-colors uppercase tracking-tight"
                    >
                        Krugersdorp →
                    </a>
                </Reveal>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
