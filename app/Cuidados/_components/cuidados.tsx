'use client';

import { useState, useEffect, useCallback } from 'react';
import {careCards} from '../data/contenido';

type CuidadosProps = {
  onOpenModal: (modalId: string) => void;
};

      export default function Cuidados({onOpenModal}: CuidadosProps){
        const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

        // Animación al hacer scroll
        useEffect(() => {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  const id = entry.target.getAttribute('data-card-id');
                  if (id) {
                    setVisibleCards((prev) => new Set(prev).add(id));
                    observer.unobserve(entry.target);
                  }
                }
              });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
          );

          document.querySelectorAll('[data-card-id]').forEach((card) => {
            observer.observe(card);
          });

          return () => observer.disconnect();
        }, []);

      return( 
        <section className="py-[60px] px-[5%] bg-white" id="cuidados">
              <h2 className="text-center text-[2.2rem] text-primary mb-[45px] relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-accent after:rounded-[2px]">
                Cuidados que debes saber
              </h2>
              
              <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[25px] max-w-[1400px] mx-auto">
                {careCards.map((card) => (
                  <div
                    key={card.id}
                    data-card-id={`care-${card.id}`}
                    onClick={() => onOpenModal(card.id)}
                    className={`bg-white rounded-[20px] shadow-[0_8px_25px_rgba(48,90,75,0.1)] cursor-pointer transition-all duration-[350ms] hover:-translate-y-2.5 hover:shadow-card-hover relative group ${
                      visibleCards.has(`care-${card.id}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                  >
                    <div className="relative h-[200px]">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="text-[2.5rem] text-accent animate-pulse">🌿</span>
                      </div>
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="text-primary text-[1.2rem] mb-2">{card.title}</h3>
                      <p className="text-black text-[0.95rem] m-0">{card.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
        </section>
      );  
}