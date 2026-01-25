"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Reveal } from "@/components/Reveal";

const projectImages = [
    "/projects/randfontein/DJI_0528.webp",
    "/projects/randfontein/DJI_0529.webp",
    "/projects/randfontein/DJI_0530.webp",
    "/projects/randfontein/DJI_0539.webp",
    "/projects/randfontein/DJI_0545.webp",
    "/projects/randfontein/DJI_0546.webp",
    "/projects/randfontein/DJI_0547.webp",
    "/projects/randfontein/DJI_0548.webp",
    "/projects/randfontein/DJI_0549.webp",
    "/projects/randfontein/DJI_0557.webp",
    "/projects/randfontein/DJI_0558.webp",
    "/projects/randfontein/DJI_0560.webp",
    "/projects/randfontein/DJI_0561.webp",
    "/projects/randfontein/DJI_0568.webp",
    "/projects/randfontein/DJI_0569.webp",
    "/projects/randfontein/DJI_0570.webp",
    "/projects/randfontein/DJI_0571.webp",
    "/projects/randfontein/DJI_0572.webp",
    "/projects/randfontein/DJI_0573.webp",
    "/projects/randfontein/DJI_0574.webp",
    "/projects/randfontein/DJI_0575.webp",
    "/projects/randfontein/DJI_0576.webp",
    "/projects/randfontein/DJI_0580.webp",
    "/projects/randfontein/DJI_0581.webp",
    "/projects/randfontein/DJI_0582.webp",
    "/projects/randfontein/DJI_0589.webp",
    "/projects/randfontein/DJI_0590.webp",
    "/projects/randfontein/DJI_0592.webp",
    "/projects/randfontein/DJI_0593.webp",
    "/projects/randfontein/DJI_0594.webp",
    "/projects/randfontein/DJI_0597.webp",
    "/projects/randfontein/DJI_0598.webp",
    "/projects/randfontein/DJI_0599.webp",
    "/projects/randfontein/DJI_0600.webp",
    "/projects/randfontein/DJI_0601.webp",
    "/projects/randfontein/DJI_0602.webp",
    "/projects/randfontein/DJI_0603.webp",
    "/projects/randfontein/DJI_0607.webp",
    "/projects/randfontein/DJI_0608.webp",
    "/projects/randfontein/DJI_0609.webp",
    "/projects/randfontein/DJI_0696.webp",
    "/projects/randfontein/DJI_0697.webp",
    "/projects/randfontein/DJI_0698.webp",
    "/projects/randfontein/DJI_0699.webp",
    "/projects/randfontein/DJI_0707.webp",
    "/projects/randfontein/DJI_0708.webp",
    "/projects/randfontein/DJI_0709.webp",
    "/projects/randfontein/IMG_4942.webp",
    "/projects/randfontein/IMG_4943.webp",
    "/projects/randfontein/IMG_4944.webp",
    "/projects/randfontein/IMG_4945.webp",
    "/projects/randfontein/IMG_4947.webp",
    "/projects/randfontein/IMG_9371.webp",
    "/projects/randfontein/IMG_9373.webp",
    "/projects/randfontein/IMG_9374.webp",
    "/projects/randfontein/IMG_9375.webp",
    "/projects/randfontein/IMG_9376.webp",
    "/projects/randfontein/IMG_9377.webp",
    "/projects/randfontein/IMG_9378.webp",
    "/projects/randfontein/IMG_9379.webp",
    "/projects/randfontein/IMG_9380.webp",
    "/projects/randfontein/IMG_9381.webp",
    "/projects/randfontein/IMG_9382.webp",
    "/projects/randfontein/IMG_9383.webp",
    "/projects/randfontein/IMG_9384.webp",
    "/projects/randfontein/IMG_9385.webp",
    "/projects/randfontein/IMG_9386.webp",
    "/projects/randfontein/IMG_9387.webp",
    "/projects/randfontein/IMG_9388.webp",
    "/projects/randfontein/IMG_9389.webp",
    "/projects/randfontein/IMG_9390.webp",
    "/projects/randfontein/IMG_9391.webp",
    "/projects/randfontein/IMG_9392.webp",
    "/projects/randfontein/IMG_9393.webp",
    "/projects/randfontein/IMG_9394.webp",
    "/projects/randfontein/IMG_9395.webp",
    "/projects/randfontein/IMG_9399.webp",
    "/projects/randfontein/IMG_9400.webp",
    "/projects/randfontein/IMG_9401.webp",
    "/projects/randfontein/IMG_9402.webp",
    "/projects/randfontein/IMG_9403.webp",
    "/projects/randfontein/IMG_9404.webp",
    "/projects/randfontein/IMG_9405.webp",
    "/projects/randfontein/IMG_9406.webp",
    "/projects/randfontein/IMG_9407.webp",
    "/projects/randfontein/IMG_9408.webp",
    "/projects/randfontein/IMG_9409.webp",
    "/projects/randfontein/IMG_9410.webp",
    "/projects/randfontein/IMG_9411.webp",
    "/projects/randfontein/IMG_9412.webp",
    "/projects/randfontein/IMG_9413.webp",
    "/projects/randfontein/IMG_9414.webp",
    "/projects/randfontein/IMG_9415.webp",
    "/projects/randfontein/IMG_9416.webp",
    "/projects/randfontein/IMG_9417.webp",
    "/projects/randfontein/IMG_9420.webp",
    "/projects/randfontein/IMG_9421.webp",
    "/projects/randfontein/IMG_9422.webp",
    "/projects/randfontein/IMG_9423.webp",
    "/projects/randfontein/IMG_9424.webp",
    "/projects/randfontein/IMG_9425.webp",
    "/projects/randfontein/IMG_9426.webp",
    "/projects/randfontein/IMG_9427.webp",
    "/projects/randfontein/IMG_9428.webp",
    "/projects/randfontein/IMG_9429.webp",
    "/projects/randfontein/IMG_9430.webp",
    "/projects/randfontein/IMG_9431.webp",
    "/projects/randfontein/IMG_9432.webp",
    "/projects/randfontein/IMG_9433.webp",
    "/projects/randfontein/IMG_9434.webp",
    "/projects/randfontein/IMG_9435.webp",
    "/projects/randfontein/IMG_9436.webp",
    "/projects/randfontein/IMG_9437.webp",
    "/projects/randfontein/IMG_9438.webp",
    "/projects/randfontein/IMG_9439.webp",
    "/projects/randfontein/IMG_9440.webp",
    "/projects/randfontein/IMG_9442.webp",
    "/projects/randfontein/IMG_9443.webp",
    "/projects/randfontein/IMG_9444.webp",
    "/projects/randfontein/IMG_9447.webp",
    "/projects/randfontein/IMG_9448.webp",
    "/projects/randfontein/IMG_9449.webp",
    "/projects/randfontein/IMG_9450.webp",
    "/projects/randfontein/IMG_9451.webp",
    "/projects/randfontein/IMG_9452.webp",
    "/projects/randfontein/IMG_9453.webp",
    "/projects/randfontein/IMG_9455.webp",
    "/projects/randfontein/IMG_9456.webp",
    "/projects/randfontein/IMG_9457.webp",
    "/projects/randfontein/IMG_9458.webp",
    "/projects/randfontein/IMG_9459.webp",
    "/projects/randfontein/IMG_9460.webp",
    "/projects/randfontein/IMG_9461.webp",
    "/projects/randfontein/IMG_9462.webp",
    "/projects/randfontein/IMG_9463.webp",
    "/projects/randfontein/IMG_9464.webp",
    "/projects/randfontein/IMG_9465.webp",
    "/projects/randfontein/IMG_9466.webp",
    "/projects/randfontein/IMG_9467.webp",
    "/projects/randfontein/IMG_9468.webp",
    "/projects/randfontein/IMG_9469.webp",
    "/projects/randfontein/IMG_9470.webp",
    "/projects/randfontein/IMG_9471.webp",
    "/projects/randfontein/IMG_9472.webp",
    "/projects/randfontein/IMG_9473.webp",
    "/projects/randfontein/IMG_9474.webp",
    "/projects/randfontein/IMG_9475.webp",
    "/projects/randfontein/IMG_9476.webp",
    "/projects/randfontein/IMG_9483.webp",
    "/projects/randfontein/IMG_9774.webp",
    "/projects/randfontein/IMG_9775.webp",
    "/projects/randfontein/IMG_9776.webp",
    "/projects/randfontein/IMG_9777.webp",
    "/projects/randfontein/IMG_9778.webp",
    "/projects/randfontein/IMG_9780.webp",
    "/projects/randfontein/IMG_9782.webp",
    "/projects/randfontein/IMG_9783.webp",
    "/projects/randfontein/IMG_9784.webp",
    "/projects/randfontein/IMG_9786.webp",
    "/projects/randfontein/IMG_9851.webp",
    "/projects/randfontein/IMG_9852.webp",
    "/projects/randfontein/IMG_9853.webp",
    "/projects/randfontein/IMG_9854.webp",
    "/projects/randfontein/IMG_9855.webp",
    "/projects/randfontein/IMG_9856.webp",
    "/projects/randfontein/IMG_9857.webp",
    "/projects/randfontein/IMG_9858.webp",
    "/projects/randfontein/IMG_9859.webp",
    "/projects/randfontein/IMG_9860.webp",
    "/projects/randfontein/IMG_9861.webp",
    "/projects/randfontein/IMG_9862.webp",
    "/projects/randfontein/IMG_9863.webp",
    "/projects/randfontein/IMG_9864.webp",
    "/projects/randfontein/IMG_9866.webp",
    "/projects/randfontein/IMG_9867.webp",
    "/projects/randfontein/IMG_9868.webp",
    "/projects/randfontein/IMG_9869.webp",
    "/projects/randfontein/IMG_9870.webp",
    "/projects/randfontein/IMG_9922.webp",
    "/projects/randfontein/IMG_9923.webp",
    "/projects/randfontein/IMG_9924.webp",
    "/projects/randfontein/IMG_9925.webp",
    "/projects/randfontein/IMG_9926.webp",
    "/projects/randfontein/IMG_9927.webp",
    "/projects/randfontein/IMG_9928.webp",
    "/projects/randfontein/IMG_9929.webp",
    "/projects/randfontein/IMG_9930.webp",
    "/projects/randfontein/IMG_9933.webp",
    "/projects/randfontein/IMG_9934.webp",
    "/projects/randfontein/IMG_9935.webp",
    "/projects/randfontein/IMG_9936.webp",
];

export default function RandfonteinPage() {
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
                        src="/projects/randfontein/DJI_0528.webp"
                        alt="Randfontein Project Aerial View"
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
                            Randfontein
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
                                Construction of a new corporate office for Western TVET College (Westcol).
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <div className="prose prose-invert prose-lg max-w-none text-slate-400 font-body">
                                <p>
                                    The project entails the construction of a new corporate office designed to accommodate all departments of the Westcol institution under one roof at a different site to the existing location.
                                </p>
                                <p>
                                    As the appointed Consultants, SRSQS provided a comprehensive multi-disciplinary service, ensuring that the facility meets the administrative needs of the college.
                                </p>
                                <p>
                                    Key responsibilities included design development, project cost estimation, tender procurement and adjudication, and construction supervision in terms of budget, time, and quality management, along with continuous stakeholder engagement and project close-out.
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
                                    <p className="text-xl">Randfontein Campus, Gauteng</p>
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
                                    <p className="text-xl italic text-sm">All disciplines</p>
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
                                        alt={`Randfontein detail ${index + 1}`}
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
                        href="/projects/heidelberg"
                        className="text-4xl md:text-6xl font-display font-semibold hover:text-primary transition-colors uppercase tracking-tight"
                    >
                        Heidelberg →
                    </a>
                </Reveal>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
