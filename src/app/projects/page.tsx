"use client";

import { useState } from "react";
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
                        backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.7), rgba(5, 5, 5, 0.85)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9dbot6ahrv5oNxOb6wbSvd-qZ-TxFhEXWB8Mxpk3YHeklvRw1QwHhMTTujdIMqDprtNqLMYKKXCPOZeElAb9ut5rFxazWWFjija-SWJyQbQqPjrdeGHmc9-ZDJ2JKX6mLoaY-PHcyOTaVvSsMPkZj8QAvJisZ1evSXgDS-iJDq_r7MwzICtPHWj7VMS6-UOOotcWjEzLVZlJyyPXvZn1g5M2FXEgfVyc8IJ1wVT0dOmheW74_0TJGrKy5kHMYB_E98zkIl3e_c2o")`
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

            {/* Filter Section */}
            <section className="bg-background-dark py-12 px-6 lg:px-20 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] border transition-all duration-300 ${activeCategory === category
                                ? "bg-primary text-white border-primary"
                                : "text-slate-500 bg-surface-dark/50 border-white/10 hover:border-primary hover:text-primary"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
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
                                        <div className="absolute top-6 left-6">
                                            <span className="bg-primary text-white text-[10px] font-semibold uppercase px-3 py-1.5 tracking-widest">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start px-2">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors uppercase tracking-tight font-display">
                                                {project.title}
                                            </h3>
                                            <p className="text-slate-500 text-sm font-medium font-body mt-1">
                                                {project.location}
                                            </p>
                                        </div>
                                        <span className="text-slate-700 font-semibold text-lg font-display">
                                            {project.year}
                                        </span>
                                    </div>
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
