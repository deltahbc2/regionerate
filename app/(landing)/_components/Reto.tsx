import { Calculator, EyeOff, Users } from "lucide-react";

const Reto = () => {
    return (
        <div className="bg-white flex justify-center w-full">
            <section className="w-[90%] max-w-7xl py-12 md:py-18 mx-auto px-4">

                <h2 className="text-4xl font-bold text-center mb-4">El desafío de la reforestacion urbana</h2>
                <p className="text-lg md:text-xl text-neutral-800 mb-12 max-w-200 mx-auto text-center">Las iniciativas actuales de plantación de árboles a menudo fracasan debido a la falta de estructura, seguimiento y participación comunitaria.</p>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-3xl transition-transform hover:-translate-y-2 flex flex-col items-center border border-neutral-300">
                        <div className="size-14 rounded-full bg-red-200 text-red-500 flex items-center justify-center mb-6">
                            <EyeOff className="size-6"/>
                        </div>
                        <h3 className="font-bold text-xl mb-4 text-center">Sin visibilidad de especies nativas</h3>
                        <p className="text-center text-neutral-800">No existe un registro centralizado de especies nativas aptas para cada microclima urbano.</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl transition-transform hover:-translate-y-2 flex flex-col items-center border border-neutral-300">
                        <div className="size-14 rounded-full bg-orange-200 text-orange-500 flex items-center justify-center mb-6">
                            <Users className="size-6"/>
                        </div>
                        <h3 className="font-bold text-xl mb-4 text-center">Falta de participación ciudadana</h3>
                        <p className="text-center text-neutral-800">Los ciudadanos quieren ayudar, pero no saben dónde, qué plantar, ni cómo cuidar los árboles durante sus primeros años críticos.</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl transition-transform hover:-translate-y-2 flex flex-col items-center border border-neutral-300">
                        <div className="size-14 rounded-full bg-green-200 text-green-800 flex items-center justify-center mb-6">
                            <Calculator className="size-6"/>
                        </div>
                        <h3 className="font-bold text-xl mb-4 text-center">Impacto no medible</h3>
                        <p className="text-center text-neutral-800">Muchas iniciativas carecen de métricas reales sobre supervivencia de árboles y captura de CO2.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Reto;
