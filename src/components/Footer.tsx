import { siteData } from "@/data/siteData";
import { RevealSimple } from "./Reveal";

export default function Footer() {
    const { footer } = siteData;

    return (
        <footer className="bg-background-dark text-text-dark pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <img
                                src={footer.logoLight}
                                alt={footer.logo}
                                className="h-10 w-auto object-contain"
                            />
                        </div>
                        <p className="text-muted-dark text-sm leading-relaxed max-w-xs">
                            Precision cost management for industry leaders. Built on unshakeable integrity and data-driven market insight.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            {footer.navigation.map((link) => (
                                <li key={link.label}>
                                    <a className="text-muted-dark hover:text-primary transition-colors text-sm" href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Headquarters</h4>
                        <address className="not-italic space-y-4">
                            {footer.headquarters.map((line, idx) => (
                                <p key={idx} className="text-muted-dark text-sm">
                                    {line}
                                </p>
                            ))}
                        </address>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Connect</h4>
                        <div className="flex gap-4 mb-8">
                            {footer.social.map((item, idx) => (
                                <a key={idx} className="w-10 h-10 bg-surface-dark border border-gray-800 rounded-full flex items-center justify-center text-muted-dark hover:text-white hover:bg-gray-800 transition-all" href={item.href}>
                                    {item.icon ? (
                                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                    ) : (
                                        <span className="font-bold text-sm">{item.text}</span>
                                    )}
                                </a>
                            ))}
                        </div>
                        <p className="text-xs text-muted-dark font-medium">{footer.support}</p>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between gap-4 items-center">
                    <p className="text-xs text-muted-dark">{footer.copyright}</p>
                    <div className="flex gap-6">
                        {footer.legal.map((link) => (
                            <a key={link.label} className="text-xs text-muted-dark hover:text-white transition-colors" href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
