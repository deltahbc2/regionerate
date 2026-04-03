"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import Card from "./_components/card";
import Planta from "./_components/planta";
import Info from "./_components/info";

const MapPage = () => {
    //Referencia al contenedor donde se carga el svg
    const mapContainerRef = useRef<HTMLDivElement>(null)

    //guardar el mapa o el error
    const [map, setMap] = useState<string>("");
    const [loadError, setLoadError] = useState<string | null>(null);
    
    //guardar el municipio seleccionado
    const [selectedMunicipio, setSelectedMunicipio] = useState<string | null>(null)
    //Obtener las ecorregiones para consultar
    const [ecorregion, setEcorregion] = useState<number[] | null>(null);

    //para mostrar la planta seleccionada unicamente
    const [selectedPlanta, setSelectedPlanta] = useState<string | null>(null);

    //query para obtener las plantas segun la region
    const plantas = useQuery(
        api.plantas.getPlantasByEcorregion,
        ecorregion ? { ecorregion } : "skip",
    )
    
    //paginacion de resultados
    const PLANTAS_POR_PAGINA = 4; 
    const [paginaActual, setPaginaActual] = useState(1);
    const totalPlantas = plantas?.length ?? 0;
    const totalPaginas = Math.max(1, Math.ceil(totalPlantas / PLANTAS_POR_PAGINA));
    const indiceInicio = (paginaActual - 1) * PLANTAS_POR_PAGINA;
    const plantasPaginadas = plantas?.slice(indiceInicio, indiceInicio + PLANTAS_POR_PAGINA) ?? [];

    useEffect(()=>{
        //Fetch al svg tipo API
        fetch("/nuevoleon.svg")
            .then((response)=>{
                if(!response.ok){
                    toast.error("No se pudo cargar el mapa")
                    throw new Error("No se pudo cargar el mapa")
                }
                return response.text();
            })
            .then((svgText)=>{
                setMap(svgText);
                setLoadError(null)
            })
            .catch(()=>{
                toast.error("No se pudo cargar el mapa")
                setLoadError("No se pudo cargar el mapa")
            })
    }, []);

    //Manejar la seleccion de municipio
    useEffect(()=>{
        if(!map || !mapContainerRef.current){
            return;
        }

        const municipios = Array.from(
            mapContainerRef.current.querySelectorAll("g[data-region][id]"),
        ) as SVGGElement[];

        municipios.forEach((municipio)=> municipio.removeAttribute("data-selected"));

        if(!selectedMunicipio){
            return;
        }

        const selectedGroup = municipios.find((municipio) => municipio.id === selectedMunicipio);
        selectedGroup?.setAttribute("data-selected", "true");
    }, [map, selectedMunicipio, plantas])

    //Resetear pagina al cambiar de municipio o ecorregion
    useEffect(() => {
        setPaginaActual(1);
    }, [selectedMunicipio, ecorregion]);

    //Cerrar detalle al cambiar el contexto de municipio/ecorregion
    useEffect(() => {
        setSelectedPlanta(null);
    }, [selectedMunicipio, ecorregion]);

    //Asegurar que la pagina actual no exceda el total de paginas
    useEffect(() => {
        if (paginaActual > totalPaginas) {
            setPaginaActual(totalPaginas);
        }
    }, [paginaActual, totalPaginas]);

    //Scroll al top al cambiar de pagina
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [paginaActual, selectedPlanta]);


    const handleMapClick = (event: MouseEvent<HTMLDivElement>)=> {
        event.preventDefault();

        const target = event.target as Element | null;
        if(!target){
            return;
        }
        
        const municipio =
            (target.closest("g[data-region][id]") as SVGGElement | null) ??
            (target.querySelector("g[data-region][id]") as SVGGElement | null);

        if (!municipio?.id) {
            return;
        }

        //elemento temporal para obtener la ecorregion a la que pertenece
        const regionString = municipio.getAttribute("data-region")?.split(",")
        
        //elemento temporal para almacenar el array de ecorregiones
        const regionNumber: number[] = []
        regionString?.forEach(region => {
            const parsed = Number(region.trim());
            if (!Number.isNaN(parsed)) {
                regionNumber.push(parsed)
            }
        });

        //cargar la ecorregion
        setEcorregion(regionNumber.length > 0 ? regionNumber : null)

        if(municipio.id == selectedMunicipio){
            setSelectedMunicipio(null);
            setEcorregion(null);
            return;
        }

        setSelectedMunicipio(municipio.id);
    }
    
    return (
        <main className="w-full md:w-[90%] py-12 px-4 min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center gap-6">
            <div className="w-full md:w-[50%] lg:w-[40%] flex justify-center md:sticky md:top-6 md:self-start">
                {!loadError ? (
                    <div
                        className="nl-map-shell max-h-[80vh] md:max-h-[calc(100vh-3rem)] overflow-scroll"
                        ref={mapContainerRef}
                        dangerouslySetInnerHTML={{ __html: map }}
                        onClick={handleMapClick}
                    />
                ): (
                    <p className="rounded-md border border-green-800 bg-green-50 px-4 py-3 text-green-700">
                        {loadError}
                    </p>
                )}
            </div>


            <div className={`w-full md:w-[50%] ${selectedMunicipio ? 'lg:w-[60%]' : ''} flex flex-col justify-center relative`}>
                {selectedPlanta ? (
                    <>
                        <button
                            type="button"
                            className="absolute top-4 mb-4 w-fit cursor-pointer rounded-md border border-emerald-600 px-3 py-1 text-emerald-700 hover:bg-emerald-50"
                            onClick={() => setSelectedPlanta(null)}
                        >
                            Volver
                        </button>
                        <Planta nombreCientifico={selectedPlanta} />
                    </>
                ) : selectedMunicipio ? (
                    <>
                        <button
                            type="button"
                            className="text-md absolute top-16 md:top-4 mb-4 w-fit cursor-pointer rounded-md border border-emerald-600 px-3 py-1 text-emerald-700 hover:bg-emerald-50"
                            onClick={() => setSelectedMunicipio(null)}
                        >
                            Volver
                        </button>
                        <h2 className="text-[40px] font-bold text-center text-[#ff8300]" 
                            style={{
                                fontFamily: 'Maven Pro'
                            }}>{selectedMunicipio.replaceAll('-', ' ')}
                        </h2>
                        <p className="text-[26px] font-light text-center text-emerald-500"
                            style={{
                                fontFamily: 'Maven Pro'
                            }}>Ecorregión: {ecorregion ? ecorregion.join(", ") : "Sin información"}
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                            {plantasPaginadas.map(({ _id, nombreComun, nombreCientifico, altura, requerimientoHidrico, floracion, categoria, imagen }) => (
                                <div className="flex justify-center my-4" key={_id}>
                                    <Card
                                        nombreComun={nombreComun}
                                        nombreCientifico={nombreCientifico}
                                        altura={altura}
                                        requerimientoHidrico={requerimientoHidrico}
                                        floracion={floracion}
                                        categoria={categoria}
                                        imagen={imagen}
                                        onVerMas={setSelectedPlanta}
                                    />
                                </div>
                            ))}
                        </div>

                        {totalPlantas > 0 ? (
                            <div className="mt-8 mb-12 flex items-center justify-between gap-4">
                                <button
                                    type="button"
                                    className="cursor-pointer rounded-md border border-emerald-600 px-4 py-2 text-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
                                    onClick={() => setPaginaActual((prev) => Math.max(1, prev - 1))}
                                    disabled={paginaActual === 1}
                                >
                                    Anterior
                                </button>
                                <p className="text-sm text-gray-600">
                                    Pagina {paginaActual} de {totalPaginas}
                                </p>
                                <button
                                    type="button"
                                    className="cursor-pointer rounded-md border border-emerald-600 px-4 py-2 text-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
                                    onClick={() => setPaginaActual((prev) => Math.min(totalPaginas, prev + 1))}
                                    disabled={paginaActual === totalPaginas}
                                >
                                    Siguiente
                                </button>
                            </div>
                        ) : null}
                    </>
                ) : (
                    <>
                        <Info />
                    </>
                )}
            </div>
        </main>
    );
}
 
export default MapPage;