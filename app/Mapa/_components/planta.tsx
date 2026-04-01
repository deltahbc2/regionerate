import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const Planta = ({
    nombreCientifico
}: {
    nombreCientifico: string;
}) => {
    const planta = useQuery(
        api.plantas.getPlantaByNombreCientifico,
        { nombreCientifico }
    );

    const mesesArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    if(planta === undefined){
        return(
            <div className="animate-pulse flex flex-col items-center">
                <div className="w-1/2 h-10 bg-gray-300 rounded mb-4"></div>
                <div className="w-1/3 h-6 bg-gray-300 rounded mb-8"></div>
                <div className="w-full h-64 bg-gray-300 rounded mb-6"></div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 w-full">
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-6 bg-gray-300 rounded mb-2"></div>
                        <div className="w-16 h-6 bg-gray-300 rounded"></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-6 bg-gray-300 rounded mb-2"></div>
                        <div className="w-16 h-6 bg-gray-300 rounded"></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-6 bg-gray-300 rounded mb-2"></div>
                        <div className="w-16 h-6 bg-gray-300 rounded"></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-6 bg-gray-300 rounded mb-2"></div>
                        <div className="w-16 h-6 bg-gray-300 rounded"></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-6 bg-gray-300 rounded mb-2"></div>
                        <div className="w-16 h-6 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        )
    }

    if(planta === null){
        return(
            <div className="rounded-md border border-red-800 bg-red-50 px-4 py-3 text-red-700">
                No se encontró información para esta planta.
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <h2 className="text-[40px] font-bold text-center text-[#ff8300]" 
                    style={{
                        fontFamily: 'Maven Pro'
                    }}>{planta.nombreComun}
                </h2>
                <i className="text-[26px] font-light text-center text-emerald-500"
                    style={{
                        fontFamily: 'Maven Pro'
                    }}>( {planta.nombreCientifico} )
                </i>
            </div>

            <img src={`/Cards/${planta.imagen}`} alt={planta.nombreComun} className="h-100 object-contain"/>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4"style={{
                fontFamily: 'Maven Pro'
            }}>
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium text-center text-black">Altura:</h3>
                    <p className="text-xl text-center text-white p-1 bg-[#ff8300] font-semibold">{planta.altura}</p>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium text-center text-black">Diametro de copa:</h3>
                    <p className="text-xl text-center text-white p-1 bg-[#ff8300] font-semibold">{planta.diametroDeCopa}</p>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium text-center text-black">Tamaño:</h3>
                    <p className="text-xl text-center text-white p-1 bg-[#ff8300] font-semibold">{planta.tamano}</p>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium text-center text-black">Velocidad de crecimiento:</h3>
                    <p className="text-xl text-center text-white p-1 bg-[#ff8300] font-semibold">{planta.velocidadDeCrecimiento}</p>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium text-center text-black">Requerimiento hídrico:</h3>
                    <p className="text-xl text-center text-white p-1 bg-[#ff8300] font-semibold">{planta.requerimientoHidrico}</p>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium text-center text-black">Ecorregión:</h3>
                    <p className="text-xl text-center text-white p-1 bg-[#ff8300] font-semibold">{planta.ecorregion.join(", ")}</p>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium text-center text-black">Floracion:</h3>
                    <div className="grid grid-cols-12 w-full gap-1">
                        {mesesArray.map((mes, index) => (

                            <div key={index} className={`border-2 border-black h-6 ${planta.floracion.split(",").some(rango => {
                                const [inicio, fin] = rango.split("-").map(Number);
                                return index + 1 >= inicio && index + 1 <= fin;
                            }) ? "bg-emerald-500" : ""} flex justify-center items-center`}>
                            </div>
                        ))}
                    </div>
                    <p>{
                        
                    }</p>
                    <p className="text-md text-center">{
                        planta.floracion.split(",").length === 0
                            ? "Sin informacion"
                            : planta.floracion.split(",").length === 1
                                ? planta.floracion.split(',').map(()=>{
                                    const [inicio, fin] = planta.floracion.split("-").map(Number)
                                    return (
                                        `${mesesArray[inicio - 1]}-${mesesArray[fin - 1]}`
                                    )
                                })
                                : planta.floracion.split(",").map(rango => {
                                    const [inicio, fin] = rango.split("-").map(Number);
                                    return `${mesesArray[inicio - 1]}-${mesesArray[fin - 1]}`;
                                }
                            ).join(', ')
                    }</p>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-medium text-center text-black">Sindrome de Polinización:</h3>
                    <div className="flex flex-row mt-2 gap-1">
                        {planta.polinizadores?.map((item, index) => (
                            <img key={index} src={`/${item}.svg`} alt={item} className="size-8"/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Planta;