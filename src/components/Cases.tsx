import Link from "next/link";
import { siteData } from "@/data/siteData";
import { RevealSimple } from "./Reveal";

export default function Cases() {
    const { projects } = siteData;

    return (
        <section className="py-24 bg-white text-text-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <RevealSimple delay={0.1}>
                            <span className="text-primary font-bold text-sm mb-2 block uppercase tracking-wide">{projects.label}</span>
                        </RevealSimple>
                        <RevealSimple delay={0.2}>
                            <h2 className="font-display text-4xl font-bold">{projects.title}</h2>
                        </RevealSimple>
                        <RevealSimple delay={0.3}>
                            <p className="text-muted-light mt-4 max-w-xl">{projects.description}</p>
                        </RevealSimple>
                    </div>
                    <RevealSimple delay={0.4}>
                        <a className="hidden md:inline-flex bg-primary text-white px-6 py-3 rounded-none text-sm font-semibold hover:bg-primary-hover transition-all" href="#">
                            {projects.cta}
                        </a>
                    </RevealSimple>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.items.map((item, idx) => (
                        <RevealSimple key={idx} delay={0.1 * idx + 0.5}>
                            <Link href={item.href || "/projects"}>
                                <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                                    <img alt={item.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src={item.image} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-8 pt-0">
                                        <div className="w-full bg-primary h-12 flex items-center justify-between px-6 rounded-none text-white font-semibold text-sm hover:bg-primary-hover transition-colors">
                                            View Project <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </RevealSimple>
                    ))}
                </div>
            </div>
        </section>
    );
}
