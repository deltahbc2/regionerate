"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLng } from "leaflet";
import L from 'leaflet';
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Heatmap = () => {
    const emojiIcon = L.divIcon({
        className: "emoji-marker",
        html: '<div style="font-size:28px; line-height:1;">🌳</div>',
        iconSize: [28, 28],
        iconAnchor: [14, 28],
    });

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

            {plantados?.map((plantado) => (
                <Marker key={plantado._id} position={[plantado.latitud, plantado.longitud]} icon={emojiIcon} >
                    <Popup>🌳 {plantado.nombreComun}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
 
export default Heatmap;