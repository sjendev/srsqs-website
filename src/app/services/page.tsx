"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { RevealSimple } from "@/components/Reveal";
import { motion, Easing } from "framer-motion";

const services = [
    {
        tag: "The Value",
        title: "Quantity Surveying",
        description: "Precision in every decimal. Our quantity surveying services provide the commercial backbone for your developments. We manage costs, mitigate risks, and ensure that every dollar spent contributes to the overall project value. From feasibility to final account, your budget is our priority.",
        image: "/services/quantity-surveying.webp",
        reversed: false
    },
    {
        tag: "The Vision",
        title: "Architecture",
        description: "Where form meets function. Our architectural team crafts innovative spaces that respond to their environment and the people who inhabit them. We bridge the gap between aesthetic ambition and commercial reality, delivering designs that are as buildable as they are beautiful.",
        image: "/services/architecture.jpg",
        reversed: true
    },
    {
        tag: "The Foundation",
        title: "Civil and Structural Engineering",
        description: "Robust solutions for complex challenges. Our engineering team provides technical excellence in structural and civil design. We focus on efficiency, safety, and longevity, ensuring that the hidden bones of your project are engineered to the highest international standards.",
        image: "/services/civil-structural.webp",
        reversed: false
    },
    {
        tag: "The Power",
        title: "Electrical Engineering",
        description: "Powering modern infrastructure. We design and implement sophisticated electrical systems that ensure reliability and efficiency. From power distribution and lighting design to specialized building management systems, we provide the energy required for your vision to function.",
        image: "/services/electrical.jpg",
        reversed: true
    },
    {
        tag: "The Flow",
        title: "Mechanical Engineering",
        description: "Optimizing building performance. Our mechanical engineering services cover the vital systems that make a building habitable and efficient. We specialize in HVAC, fire protection, and complex vertical transportation, integrating seamless mechanical solutions into every structure.",
        image: "/services/mechanical.webp",
        reversed: false
    },
    {
        tag: "The Execution",
        title: "Project Management",
        description: "Delivery without compromise. Our project managers act as your single point of accountability. We coordinate multidisciplinary teams, manage timelines, and navigate the complexities of the construction site to ensure your vision is realized on time and to the specified quality.",
        image: "/services/project-management.webp",
        reversed: true
    },
    {
        tag: "The Culture",
        title: "Occupational Health and Safety",
        description: "Safety is not a checkbox; it's a commitment. We integrate comprehensive OHS protocols into every project stage. Our specialists ensure full compliance with regulatory standards, protecting the most valuable asset on any construction site: the people.",
        image: "/services/ohs.jpg",
        reversed: false
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background-dark overflow-x-hidden">
            <Nav />

            {/* Hero Section */}
            <header className="relative min-h-screen flex flex-col overflow-hidden bg-background-dark pt-20">
                <div className="w-full px-4 sm:px-12 lg:px-24 mb-8">
                    <RevealSimple delay={0.5}>
                        <img
                            src="/hero-services.png"
                            alt="Services"
                            className="h-4 w-auto object-contain opacity-80"
                        />
                    </RevealSimple>
                </div>
                <div className="flex flex-col lg:flex-row w-full flex-grow">
                    <div className="w-full lg:w-1/2 flex items-center px-4 sm:px-12 lg:px-24 py-32 lg:py-0 relative z-10">
                        <div className="max-w-xl">
                            <RevealSimple delay={0.1}>
                                <span className="block text-primary font-bold tracking-[0.4em] text-xs uppercase mb-6">Our Capabilities</span>
                            </RevealSimple>
                            <RevealSimple delay={0.2}>
                                <h1 className="font-display text-6xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9] text-white">
                                    OUR <br /> <span className="text-primary">EXPERTISE</span>
                                </h1>
                            </RevealSimple>
                            <RevealSimple delay={0.3}>
                                <p className="text-xl text-gray-400 leading-relaxed font-light mb-12">
                                    Integrated construction solutions from conception to completion. We combine rigorous <span className="text-white font-medium">financial control</span> with visionary design to ensure your project's success.
                                </p>
                            </RevealSimple>
                            <RevealSimple delay={0.4}>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a className="inline-block bg-primary hover:bg-primary-hover text-white px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all text-center" href="#services">
                                        Explore Services
                                    </a>
                                </div>
                            </RevealSimple>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-screen">
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" as Easing }}
                            className="absolute inset-0"
                        >
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 pointer-events-none"></div>
                            <img
                                alt="Modern architectural structure"
                                className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-all duration-1000"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgAzqYynHzBcN08bTCafShkZ7m2Pr_U7zNbYIRzmiJEGQeeMafvUGtMrWIqITz9Q1PkSOYzkTovg4sI6y0HaeM_EgRYWDfWBEXnY1JBXvc1fOJpPI4Mkdj_akemPOP-9dDGoV5NAvVvCFzS07aYKi1CKs9evNXj6pswAr4uEPYnX6a6U0z3QFGxtY9Xon2AL2tkIDUfz-_ti4v5K6gxgmq_TuriUxOQ_5aGx7GDfiRlrZrpRLwWndM1--YkaXw0OJC3F0XJpdlyqc"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-transparent hidden lg:block"></div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Services Sections */}
            <div id="services">
                {services.map((service, index) => (
                    <section key={index} className={`py-32 border-t border-gray-900 ${index % 2 !== 0 ? "bg-surface-dark" : "bg-background-dark"}`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className={service.reversed ? "lg:order-2" : ""}>
                                    <RevealSimple delay={0.1}>
                                        <div className="relative overflow-hidden aspect-[16/9] lg:aspect-square group">
                                            <img
                                                alt={service.title}
                                                className="object-cover w-full h-full group-hover:scale-105 transition-all duration-1000"
                                                src={service.image}
                                            />
                                            <div className="absolute inset-0 border border-white/10 group-hover:border-primary/30 transition-colors pointer-events-none"></div>
                                        </div>
                                    </RevealSimple>
                                </div>
                                <div className={`space-y-8 ${service.reversed ? "lg:order-1" : ""}`}>
                                    <RevealSimple delay={0.2}>
                                        <span className="text-primary font-bold text-sm uppercase tracking-[0.3em]">{service.tag}</span>
                                    </RevealSimple>
                                    <RevealSimple delay={0.3}>
                                        <h2 className="font-display text-4xl lg:text-6xl font-bold text-white tracking-tighter leading-tight">
                                            {service.title}
                                        </h2>
                                    </RevealSimple>
                                    <RevealSimple delay={0.4}>
                                        <p className="text-gray-400 text-xl leading-relaxed font-light">
                                            {service.description}
                                        </p>
                                    </RevealSimple>
                                    <RevealSimple delay={0.5}>
                                        <a className="inline-flex items-center gap-3 bg-white text-black hover:bg-primary hover:text-white px-10 py-5 font-bold uppercase tracking-widest text-xs transition-all group" href="#">
                                            Learn more
                                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </a>
                                    </RevealSimple>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Contact Section */}
            <Contact />

            <Footer />
        </main>
    );
}
