const Info = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <h2 className="text-[40px] font-bold text-center  md:text-start text-[#ff8300]" 
                    style={{
                        fontFamily: 'Maven Pro'
                    }}>¿Qué puedo encontrar en ésta guía?
                </h2>
            </div>

            <div className="flex flex-col mt-4 text-neutral-700 font-light">
                <h3 className="font-bold text-lg text-black">Características clave de cada especie:</h3>

                <ul className="text-lg">
                    <li className="list-disc ml-4">Altura: Distancia de la base del árbol a la copa.</li>
                    <li className="list-disc ml-4">Diámetro de copa: Distancia de un lado de la copa al otro.</li>
                    <li className="list-disc ml-4">Época de floración: Meses en los que el árbol florece.</li>
                </ul>

                <div className="grid grid-cols-6 md:grid-cols-12 w-full gap-1 max-w-md my-3 font-medium">
                    <div className="border-2 border-black flex justify-center py-2">Ene</div>
                    <div className="border-2 border-black flex justify-center py-2">Feb</div>
                    <div className="border-2 border-black flex justify-center py-2">Mar</div>
                    <div className="border-2 border-black bg-emerald-500 flex justify-center text-white py-2">Abr</div>
                    <div className="border-2 border-black bg-emerald-500 flex justify-center text-white py-2">May</div>
                    <div className="border-2 border-black bg-emerald-500 flex justify-center text-white py-2">Jun</div>
                    <div className="border-2 border-black bg-emerald-500 flex justify-center text-white py-2">Jul</div>
                    <div className="border-2 border-black flex justify-center py-2">Ago</div>
                    <div className="border-2 border-black flex justify-center py-2">Sep</div>
                    <div className="border-2 border-black flex justify-center py-2">Oct</div>
                    <div className="border-2 border-black flex justify-center py-2">Nov</div>
                    <div className="border-2 border-black flex justify-center py-2">Dic</div>
                </div>

                <ul className="text-lg">
                    <li className="list-disc ml-4">Velocidad de crecimiento</li>
                    <li className="list-disc ml-4">Requerimiento hidrico</li>
                    <li className="list-disc ml-4">Polinizadores: Tipos de agentes polinizadores que atrae el árbol</li>
                </ul>

                <div className="flex justify-center md:justify-start flex-row flex-wrap my-2 gap-2">
                    <div className="flex flex-col items-center">
                        <img src="/polinizadores/escarabajos.svg" alt="Escarabajos" className="size-12"/>
                        <p className="mt-2 text-xs font-medium">Escarabajos</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/polinizadores/abejas.svg" alt="Abejas" className="size-12"/>
                        <p className="mt-2 text-xs font-medium">Abejas</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/polinizadores/mariposas.svg" alt="Mariposas" className="size-12"/>
                        <p className="mt-2 text-xs font-medium">Mariposas</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/polinizadores/aves.svg" alt="Aves" className="size-12"/>
                        <p className="mt-2 text-xs font-medium">Aves</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/polinizadores/viento.svg" alt="Viento" className="size-12"/>
                        <p className="mt-2 text-xs font-medium">Viento</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/polinizadores/mamiferos.svg" alt="Mamíferos" className="size-12"/>
                        <p className="mt-2 text-xs font-medium">Mamíferos</p>
                    </div>
                </div>

                <ul className="text-lg">
                    <li className="list-disc ml-4">Tamaño: El promedio de altura y diámetro de copa</li>
                    <li className="list-disc ml-4">Ecorregión: lugar óptimo para que crezca el árbol</li>
                </ul>
            </div>
        </>
    );
}
 
export default Info;