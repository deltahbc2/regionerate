"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLng } from "leaflet";
import L from 'leaflet';
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { getIconoPorFechaPlantacion, getRangoSiembra, getEtiquetaRango, RANGOS_SIEMBRA } from "@/lib/arboles";

const crearIcono = (emoji: string) =>
    L.divIcon({
        className: "emoji-marker",
        html: `<div style="font-size:28px; line-height:1;">${emoji}</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 28],
    });

const iconos = {
    reciente: crearIcono("🌱"),
    medio: crearIcono("🪴"),
    antiguo: crearIcono("🌳"),
};

const formatearFecha = (fechaISO: string) => {
    const fecha = new Date(fechaISO);
    if (Number.isNaN(fecha.getTime())) {
        return "Fecha desconocida";
    }
    return fecha.toLocaleDateString("es-MX", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
};

const Heatmap = () => {
    const position: unknown = [25.5, -100.5];
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    const plantados = useQuery(api.plantas.getArbolesPlantados)

    return (
        <MapContainer
            center={position as LatLng}
            zoom={7}
            className="h-full w-full"
        >
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                // url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                // subdomains="abcd"
            />

            {plantados?.map((plantado) => {
                const rango = getRangoSiembra(plantado.fechaPlantacion);
                const icono = getIconoPorFechaPlantacion(plantado.fechaPlantacion);
                return (
                    <Marker
                        key={plantado._id}
                        position={[plantado.latitud, plantado.longitud]}
                        icon={iconos[rango]}
                    >
                        <Popup>
                            <div style={{ lineHeight: 1.4 }}>
                                <div>
                                    {icono} <strong>{plantado.nombreComun}</strong>
                                </div>
                                <div>Plantado: {formatearFecha(plantado.fechaPlantacion)}</div>
                                <div>{getEtiquetaRango(rango)}</div>
                                {plantado.usuario ? <div>Por: {plantado.usuario}</div> : null}
                            </div>
                        </Popup>
                    </Marker>
                );
            })}

            <div
                className="leaflet-bottom leaflet-right"
                style={{ pointerEvents: "none" }}
            >
                <div
                    className="leaflet-control leaflet-bar bg-white px-3 py-2 text-xs shadow-md"
                    style={{ pointerEvents: "auto", lineHeight: 1.6 }}
                >
                    {RANGOS_SIEMBRA.map((rango) => (
                        <div key={rango.valor} className="flex items-center gap-2">
                            <span>{rango.icono}</span>
                            <span>{rango.descripcion}</span>
                        </div>
                    ))}
                </div>
            </div>
        </MapContainer>
    );
}
 
export default Heatmap;
