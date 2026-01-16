"use client";

import { siteData } from "@/data/siteData";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, Variants, BezierDefinition, Easing } from "framer-motion";

const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1] as const;

export default function Nav() {
    const { scrollY } = useScroll();
    const [windowWidth, setWindowWidth] = useState(0);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    useEffect(() => {
        const updateWidth = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const smoothScroll = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const targetPillWidth = Math.min(windowWidth * 0.95, 1280);
    const currentFullWidth = windowWidth > 0 ? windowWidth : 1920;

    const scrollWidth = useTransform(
        smoothScroll,
        [0, 100],
        [currentFullWidth, targetPillWidth]
    );

    const scrollBg = useTransform(
        smoothScroll,
        [0, 100],
        ["rgba(20, 20, 20, 0)", "rgba(20, 20, 20, 0.5)"]
    );
    const scrollBlur = useTransform(
        smoothScroll,
        [0, 100],
        ["blur(0px) saturate(100%)", "blur(32px) saturate(150%)"]
    );
    const scrollBorder = useTransform(
        smoothScroll,
        [0, 100],
        ["1px solid rgba(255, 255, 255, 0)", "1px solid rgba(255, 255, 255, 0.1)"]
    );
    const scrollYOffset = useTransform(smoothScroll, [0, 100], [0, 12]);
    const scrollPadding = useTransform(smoothScroll, [0, 100], [64, 12]);

    const scrollTextColor = useTransform(
        smoothScroll,
        [0, 100],
        ["rgba(255, 255, 255, 0.9)", "rgba(255, 255, 255, 0.7)"]
    );

    const duration = 0.5;

    const menuVariants: Variants = {
        closed: {
            opacity: 0,
            y: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut" as Easing
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                staggerChildren: 0.04,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        closed: { opacity: 0, y: 10 },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
            }
        }
    };

    const isMegaMenuVisible = !!(hoveredLink && siteData.nav.megaMenu && siteData.nav.megaMenu[hoveredLink as keyof typeof siteData.nav.megaMenu]);

    return (
        <motion.div
            initial={false}
            animate={{
                paddingTop: isMegaMenuVisible ? 0 : 8,
            }}
            transition={{ duration, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="fixed w-full z-50 flex justify-center px-0 pointer-events-none"
            onMouseLeave={() => setHoveredLink(null)}
        >
            <motion.nav
                animate={{
                    width: isMegaMenuVisible || isMobileMenuOpen ? "100%" : (isScrolled ? targetPillWidth : currentFullWidth),
                    backgroundColor: isMegaMenuVisible || isMobileMenuOpen ? "#FFFFFF" : "rgba(255, 255, 255, 0)",
                    y: isMegaMenuVisible || isMobileMenuOpen ? 0 : undefined,
                }}
                transition={{
                    duration: isMegaMenuVisible || isMobileMenuOpen ? 0.5 : 0.4,
                    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                    backgroundColor: { duration: isMegaMenuVisible || isMobileMenuOpen ? 0.4 : 0.2 }
                }}
                style={{
                    width: !isMegaMenuVisible ? scrollWidth : undefined,
                    backgroundColor: !isMegaMenuVisible ? scrollBg : undefined,
                    backdropFilter: !isMegaMenuVisible ? scrollBlur : "none",
                    border: !isMegaMenuVisible ? scrollBorder : "none",
                    y: !isMegaMenuVisible ? scrollYOffset : 0,
                    paddingLeft: !isMegaMenuVisible ? scrollPadding : 0,
                    paddingRight: !isMegaMenuVisible ? scrollPadding : 0,
                }}
                className={`flex flex-col pointer-events-auto overflow-hidden ${isMegaMenuVisible ? "shadow-2xl" : ""}`}
            >
                <motion.div
                    animate={{
                        height: isMegaMenuVisible || isMobileMenuOpen ? 100 : 80,
                        paddingLeft: isMegaMenuVisible || isMobileMenuOpen ? 48 : 24,
                        paddingRight: isMegaMenuVisible || isMobileMenuOpen ? 48 : 24,
                    }}
                    transition={{ duration, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className="flex items-center justify-between w-full mx-auto relative px-4"
                >
                    <div className="relative flex items-center flex-shrink-0 w-[240px] h-16">
                        <a href="/" className="relative block w-full h-full">
                            <motion.img
                                animate={{ opacity: isMegaMenuVisible || isMobileMenuOpen ? 0 : 1 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                                src={siteData.nav.logoLight}
                                alt={siteData.nav.logo}
                                className="absolute inset-y-0 left-0 h-16 w-auto object-contain"
                            />
                            <motion.img
                                animate={{ opacity: isMegaMenuVisible || isMobileMenuOpen ? 1 : 0 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                                src={siteData.nav.logoDark}
                                alt={siteData.nav.logo}
                                className="absolute inset-y-0 left-0 h-16 w-auto object-contain"
                            />
                        </a>
                    </div>

                    <div className="hidden md:flex flex-1 justify-center space-x-10 items-center h-full">
                        {siteData.nav.links.map((link) => (
                            <div key={link.label} className="relative h-full flex items-center">
                                <motion.a
                                    onMouseEnter={() => {
                                        if (link.hasMegaMenu) setHoveredLink(link.label);
                                        else setHoveredLink(null);
                                    }}
                                    animate={{ color: isMegaMenuVisible ? "#000000" : undefined }}
                                    style={{ color: !isMegaMenuVisible ? scrollTextColor : undefined }}
                                    className="text-[13px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-primary py-4 flex items-center"
                                    href={link.href}
                                >
                                    {link.label}
                                    {link.hasMegaMenu && (
                                        <motion.span
                                            animate={{ rotate: hoveredLink === link.label ? 45 : 0 }}
                                            className="ml-1 text-[10px] transform translate-y-[-1px]"
                                        >
                                            +
                                        </motion.span>
                                    )}
                                </motion.a>
                            </div>
                        ))}
                    </div>

                    <div className="hidden md:flex flex-shrink-0 w-[240px] justify-end items-center h-full">
                        <motion.a
                            initial={false}
                            animate={{
                                backgroundColor: "#FF4500",
                                color: "#FFFFFF"
                            }}
                            whileHover={{ backgroundColor: "#E03D00" }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                            className="px-8 py-3.5 rounded-sm text-[11px] font-bold uppercase tracking-widest flex-shrink-0 border-none shadow-none flex items-center gap-2 cursor-pointer"
                            href={siteData.nav.cta.href}
                        >
                            {siteData.nav.cta.label}
                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </motion.a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            animate={{ color: isMegaMenuVisible || isMobileMenuOpen ? "#000000" : "#FFFFFF" }}
                            className="hover:text-primary focus:outline-none transition-colors pointer-events-auto"
                        >
                            <span className="material-symbols-outlined">
                                {isMobileMenuOpen ? "close" : "menu"}
                            </span>
                        </motion.button>
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    {isMegaMenuVisible && (
                        <motion.div
                            key={hoveredLink}
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="w-full border-t border-gray-100 bg-white pb-12 overflow-hidden"
                        >
                            <div className="max-w-[1400px] mx-auto px-6 pt-8">
                                <div className="flex justify-between items-end mb-8">
                                    <motion.h2 variants={itemVariants} className="text-4xl font-display font-medium tracking-tight text-black">
                                        {siteData.nav.megaMenu?.[hoveredLink as keyof typeof siteData.nav.megaMenu]?.title}
                                    </motion.h2>
                                    <motion.div variants={itemVariants} className="flex items-center gap-6">
                                        {hoveredLink === "Projects" && (
                                            <span className="text-xs uppercase tracking-widest text-gray-500">Explore All Projects</span>
                                        )}
                                        <span className="material-symbols-outlined text-gray-400">more_horiz</span>
                                    </motion.div>
                                </div>
                                <div className="grid grid-cols-3 gap-8">
                                    {siteData.nav.megaMenu?.[hoveredLink as keyof typeof siteData.nav.megaMenu]?.items.map((item, idx) => (
                                        <motion.a
                                            key={idx}
                                            variants={itemVariants}
                                            href={(item as any).href || "#"}
                                            className="group cursor-pointer block"
                                            onClick={() => setHoveredLink(null)}
                                        >
                                            <div className="aspect-[16/10] overflow-hidden bg-gray-100 mb-4 relative rounded-[2px]">
                                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <div className="absolute left-6 bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                                    <span className="inline-flex items-center gap-2 bg-[#FF4500] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3 shadow-lg">
                                                        {item.cta}
                                                        <span className="text-[14px] leading-none">+</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-medium text-black mb-1 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                                            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.1em]">{item.category}</p>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                            className="w-full bg-white/95 backdrop-blur-xl overflow-hidden md:hidden border-t border-gray-100"
                        >
                            <div className="flex flex-col p-8 space-y-6">
                                {siteData.nav.links.map((link, idx) => (
                                    <motion.a
                                        key={link.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * idx, duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-display font-medium text-black hover:text-primary transition-colors flex items-center justify-between"
                                    >
                                        {link.label}
                                        <span className="material-symbols-outlined text-gray-300 text-sm">arrow_forward</span>
                                    </motion.a>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                                    className="pt-6"
                                >
                                    <a
                                        href={siteData.nav.cta.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-full bg-primary text-white py-4 rounded-sm font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                                    >
                                        {siteData.nav.cta.label}
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </motion.div>
    );
}
