import { siteData } from "@/data/siteData";
import { RevealSimple } from "./Reveal";

export default function Strategy() {
    const { strategy } = siteData;

    return (
        <section className="py-24 bg-gray-50 text-text-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <RevealSimple delay={0.1}>
                        <span className="text-primary font-bold text-sm mb-4 block uppercase tracking-wide">{strategy.label}</span>
                    </RevealSimple>
                    <RevealSimple delay={0.2}>
                        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6">{strategy.title}</h2>
                    </RevealSimple>
                    <RevealSimple delay={0.3}>
                        <p className="text-muted-light max-w-2xl mx-auto leading-relaxed">{strategy.description}</p>
                    </RevealSimple>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {strategy.items.map((item, idx) => (
                        <RevealSimple key={idx} delay={0.1 * idx + 0.4}>
                            <div
                                className={`bg-white p-8 group transition-all duration-300 hover:shadow-lg flex flex-col h-full border border-gray-100 ${item.wide ? "lg:col-span-2" : ""
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="font-display text-2xl font-bold text-gray-900">{item.title}</h3>
                                    <div className="text-primary p-1 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-3xl text-primary">{item.icon}</span>
                                    </div>
                                </div>
                                <p className={`text-muted-light leading-relaxed text-sm ${item.wide ? "max-w-lg" : ""}`}>{item.description}</p>
                            </div>
                        </RevealSimple>
                    ))}
                </div>
            </div>
        </section>
    );
}
