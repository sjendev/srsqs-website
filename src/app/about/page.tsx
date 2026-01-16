"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { aboutData } from "@/data/aboutData";
import { Reveal, RevealSimple } from "@/components/Reveal";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background-dark text-text-dark font-body antialiased">
            <Nav />

            {/* Hero Section */}
            <header className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden bg-background-dark">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-background-dark"></div>
                    <img
                        alt="Engineering background"
                        className="w-full h-full object-cover opacity-30"
                        src={aboutData.hero.image}
                    />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <RevealSimple delay={0.1}>
                        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1 border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em]">
                            {aboutData.hero.badge}
                        </div>
                    </RevealSimple>
                    <RevealSimple delay={0.2}>
                        <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight mb-8">
                            World-Class Engineering & <span className="text-primary">{aboutData.hero.highlight}</span> Solutions
                        </h1>
                    </RevealSimple>
                    <RevealSimple delay={0.3}>
                        <p className="text-lg md:text-xl text-muted-dark mb-10 leading-relaxed max-w-2xl mx-auto">
                            {aboutData.hero.description}
                        </p>
                    </RevealSimple>
                    <RevealSimple delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a className="bg-primary text-white px-10 py-5 font-bold hover:bg-primary-hover transition-all uppercase tracking-widest text-sm" href={aboutData.hero.ctas[0].href}>
                                {aboutData.hero.ctas[0].label}
                            </a>
                            <a className="border border-white/20 text-white px-10 py-5 font-bold hover:bg-white hover:text-black transition-all uppercase tracking-widest text-sm" href={aboutData.hero.ctas[1].href}>
                                {aboutData.hero.ctas[1].label}
                            </a>
                        </div>
                    </RevealSimple>
                </div>
            </header>

            {/* Excellence Section */}
            <section className="py-24 bg-surface-dark border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <RevealSimple>
                            <div>
                                <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-8">
                                    Engineering Excellence <br /><span className="text-primary">Since 2012</span>
                                </h2>
                                <div className="space-y-6 text-muted-dark leading-relaxed">
                                    {aboutData.excellence.content.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                    <div className="pt-4 flex gap-8">
                                        {aboutData.excellence.stats.map((stat, i) => (
                                            <div key={i}>
                                                <div className="text-primary text-3xl font-bold">{stat.value}</div>
                                                <div className="text-xs uppercase tracking-widest font-semibold mt-1">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </RevealSimple>
                        <RevealSimple delay={0.2}>
                            <div className="relative group">
                                <img
                                    alt="Modern Architecture"
                                    className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    src={aboutData.excellence.image}
                                />
                                <div className="absolute -bottom-6 -left-6 bg-primary p-8 hidden md:block">
                                    <p className="text-white font-display text-2xl font-bold italic">"{aboutData.excellence.quote}"</p>
                                </div>
                            </div>
                        </RevealSimple>
                    </div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="py-24 bg-background-light text-text-light dark:bg-background-light dark:text-text-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <RevealSimple>
                            <span className="text-primary font-bold text-xs mb-4 block uppercase tracking-widest">{aboutData.pillars.badge}</span>
                        </RevealSimple>
                        <RevealSimple delay={0.1}>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">{aboutData.pillars.title}</h2>
                        </RevealSimple>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {aboutData.pillars.items.map((item, i) => (
                            <RevealSimple key={i} delay={i * 0.1}>
                                <div className="bg-white p-8 border-t-4 border-primary shadow-sm hover:shadow-xl transition-all group h-full">
                                    <span className="material-symbols-outlined text-4xl mb-6 text-gray-900 group-hover:scale-110 transition-transform block">{item.icon}</span>
                                    <h3 className="font-display text-xl font-bold mb-4 text-gray-900 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </RevealSimple>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-24 bg-background-dark border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <RevealSimple>
                                <span className="text-primary font-bold text-xs mb-4 block uppercase tracking-widest">{aboutData.capabilities.badge}</span>
                            </RevealSimple>
                            <RevealSimple delay={0.1}>
                                <h2 className="font-display text-4xl md:text-5xl font-bold">{aboutData.capabilities.title}</h2>
                            </RevealSimple>
                        </div>
                        <RevealSimple delay={0.2}>
                            <p className="text-muted-dark max-w-sm text-sm">{aboutData.capabilities.description}</p>
                        </RevealSimple>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                        {aboutData.capabilities.items.map((item, i) => (
                            <div key={i} className="bg-background-dark p-12 hover:bg-primary/5 transition-colors group">
                                <span className="material-symbols-outlined text-primary text-4xl mb-6">{item.icon}</span>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-dark text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EPCM Section */}
            <section className="py-24 bg-surface-dark overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <RevealSimple>
                                <span className="text-primary font-bold text-xs mb-4 block uppercase tracking-widest">{aboutData.epcm.badge}</span>
                            </RevealSimple>
                            <RevealSimple delay={0.1}>
                                <h2 className="font-display text-4xl font-bold mb-8">{aboutData.epcm.title}</h2>
                            </RevealSimple>
                            <RevealSimple delay={0.2}>
                                <p className="text-muted-dark mb-12">
                                    {aboutData.epcm.description}
                                </p>
                            </RevealSimple>
                            <div className="relative timeline-line space-y-12">
                                {aboutData.epcm.steps.map((step, i) => (
                                    <RevealSimple key={i} delay={i * 0.1}>
                                        <div className="relative pl-12">
                                            <span className={`absolute left-0 top-0 w-8 h-8 flex items-center justify-center font-bold text-sm ${i === 0 ? "bg-primary text-white" : "border border-primary text-primary"}`}>
                                                {step.id}
                                            </span>
                                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                            <p className="text-muted-dark text-sm">{step.description}</p>
                                        </div>
                                    </RevealSimple>
                                ))}
                            </div>
                        </div>
                        <RevealSimple delay={0.3}>
                            <div className="bg-black/40 border border-white/5 p-4 flex items-center justify-center h-full">
                                <img
                                    alt="Engineering Schematic"
                                    className="w-full h-auto opacity-40 grayscale"
                                    src={aboutData.epcm.image}
                                />
                            </div>
                        </RevealSimple>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-32 bg-background-dark border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <RevealSimple>
                            <span className="text-primary font-bold text-xs mb-4 block uppercase tracking-[0.3em]">{aboutData.team.badge}</span>
                        </RevealSimple>
                        <RevealSimple delay={0.1}>
                            <h2 className="font-display text-4xl md:text-5xl font-bold">{aboutData.team.title}</h2>
                        </RevealSimple>
                    </div>

                    {/* Executive */}
                    <div className="bg-charcoal-box border border-white/10 p-8 mb-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <h3 className="text-primary font-display font-extrabold text-[11px] uppercase tracking-[0.25em]">{aboutData.team.executive.division}</h3>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-xl">person</span>
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-base">{aboutData.team.executive.name}</p>
                                    <p className="text-muted-dark text-[10px] font-light uppercase tracking-wider">{aboutData.team.executive.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divisions Masonry */}
                    <div className="team-masonry">
                        {aboutData.team.divisions.map((division, i) => (
                            <div key={i} className="team-card bg-charcoal-box border border-white/10 p-8 space-y-6">
                                <h3 className="text-primary font-display font-extrabold text-[11px] uppercase tracking-[0.25em]">{division.name}</h3>
                                <div className="space-y-4">
                                    {division.members.map((member, j) => (
                                        <div key={j}>
                                            <p className="text-white font-medium text-sm">{member.name}</p>
                                            <p className="text-muted-dark text-[11px] font-light uppercase">{member.role}</p>
                                            {/* Optional separator after lead roles but too messy here */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
