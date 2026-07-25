"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const MapClient = dynamic(() => import("@/components/mapClient"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[24rem] w-full items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50">
      <div className="h-12 w-12 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin" />
    </div>
  ),
});

const scheduleIdle = (callback: () => void) => {
  globalThis.setTimeout(callback, 0);
};

const MapDeferred = () => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    if (!("IntersectionObserver" in window)) {
      const timeout = globalThis.setTimeout(() => setShouldLoad(true), 0);
      return () => globalThis.clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scheduleIdle(() => setShouldLoad(true));
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sentinelRef} className="h-full min-h-[24rem] w-full">
      {shouldLoad ? (
        <MapClient />
      ) : (
        <div className="flex h-full min-h-[24rem] w-full items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 text-sm text-neutral-500">
          Cargando mapa...
        </div>
      )}
    </div>
  );
};

export default MapDeferred;
