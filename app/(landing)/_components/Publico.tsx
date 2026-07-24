import { Building, Check, CircleCheck, House, Landmark, Store } from "lucide-react";

const Publico = () => {
    return (
        <section className="w-[90%] max-w-7xl py-12 md:py-18 mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Una plataforma para todos</h2>
            <p className="text-lg md:text-xl text-neutral-800 mb-12 max-w-200 mx-auto text-center">Un ecosistema diseñado para aportar valor a todos los participantes de la reforestación urbana.</p>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-neutral-300">
                    <div className="size-16 bg-neutral-100 rounded-xl flex items-center justify-center text-emerald-800 mb-4">
                        <House className="size-9"/>
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-start">Ciudadanos</h3>
                    <p className="text-neutral-800 text-start">Personas y comunidades que desean mejorar su entorno y combatir el cambio climático.</p>

                    <ul className="space-y-3 mt-6 grow">
                        <li className="text-neutral-800 text-start flex"><CircleCheck className="size-5 shrink-0 mt-1 mr-1 text-emerald-700"/> Aprende sobre flora nativa.</li>
                        <li className="text-neutral-800 text-start flex"><CircleCheck className="size-5 shrink-0 mt-1 mr-1 text-emerald-700"/> Plata con guía paso a paso.</li>
                        <li className="text-neutral-800 text-start flex"><CircleCheck className="size-5 shrink-0 mt-1 mr-1 text-emerald-700"/> Contribute a tu comunidad.</li>
                    </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-neutral-300">
                    <div className="size-16 bg-neutral-100 rounded-xl flex items-center justify-center text-emerald-800 mb-4">
                        <Building className="size-9"/>
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-start">Empresas</h3>
                    <p className="text-neutral-800 text-start">Organizaciones comprometidas con la sostenibilidad que buscan generar un impacto ambiental verificable.</p>

                    <ul className="space-y-3 mt-6 grow">
                        <li className="text-neutral-800 text-start flex"><CircleCheck className="size-5 shrink-0 mt-1 mr-1 text-emerald-700"/> Cumplimiento de metas ESG.</li>
                        <li className="text-neutral-800 text-start flex"><CircleCheck className="size-5 shrink-0 mt-1 mr-1 text-emerald-700"/> Impacto ambiental medible.</li>
                        <li className="text-neutral-800 text-start flex"><CircleCheck className="size-5 shrink-0 mt-1 mr-1 text-emerald-700"/> Voluntariado corporativo.</li>
                    </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-neutral-300">
                    <div className="size-16 bg-neutral-100 rounded-xl flex items-center justify-center text-emerald-800 mb-4">
                        <Landmark className="size-9"/>
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-start">Gobierno</h3>
                    <p className="text-neutral-800 text-start">Instituciones públicas que necesitan gestionar, incentivar y medir la infraestructura verde de la ciudad.</p>

                    <ul className="space-y-3 mt-6 grow">
                        <li className="text-neutral-800 text-start flex"><CircleCheck className="size-5 shrink-0 mt-1 mr-1 text-emerald-700"/> Datos precisos del arbolado.</li>
                        <li className="text-neutral-800 text-start flex"><CircleCheck className="size-5 shrink-0 mt-1 mr-1 text-emerald-700"/> Control de especies plantadas.</li>
                        <li className="text-neutral-800 text-start flex"><CircleCheck className="size-5 shrink-0 mt-1 mr-1 text-emerald-700"/> Escalabilidad de programas.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
 
export default Publico;