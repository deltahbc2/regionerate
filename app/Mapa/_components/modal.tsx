"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";

type ModalProps = {
    isOpen: boolean;
    nombre: string;
    id: Id<"plantas">;
    onConfirm: () => void;
    onCancel: () => void;
};

const Modal = ({
    isOpen,
    nombre,
    id,
    onConfirm,
    onCancel,
}: ModalProps) => {
    const plantar = useMutation(api.plantas.createArbolPlantado);

    const [manual, setManual] = useState(false);
    const [coords, setCoords] = useState<{lat: string, long: string } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState<string>("");
    const [calle, setCalle] = useState<string>("");
    const [colonia, setColonia] = useState<string>("");
    const [municipio, setMunicipio] = useState<string>("");


    const getLocation = () => {
        setManual(false);
        
        if (!navigator.geolocation) {
            setError('Geolocation no soportada.');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoords({
                    lat: position.coords.latitude.toString(),
                    long: position.coords.longitude.toString(),
                });
            },
            (err) => {
                setError("Ubicacion no permitida. Por favor, habilita la ubicacion en tu navegador.");
            }
        );
    };

    const handleConfirmar = async () => {
        setLoading(true);

        try {
            let nextCoords = coords;

            if (manual) {
                if (!name || !calle || !colonia || !municipio) {
                    setError("Por favor, completa todos los campos.");
                    return;
                }

                const response = await fetch(
                    `/api/geocode?address=${encodeURIComponent(
                        `${calle}, ${colonia}, ${municipio}`
                    )}`
                );

                const data = await response.json();

                if (!Array.isArray(data) || data.length === 0) {
                    setError("No se encontraron coordenadas para esa dirección.");
                    return;
                }

                nextCoords = {
                    lat: data[0].lat,
                    long: data[0].lon,
                };
                setCoords(nextCoords);
            } else {
                if (!name || !coords) {
                    setError("Por favor, completa todos los campos.");
                    return;
                }
            }

            if (!nextCoords) {
                setError("No se pudieron obtener coordenadas válidas.");
                return;
            }

            const promise = plantar({
                idPlanta: id,
                nombre: name,
                long: nextCoords.long,
                lat: nextCoords.lat,
            });

            toast.promise(promise, {
                loading: "Plantando...",
                success: "Planta plantada exitosamente!",
                error: "Error al plantar la planta."
            });

            onConfirm();
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
                <h3 className="text-2xl font-bold text-[#ff8300]" style={{ fontFamily: 'Maven Pro' }}>Plantar {nombre}</h3>

                <input 
                    type="text"
                    placeholder="Escribe tu nombre"
                    className="w-full mt-4 p-2 border border-neutral-500 focus:border-neutral-700 outline-none rounded-lg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                {manual && (
                    <div className="grid grid-cols-2 gap-2 mt-4">
                        <input 
                            type="text"
                            placeholder="Calle y Numero"
                            className="w-full mb-2 p-2 border border-neutral-500 focus:border-neutral-700 outline-none rounded-lg"
                            value={calle}
                            onChange={(e) => setCalle(e.target.value)}
                        />
                        <input 
                            type="text"
                            placeholder="Colonia"
                            className="w-full mb-2 p-2 border border-neutral-500 focus:border-neutral-700 outline-none rounded-lg"
                            value={colonia}
                            onChange={(e) => setColonia(e.target.value)}
                        />
                        <input 
                            type="text"
                            placeholder="Municipio"
                            className="w-full mb-2 p-2 col-span-2 border border-neutral-500 focus:border-neutral-700 outline-none rounded-lg"
                            value={municipio}
                            onChange={(e) => setMunicipio(e.target.value)}
                        />
                    </div>
                )}
                <div className="flex flex-row gap-2 mt-4">
                    <button onClick={getLocation} className="text-sm rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white transition hover:bg-emerald-700 cursor-pointer">
                        {error ? "Reintentar" : "Usar ubicacion actual"}
                    </button>
                    <button onClick={()=>setManual(true)} className="text-sm rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white transition hover:bg-emerald-700 cursor-pointer">Escribir manualmente</button>
                </div>

                {error ? (
                    <p className="mt-3 text-sm text-red-500">{error}</p>
                ): coords === null ? null : (
                    <p className="mt-3 text-sm text-gray-700">Latitude: {coords?.lat}, Longitude: {coords?.long}</p>
                )}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                    <button
                        type="button"
                        onClick={()=>{
                            setCoords(null);
                            setLoading(false);
                            setError(null);
                            onCancel()
                        }}
                        className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100 cursor-pointer"
                    >
                        Cancelar
                    </button>
                    <button
                        type="button"
                        onClick={handleConfirmar}
                        className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white transition hover:bg-emerald-700 cursor-pointer disabled:bg-neutral-400 disabled:cursor-not-allowed"
                        disabled={!name || (manual && (!calle || !colonia || !municipio))}
                    >
                        {loading ? "Cargando..." : "Confirmar"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;