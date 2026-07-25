"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Objeto3d = dynamic(() => import("./3d"), {
  ssr: false,
  loading: () => (
    <div className="flex aspect-square w-full items-center justify-center rounded-3xl border border-[#dbe8e1] bg-[#f4f8f5]">
      <div className="h-16 w-16 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin" />
    </div>
  ),
});

const Hero3dDeferred = () => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    if (!("IntersectionObserver" in window)) {
      const timeout = window.setTimeout(() => setShouldLoad(true), 0);
      return () => window.clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const schedule =
            window.requestIdleCallback ??
            ((cb: IdleRequestCallback) =>
              window.setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 0 }), 700));

          schedule(() => setShouldLoad(true));
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return <div ref={sentinelRef}>{shouldLoad ? <Objeto3d /> : <div className="flex aspect-square w-full items-center justify-center rounded-3xl border border-[#dbe8e1] bg-[#f4f8f5]" />}</div>;
};

export default Hero3dDeferred;
