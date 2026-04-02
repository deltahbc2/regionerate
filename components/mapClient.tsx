"use client";

import dynamic from "next/dynamic";

const Heatmap = dynamic(()=> import('./heatmap'), {
    ssr: false
})

const MapClient = () => {
    return (
        <Heatmap/>
    );
}
 
export default MapClient;