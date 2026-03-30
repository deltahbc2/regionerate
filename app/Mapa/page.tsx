"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const MapPage = () => {
    const mapContainerRef = useRef<HTMLDivElement>(null)
    const [map, setMap] = useState<string>("");
    const [loadError, setLoadError] = useState<string | null>(null);
    const [selectedMunicipio, setSelectedMunicipio] = useState<string | null>(null)

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

    useEffect(()=>{
        if(!map || !mapContainerRef.current){
            return;
        }

        const municipios = Array.from(
            mapContainerRef.current.querySelectorAll("g[id]"),
        ) as SVGAElement[];

        municipios.forEach((municipio)=> municipio.removeAttribute("data-selected"));

        if(!selectedMunicipio){
            return;
        }

        const selectedGroup = municipios.find((municipio) => municipio.id === selectedMunicipio);
        selectedGroup?.setAttribute("data-selected", "true");
    }, [map, selectedMunicipio])

    const handleMapClick = (event: MouseEvent<HTMLDivElement>)=> {
        const target = event.target as Element | null;
        if(!target){
            return;
        }
        
        const municipio = target.closest("g[id]") as SVGGElement | null;
        console.log(municipio?.id)
        if (!municipio?.id) {
            return;
        }
        if(municipio.id == selectedMunicipio){
            setSelectedMunicipio(null);
            return;
        }

        setSelectedMunicipio(municipio.id);
    }
    
    return (
        <main className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 flex justify-center">
                {!loadError ? (
                    <div
                        className="nl-map-shell max-h-[80vh] overflow-scroll"
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
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-lg font-semibold">Municipio Seleccionado</h2>
                <p className="mt-2 text-gray-700">{selectedMunicipio ?? "Ninguno"}</p>
            </div>
        </main>
    );
}
 
export default MapPage;