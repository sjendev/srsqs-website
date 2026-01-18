import Link from "next/link";
import { siteData } from "@/data/siteData";
import { RevealSimple } from "./Reveal";

export default function Services() {
    const { services } = siteData;

    return (
        <section className="py-24 bg-white text-text-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <RevealSimple delay={0.1}>
                            <span className="text-primary font-bold text-sm mb-4 block uppercase tracking-wide">{services.label}</span>
                        </RevealSimple>
                        <RevealSimple delay={0.2}>
                            <h2 className="font-display text-4xl md:text-5xl font-medium leading-snug mb-8">
                                {services.title}
                            </h2>
                        </RevealSimple>
                        <RevealSimple delay={0.3}>
                            <p className="text-muted-light max-w-md leading-relaxed">{services.description}</p>
                        </RevealSimple>
                    </div>
                    <div className="space-y-6">
                        {services.items.map((service, idx) => (
                            <Link key={service.id} href="/services">
                                <RevealSimple delay={0.1 * idx + 0.4}>
                                    <div className="group border-b border-gray-100 pb-6 mb-6 cursor-pointer hover:border-primary transition-colors">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center gap-4">
                                                <span className="text-gray-300 font-mono text-sm">{service.id}</span>
                                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                                            </div>
                                            <span className="material-symbols-outlined text-gray-400 group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                        </div>
                                        <p className="text-muted-light text-sm pl-9 max-w-md">{service.description}</p>
                                    </div>
                                </RevealSimple>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
