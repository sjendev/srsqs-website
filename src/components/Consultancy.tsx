import { siteData } from "@/data/siteData";
import { RevealSimple } from "./Reveal";

export default function Consultancy() {
    const { consultancy } = siteData;

    return (
        <section className="py-24 bg-background-dark text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <RevealSimple delay={0.1}>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-8 max-w-4xl mx-auto tracking-tight">
                            {consultancy.title}
                        </h2>
                    </RevealSimple>
                    <RevealSimple delay={0.2}>
                        <p className="text-gray-500 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
                            {consultancy.description}
                        </p>
                    </RevealSimple>
                </div>

                <RevealSimple delay={0.3}>
                    <div className="relative group cursor-pointer max-w-5xl mx-auto">
                        <div className="aspect-[16/9] rounded-2xl overflow-hidden relative shadow-2xl">
                            <img
                                alt="Cost Management in Construction"
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 brightness-75"
                                src={consultancy.image}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-4xl text-white fill-current">play_arrow</span>
                                </div>
                            </div>

                            {/* Label Overlay */}
                            <div className="absolute bottom-10 left-0 right-0 text-center">
                                <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white drop-shadow-2xl">
                                    {consultancy.label}
                                </h3>
                            </div>
                        </div>
                    </div>
                </RevealSimple>
            </div>
        </section>
    );
}
