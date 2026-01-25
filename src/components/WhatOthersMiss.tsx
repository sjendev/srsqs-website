import { siteData } from "@/data/siteData";
import { RevealSimple } from "./Reveal";

export default function WhatOthersMiss() {
    const { whatOthersMiss } = siteData;

    return (
        <section className="py-24 bg-background-light text-text-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-12 mb-20">
                    <div className="lg:col-span-2">
                        <RevealSimple delay={0.1}>
                            <span className="text-primary font-bold text-sm mb-4 block uppercase tracking-wide">{whatOthersMiss.label}</span>
                        </RevealSimple>
                        <RevealSimple delay={0.2}>
                            <h3 className="font-display text-3xl md:text-4xl font-medium leading-snug">{whatOthersMiss.title}</h3>
                        </RevealSimple>
                    </div>
                    <div className="flex items-end justify-start lg:justify-end">
                        <RevealSimple delay={0.3}>
                            <a className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-none font-semibold transition-all shadow-lg shadow-primary/30" href="#">
                                {whatOthersMiss.cta}
                            </a>
                        </RevealSimple>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {whatOthersMiss.cards.map((card, idx) => (
                        <RevealSimple key={idx} delay={0.1 * idx + 0.4}>
                            <div
                                className={`p-8 rounded-2xl border transition-colors group h-full flex flex-col justify-between ${card.type === "plan"
                                    ? "bg-surface-light border-gray-200 hover:border-primary/50"
                                    : card.type === "procure"
                                        ? "bg-primary border-primary text-white relative overflow-hidden"
                                        : "bg-background-dark text-white border-gray-800 hover:border-gray-600"
                                    }`}
                            >
                                {card.type === "procure" && <div className="absolute inset-0 bg-gradient-to-br from-primary to-orange-700 opacity-50 z-0"></div>}
                                <div className="relative z-10">
                                    <h4 className="font-display text-2xl font-bold mb-4">{card.title}</h4>
                                    <p className={`text-sm leading-relaxed mb-8 ${card.type === "plan" ? "text-muted-light" : card.type === "procure" ? "text-orange-100" : "text-gray-400"}`}>
                                        {card.description}
                                    </p>
                                </div>

                                {card.type === "plan" && (
                                    <div className="relative h-48 rounded-xl overflow-hidden mt-auto bg-gray-100">
                                        <div className="absolute top-4 left-4 right-4 bottom-0 bg-white rounded-t-lg shadow-lg p-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-primary text-sm">calculate</span>
                                                </div>
                                                <div className="h-2 w-20 bg-gray-200 rounded"></div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-1.5 w-full bg-gray-100 rounded"></div>
                                                <div className="h-1.5 w-3/4 bg-gray-100 rounded"></div>
                                                <div className="h-1.5 w-5/6 bg-gray-100 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {card.type === "procure" && (
                                    <div className="relative h-48 flex items-center justify-center z-10">
                                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                            <span className="material-symbols-outlined text-3xl">gavel</span>
                                        </div>
                                        <div className="absolute w-12 h-12 bg-white/5 backdrop-blur-md rounded-lg -right-2 top-10 -rotate-12 flex items-center justify-center border border-white/10">
                                            <span className="material-symbols-outlined text-xl">description</span>
                                        </div>
                                        <div className="absolute w-12 h-12 bg-white/5 backdrop-blur-md rounded-lg left-4 bottom-10 rotate-6 flex items-center justify-center border border-white/10">
                                            <span className="material-symbols-outlined text-xl">handshake</span>
                                        </div>
                                    </div>
                                )}

                                {card.type === "control" && (
                                    <div className="relative h-48 rounded-xl overflow-hidden mt-auto bg-gray-900 border border-gray-800 p-4 flex flex-col gap-3">
                                        <div className="flex justify-between items-center text-xs text-gray-500">
                                            <span>Budget Used</span>
                                            <span className="text-orange-500">45%</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-orange-500 w-[45%]"></div>
                                        </div>
                                        <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
                                            <span>Forecast</span>
                                            <span className="text-green-500">On Track</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-full"></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </RevealSimple>
                    ))}
                </div>
            </div>
        </section>
    );
}
