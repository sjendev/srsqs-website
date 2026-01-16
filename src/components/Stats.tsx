import { siteData } from "@/data/siteData";
import { RevealSimple } from "./Reveal";

export default function Stats() {
    const { stats } = siteData;

    return (
        <section className="py-24 bg-white text-text-light border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 mb-16 items-end">
                    <div>
                        <RevealSimple delay={0.1}>
                            <span className="text-primary font-bold text-sm mb-4 block uppercase tracking-wide">{stats.label}</span>
                        </RevealSimple>
                        <RevealSimple delay={0.2}>
                            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-4">
                                {stats.title}
                            </h2>
                        </RevealSimple>
                        <RevealSimple delay={0.3}>
                            <p className="text-muted-light max-w-md">{stats.description}</p>
                        </RevealSimple>
                    </div>
                    <div className="flex justify-start lg:justify-end">
                        <RevealSimple delay={0.4}>
                            <button className="text-primary font-semibold hover:text-primary-hover transition-colors flex items-center gap-2">
                                {stats.cta} <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </RevealSimple>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {stats.items.map((item, idx) => (
                        <RevealSimple key={idx} delay={0.1 * idx + 0.5}>
                            <div className="bg-surface-light p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="text-primary font-display text-5xl font-bold mb-4">{item.value}</div>
                                <p className="text-muted-light leading-relaxed">{item.label}</p>
                            </div>
                        </RevealSimple>
                    ))}
                </div>
            </div>
        </section>
    );
}
