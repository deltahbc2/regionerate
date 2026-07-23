import { Leaf, Map, PieChart, Shovel } from "lucide-react";

const Proceso = () => {
    return (
        <div className="bg-white flex justify-center w-full">
            <section className="w-[90%] max-w-7xl py-12 md:py-18 mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4">Cómo funciona</h2>
                <p className="text-lg md:text-xl text-neutral-800 mb-12 max-w-200 mx-auto text-center">Cuatro sencillos pasos para marcar la diferencia.</p>

                <div className="relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                        <div className="flex flex-col items-center text-center group">
                            <div className="size-20 bg-white rounded-2xl border-2 border-emerald-100 flex items-center justify-center text-2xl text-emerald-600 group-hover:text-emerald-700 group-hover:border-emerald-500 transition-all mb-6 relative">
                                <div className="absolute -top-2 -right-2 size-6 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                                <Map className="size-10"/>
                            </div>
                            <h3 className="font-bold text-xl mb-2">Explora tu municipio</h3>
                            <p className="text-md text-neutral-700">Identifica tu municipio y sus características.</p>
                        </div>

                        <div className="flex flex-col items-center text-center group">
                            <div className="size-20 bg-white rounded-2xl border-2 border-emerald-100 flex items-center justify-center text-2xl text-emerald-600 group-hover:text-emerald-700 group-hover:border-emerald-500 transition-all mb-6 relative">
                                <div className="absolute -top-2 -right-2 size-6 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                                <Leaf className="size-10"/>
                            </div>
                            <h3 className="font-bold text-xl mb-2">Elige tu especie nativa</h3>
                            <p className="text-md text-neutral-700">Selecciona entre las opciones nativas recomendadas.</p>
                        </div>

                        <div className="flex flex-col items-center text-center group">
                            <div className="size-20 bg-white rounded-2xl border-2 border-emerald-100 flex items-center justify-center text-2xl text-emerald-600 group-hover:text-emerald-700 group-hover:border-emerald-500 transition-all mb-6 relative">
                                <div className="absolute -top-2 -right-2 size-6 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                                <Shovel className="size-10"/>
                            </div>
                            <h3 className="font-bold text-xl mb-2">Planta y Registra</h3>
                            <p className="text-md text-neutral-700">Registra la ubicación exacta de tu árbol.</p>
                        </div>

                        <div className="flex flex-col items-center text-center group">
                            <div className="size-20 bg-white rounded-2xl border-2 border-emerald-100 flex items-center justify-center text-2xl text-emerald-600 group-hover:text-emerald-700 group-hover:border-emerald-500 transition-all mb-6 relative">
                                <div className="absolute -top-2 -right-2 size-6 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                                <PieChart className="size-10"/>
                            </div>
                            <h3 className="font-bold text-xl mb-2">Genera Impacto</h3>
                            <p className="text-md text-neutral-700">Se parte del cambio.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Proceso;