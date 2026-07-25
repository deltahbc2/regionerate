"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Objeto3d = dynamic(() => import("./3d"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center rounded-3xl border border-[#dbe8e1] bg-[#f4f8f5]">
      <div className="h-16 w-16 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin" />
    </div>
  ),
});

const scheduleIdle = (callback: () => void) => {
  globalThis.setTimeout(callback, 0);
};

const Hero3dDeferred = () => {
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
        <Objeto3d />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-3xl border border-[#dbe8e1] bg-[#f4f8f5]" />
      )}
    </div>
  );
};

export default Hero3dDeferred;
