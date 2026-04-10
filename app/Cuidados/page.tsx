// app/Cuidados/page.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import '../globals.css'
import Header from './_components/header';
import Carrucel from './_components/carrucel';
import Encuenta from './_components/encuenta';
import Cuidados from './_components/cuidados';
import Modales from './_components/modales';
import Footer from './_components/footer';
import { careCards } from './data/contenido';

export default function CuidadosPage() {
  // Estado compartido para modales
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Bloquear scroll cuando hay modal abierto
  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeModal]);

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Smooth scroll para navegación
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      <Header onNavClick={handleNavClick} />
      <Carrucel onNavClick={handleNavClick} />
      <Encuenta />
      <Cuidados onOpenModal={setActiveModal} />
      <Modales activeModal={activeModal} onCloseModal={() => setActiveModal(null)} careCards={careCards} />
      <Footer />
    </>
  );
}