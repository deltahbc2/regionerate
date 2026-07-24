import Link from "next/link";
import { Mail, MapPin, Globe } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="px-6 py-18 border-t border-white/10 bg-[#1C1917] w-full">
            <div className="max-w-300 flex flex-col md:flex-row justify-between gap-8 mx-auto px-2 md:px-12">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-white tracking-tighter mb-4">Regionerate</span>

                    <p className="text-gray-400 max-w-sm mb-6">
                        Un proyecto para impulsar la reforestación inteligente en Nuevo León con una experiencia clara, cercana y enfocada en el impacto.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <div>
                        <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-md text-center md:text-end">Contacto</h4>
                            <div className="flex flex-col items-center md:items-end">
                                <a href="mailto:contacto@deltahbc.com" className="flex items-center gap-2 hover:text-white text-neutral-200 transition-colors">
                                    <span>contacto@deltahbc.com</span>
                                </a>
                            </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-md text-center md:text-end">Nosotros</h4>
                            <div className="flex flex-col items-center md:items-end">
                                <a href="https://deltahbc.com" className="flex items-center gap-2 hover:text-white text-neutral-200 transition-colors">
                                    <span>deltahbc.com</span>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
