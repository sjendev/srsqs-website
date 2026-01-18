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
                            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                                <img alt={item.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src={item.image} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <div className="absolute top-6 left-6">
                                    <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded text-xs uppercase tracking-wide border border-white/20">
                                        {item.tag}
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="mb-4">
                                        <div className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-primary rounded-full"></div> {item.title}
                                        </div>
                                    </div>
                                    <h3 className="text-white text-2xl font-bold mb-4">{item.shortDesc}</h3>
                                    <div className="flex gap-2 flex-wrap mb-6">
                                        {item.categories.map((cat) => (
                                            <span key={cat} className="text-xs text-white/70 border border-white/20 px-2 py-1 rounded">
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="w-full bg-primary h-12 flex items-center justify-between px-6 rounded-none text-white font-semibold text-sm hover:bg-primary-hover transition-colors">
                                        See Work <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        </RevealSimple>
                    ))}
                </div>
            </div>
        </section>
    );
}
