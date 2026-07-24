import { ChartNoAxesCombined, Database, Store } from "lucide-react";

const Funcionalidades = () => {
    return (
        <div className="bg-white flex justify-center w-full">
            <section className="w-[90%] max-w-7xl py-12 md:py-18 mx-auto px-4">
                <div>
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center md:text-start">Funcionalidades clave</h2>
                        <p className="text-neutral-800 text-lg text-center md:text-start">Herramientas diseñadas para hacer que la reforestación sea accesible, medible y gratificante para todos.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-[#f2f8f5] rounded-3xl p-8 border border-neutral-300 col-span-1 lg:col-span-2 row-span-2 flex flex-col justify-between group overflow-hidden relative">
                            <div className="z-10 relative">
                                <span className="inline-block px-3 py-1 bg-white text-emerald-800 rounded-full text-xs font-semibold mb-4">Core Feature</span>
                                <h3 className="text-2xl font-bold mb-3">Mapa interactivo</h3>
                                <p className="text-neutral-800 max-w-md">Visualiza y explora los árboles nativos de cada municipio según su ecorregion.</p>
                            </div>
                            <div className="mt-8 relative h-48 md:h-64 rounded-2xl overflow-hidden border border-neutral-200 shadow-inner">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/Imagenes/Mapa.png" alt="Regionerate Mapa Interactivo" />
                            </div>
                        </div>

                        <div className="rounded-3xl p-8 border border-neutral-300 flex flex-col justify-between group overflow-hidden">
                            <div className="size-12 bg-emerald-700/10 rounded-xl flex items-center justify-center text-emerald-800 mb-2">
                                <Database className="size-7"/>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Base de datos de especies nativas</h3>
                            <p className="text-eco-600 text-sm">Catálogo de flora nativa con requerimientos hídricos, tamaño adulto y otros datos importantes.</p>
                        </div>

                        <div className="rounded-3xl p-8 border border-neutral-300 flex flex-col justify-between group overflow-hidden">
                            <div className="size-12 bg-emerald-700/10 rounded-xl flex items-center justify-center text-emerald-800 mb-2">
                                <Store className="size-7"/>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Integración de viveros</h3>
                            <p className="text-eco-600 text-sm">Directorio de viveros locales para adquirir las especies adecuadas de forma directa.</p>
                        </div>
                        
                        <div className="bg-emerald-900 text-white rounded-3xl p-8 col-span-1 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-eco-800 rounded-full blur-3xl opacity-50"></div>
                            <div className="relative z-10 md:w-1/2">
                                <h3 className="text-2xl font-bold mb-3">Metricas de Impacto</h3>
                                <p className="text-eco-200">Mide el impacto en términos de captura de CO2, biodiversidad y otros indicadores ambientales.</p>
                            </div>
                            <div className="relative z-10 md:w-1/2 w-full">
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <p className="text-xs text-eco-200 uppercase tracking-wider">Total CO2 Capturado</p>
                                            <p className="text-3xl font-bold">1,240 <span className="text-sm font-normal text-emerald-200">Tons</span></p>
                                        </div>
                                        <div className="text-green-200 text-xs font-medium flex items-center gap-1">
                                            *No datos reales*
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 h-20 mt-4">
                                        <div className="w-1/6 bg-emerald-500 rounded-t-sm h-1/4"></div>
                                        <div className="w-1/6 bg-emerald-500 rounded-t-sm h-2/4"></div>
                                        <div className="w-1/6 bg-emerald-500 rounded-t-sm h-1/3"></div>
                                        <div className="w-1/6 bg-emerald-500 rounded-t-sm h-3/4"></div>
                                        <div className="w-1/6 bg-emerald-400 rounded-t-sm h-full"></div>
                                        <div className="w-1/6 bg-white rounded-t-sm h-[85%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Funcionalidades;