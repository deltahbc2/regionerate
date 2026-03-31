import { Droplets, Leaf, Ruler } from "lucide-react";

const Card = ({
    nombreComun, nombreCientifico, altura, requerimientoHidrico, floracion, categoria
}: {
    nombreComun: string;
    nombreCientifico: string;
    altura: string;
    requerimientoHidrico: string;
    floracion: string;
    categoria: string [];
}) => {
    const floracionArray = floracion.split(",").map(rango => rango.trim().split("-").map(mes => mes.trim()));

    const mesesArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    return (
        <div className="relative max-w-[90%] md:max-w-full inline-flex">
            <div className="absolute -inset-3 bg-linear-to-tr from-emerald-200 to-emerald-50 rounded-4xl transform rotate-1 opacity-50"></div>

            <div className="relative bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden">
                <div className="bg-stone-50 border-b border-stone-100 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="bg-white px-4 py-1 rounded-md shadow-sm text-xs font-medium text-stone-500 border border-stone-100">
                        echonl.com
                    </div>
                    <div className="w-16"></div>
                </div>

                <div className="p-6 bg-stone-50/50">
                    <div className="w-full bg-emerald-100/50 rounded-2xl mb-6 border border-emerald-100">
                        <div className="flex justify-center"
                            style={{
                                backgroundImage:
                                    'radial-gradient(#059669 2px, transparent 2px)',
                                backgroundSize: '20px 20px',
                            }}
                        >
                            <img src="/card-image.png" alt="Imagen" className="w-50"/>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h5 className="font-bold text-stone-900 text-lg">
                                    {nombreComun}
                                </h5>
                                <p className="text-sm text-stone-500 italic">
                                    {nombreCientifico}
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                {categoria.map((cat, index) => (
                                    <span key={index} className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full block">
                                        {cat.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-stone-50 p-3 rounded-xl flex flex-col items-center justify-center text-center">
                                <Ruler className="w-5 h-5 text-stone-400 mb-1" />
                                <span className="text-xs font-medium text-stone-600">
                                    {altura}
                                </span>
                            </div>
                            <div className="bg-stone-50 p-3 rounded-xl flex flex-col items-center justify-center text-center">
                                <Droplets className="w-5 h-5 text-blue-400 mb-1" />
                                <span className="text-xs font-medium text-stone-600">
                                    {requerimientoHidrico}
                                </span>
                            </div>
                            <div className="bg-stone-50 p-3 rounded-xl flex flex-col items-center justify-center text-center">
                                <Leaf className="w-5 h-5 text-emerald-500 mb-1" />
                                <span className="text-xs font-medium text-stone-600">
                                    {floracionArray.length === 0 ? "Sin información" : floracionArray.length > 1 ? "Meses dispersos" : `${mesesArray[Number(floracionArray[0][0]) - 1]} - ${mesesArray[Number(floracionArray[0][1]) - 1]}`}
                                </span>
                            </div>
                            <div className="col-span-3 mt-4">
                                <button className="w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600 transition-colors duration-300">
                                    Ver más
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Card;