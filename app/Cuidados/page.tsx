'use client';
import "../globals.css";
import Carrucel from "./_components/carrucel";
import Encuenta from "./_components/encuenta";
import Cuidados from "./_components/cuidados";
import Modales from "./_components/modales";
import { useState, useEffect, useCallback } from 'react';

// ===== TIPOS =====
type Slide = {
  src: string;
  alt: string;
};

type Card = {
  id: string;
  title: string;
  description: string;
  image: string;
  modalContent: ModalContent;
  reverse?: boolean;
};

type ModalContent = {
  title: string;
  image: string;
  body: React.ReactNode;
};

// ===== DATOS =====
const slides: Slide[] = [
  { src: '/cuidados/plantar-arbol.jpg', alt: 'Plantar árbol' },
  { src: '/cuidados/llenar-hoyo.jpg', alt: 'Llenar hoyo' },
  { src: '/cuidados/regar-carrusel.jpg', alt: 'Regar árbol' },
];

const considerationCards: Card[] = [
  {
    id: 'arbol',
    title: 'El árbol',
    description: 'Cada centímetro de este coloso tiene un propósito vital, una misión crítica en una compleja sinfonía de supervivencia. Elevándose hacia el cielo, una intrincada arquitectura se despliega, extensiones estratégicas diseñadas para un propósito singular: posicionar perfectamente incontables paneles verdes. Estas no son simples decoraciones; son verdaderas plantas de energía solar.',
    image: '/cuidados/arbol.jpg',
    modalContent: {
      title: 'El árbol',
      image: '/cuidados/arbol-ventana.jpg',
      body: <p>Contenido detallado del árbol...</p>,
    },
  },
  {
    id: 'herramientas',
    title: 'Herramientas necesarias',
    description: 'Antes de ensuciarnos las manos, debemos reunir a nuestros aliados: un conjunto de instrumentos diseñados no solo para facilitar la tarea física, sino para garantizar la supervivencia del nuevo huésped. Plantar un árbol es un acto de fe en el futuro, pero para que esa fe rinda frutos, la buena voluntad no es suficiente.',
    image: '/cuidados/herramientas.jpg',
    reverse: true,
    modalContent: {
      title: 'Herramientas',
      image: '/cuidados/herramientas-ventana.jpg',
      body: <p>Contenido detallado de herramientas...</p>,
    },
  },
  {
    id: 'pozo',
    title: 'El pozo',
    description: 'La excavación inicial es, quizás, el paso más incomprendido y crítico de todo el proceso de plantación. Un error de cálculo aquí, por pequeño que parezca en centímetros, puede significar la diferencia entre un árbol que lucha por sobrevivir y uno que prospera con vigor. El secreto no está en qué tan profundo puedes llegar, sino en qué tan lejos puedes preparar el terreno.',
    image: '/cuidados/pozo.jpg',
    modalContent: {
      title: 'El pozo',
      image: '/cuidados/pozo-ventana.jpg',
      body: <p>Contenido detallado del pozo...</p>,
    },
  },
  {
    id: 'riego',
    title: 'El riego',
    description: 'Abrir la llave y dejar correr el agua por unos minutos parece la respuesta obvia, pero hidratar un árbol es un acto de precisión, no de volumen improvisado. Un riego superficial es un espejismo que debilita los cimientos invisibles del árbol. No se trata de cuántas veces mojas la tierra, sino de cómo logras que el líquido vital llegue a donde realmente importa.',
    image: '/cuidados/riego.jpg',
    reverse: true,
    modalContent: {
      title: 'El riego',
      image: '/cuidados/regar-ventana.jpg',
      body: <p>Contenido detallado del riego...</p>,
    },
  },
];



// ===== COMPONENTE PRINCIPAL =====
export default function CuidadosPage() {
  // Estado del carrusel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideInterval, setSlideInterval] = useState<NodeJS.Timeout | null>(null);
  
  // Estado de modales
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  // Estado para animaciones al hacer scroll
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

  // ===== CARRUSEL =====
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    resetInterval();
  }, []);

  const startInterval = useCallback(() => {
    const interval = setInterval(nextSlide, 5000);
    setSlideInterval(interval);
    return interval;
  }, [nextSlide]);

  const resetInterval = useCallback(() => {
    if (slideInterval) clearInterval(slideInterval);
    return startInterval();
  }, [slideInterval, startInterval]);

  useEffect(() => {
    const interval = startInterval();
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [startInterval]);

  // Pausar carrusel al pasar el mouse (opcional)
  const handleMouseEnter = () => {
    if (slideInterval) clearInterval(slideInterval);
  };

  const handleMouseLeave = () => {
    startInterval();
  };

  // ===== MODALES =====
  const openModal = (modalId: string) => {
    setActiveModal(modalId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setActiveModal(null);
    document.body.style.overflow = '';
  }, []);

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModal) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [activeModal, closeModal]);

  // ===== ANIMACIONES AL SCROLL =====
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

  // ===== SMOOTH SCROLL PARA NAVEGACIÓN =====
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-[1000] bg-primary text-accent flex items-center justify-between py-3 px-[5%] shadow-[0_2px_15px_rgba(0,0,0,0.2)]">
        <div className="logo-container flex items-center gap-3">
          <img src="/cuidados/logo.png" alt="Logo" className="w-[45px] h-[50px] object-contain rounded-[4px]" />
          <div className="logo-text flex flex-col">
            <strong className="text-[22px] text-accent">Regionerate</strong>
            <span className="text-[14px] text-white/90 -mt-[3px]">| Cuidados</span>
          </div>
        </div>

        <nav className="flex gap-2 items-center">
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, 'inicio')}
            className="text-white no-underline px-5 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 bg-transparent border-2 border-transparent hover:bg-[rgba(255,131,0,0.2)] hover:border-accent hover:-translate-y-0.5"
          >
            Inicio
          </a>
          <a 
            href="#encuenta" 
            onClick={(e) => handleNavClick(e, 'encuenta')}
            className="text-white no-underline px-5 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 bg-transparent border-2 border-transparent hover:bg-[rgba(255,131,0,0.2)] hover:border-accent hover:-translate-y-0.5"
          >
            ¿Qué considerar?
          </a>
          <a 
            href="#cuidados" 
            onClick={(e) => handleNavClick(e, 'cuidados')}
            className="bg-accent text-white font-semibold px-5 py-2.5 rounded-full text-[15px] transition-all duration-300 hover:bg-accentHover hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          >
            Cuidados
          </a>
        </nav>
      </header>

      {/* ===== BANNER CON CARRUSEL ===== */}
      <Carrucel/>

      {/* ===== SECCIÓN ¿QUÉ CONSIDERAR? ===== */}
      <Encuenta/>

      {/* ===== SECCIÓN CUIDADOS ===== */}
      <Cuidados/>

      {/* ===== MODALES ===== */}
      <Modales/>

      {/* ===== FOOTER ===== */}
      <footer className="bg-primary text-white text-center py-6 px-5 text-[14px]" id="contacto">
        <p>© 2026 Regionerate | Cuidados - Todos los derechos reservados</p>
      </footer>
    </>
  );
}