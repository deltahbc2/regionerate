import MapClient from "@/components/mapClient";
import Link from "next/link";
import { ArrowRight, Map } from "lucide-react";

const Mapa = () => {
    return (
        <section className="w-[90%] max-w-7xl py-12 md:py-18 mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="h-100 border border-outline-variant/10">
                        <MapClient/>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-2">La solución</div>
                    <h2 className="text-4xl font-extrabold mb-4">
                        Cada marcador es un arbol plantado
                    </h2>

                    <p className="text-lg text-on-surface-variant mb-4 leading-relaxed">
                        Explora los arboles registrados en el mapa. Al dar click en cada
                        marcador puedes ver su informacion, incluyendo especie, ubicacion y
                        fecha de la plantacion.
                    </p>

                    <div className="space-y-4">
                        <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
                            <p className="font-bold text-on-surface mb-3">Los iconos indican hace cuanto se planto cada arbol:</p>

                            <ul className="space-y-3 text-sm text-on-surface-variant">
                                <li className="flex items-start gap-3">
                                    <span className="text-base leading-none">🌱</span>
                                    <span><strong className="text-on-surface">Reciente:</strong> de 0 a 3 meses.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-base leading-none">🪴</span>
                                    <span><strong className="text-on-surface">Mas tiempo:</strong> de 4 a 12 meses.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-base leading-none">🌳</span>
                                    <span><strong className="text-on-surface">Mas tiempo:</strong> 1 año o mas.</span>
                                </li>
                            </ul>
                        </div>

                        <Link href="/Mapa" className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#28493d] px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg">
                            <Map className="size-4" />Ir al mapa <ArrowRight className="size-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mapa;