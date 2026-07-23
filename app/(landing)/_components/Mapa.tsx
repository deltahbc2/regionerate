import MapClient from "@/components/mapClient";

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
                    <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-2">La Solución</div>

                    <h2 className="text-4xl font-extrabold mb-4">Regionerate: El nexo de la reforestación inteligente</h2>
                    <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                    Nuestra plataforma une a ciudadanos entusiastas con viveros
                    locales e instituciones gubernamentales para transformar el
                    concreto en pulmones urbanos.
                    </p>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="shrink-0 w-6 h-6 bg-primary text-on-primary rounded-full flex items-center justify-center mt-1">
                            <span
                                className="material-symbols-outlined text-[16px]"
                                data-icon="check"
                            >
                                check
                            </span>
                            </div>
                            <div>
                            <p className="font-bold text-on-surface">
                                Base de datos de especies nativas
                            </p>
                            <p className="text-on-surface-variant text-sm">
                                Algoritmos que sugieren qué plantar según tu ubicación
                                exacta.
                            </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="shrink-0 w-6 h-6 bg-primary text-on-primary rounded-full flex items-center justify-center mt-1">
                            <span
                                className="material-symbols-outlined text-[16px]"
                                data-icon="check"
                            >
                                check
                            </span>
                            </div>
                            <div>
                            <p className="font-bold text-on-surface">
                                Trazabilidad total
                            </p>
                            <p className="text-on-surface-variant text-sm">
                                Monitorea el crecimiento y salud de cada árbol plantado en
                                tiempo real.
                            </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
 
export default Mapa;