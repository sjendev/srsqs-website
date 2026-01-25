"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { projects, categories } from "@/data/projects";
import { motion, AnimatePresence, Easing } from "framer-motion";

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = projects.filter(
        (project) => activeCategory === "All" || project.category === activeCategory
    );

    return (
        <main className="min-h-screen bg-background-dark transition-colors duration-300">
            <Nav />

            {/* Hero Section */}
            <section className="relative">
                <div
                    className="w-full min-h-[600px] lg:min-h-[800px] flex flex-col items-center justify-center p-12 bg-cover bg-center text-center relative overflow-hidden"
                    style={{
                        backgroundImage: `linear-gradient(rgba(36, 36, 36, 0.7), rgba(36, 36, 36, 0.85)), url("/projects-hero.webp")`
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" as Easing }}
                        className="max-w-4xl space-y-4 pt-20"
                    >
                        <h1 className="text-white text-6xl md:text-8xl font-display font-semibold tracking-tighter uppercase">
                            OUR PORTFOLIO
                        </h1>
                        <p className="text-slate-400 text-lg md:text-2xl font-light tracking-wide font-body">
                            Building Excellence Across Every Sector
                        </p>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 120 }}
                            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" as Easing }}
                            className="h-1 bg-primary mx-auto mt-8"
                        ></motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="bg-background-dark py-24 px-6 lg:px-20 min-h-[600px]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: "easeOut" as Easing }}
                                    className="group flex flex-col gap-6"
                                >
                                    <div className="relative overflow-hidden aspect-[4/5] bg-surface-dark border border-white/5 transition-all duration-700">
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                            style={{ backgroundImage: `url("${project.image}")` }}
                                        ></div>
                                    </div>
                                    <Link href={project.href || "/projects"} className="px-2">
                                        <div className="w-full bg-primary h-12 flex items-center justify-between px-6 rounded-none text-white font-semibold text-sm hover:bg-primary-hover transition-colors cursor-pointer">
                                            View Project <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <Contact />

            <Footer />
        </main>
    );
}
