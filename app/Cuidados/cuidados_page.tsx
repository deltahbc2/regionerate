'use client';

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
  { src: '/imag/plantar-arbol.jpg', alt: 'Plantar árbol' },
  { src: '/imag/llenar-hoyo.jpg', alt: 'Llenar hoyo' },
  { src: '/imag/regar-carrusel.jpg', alt: 'Regar árbol' },
];

const considerationCards: Card[] = [
  {
    id: 'arbol',
    title: 'El árbol',
    description: 'Cada centímetro de este coloso tiene un propósito vital, una misión crítica en una compleja sinfonía de supervivencia. Elevándose hacia el cielo, una intrincada arquitectura se despliega, extensiones estratégicas diseñadas para un propósito singular: posicionar perfectamente incontables paneles verdes. Estas no son simples decoraciones; son verdaderas plantas de energía solar.',
    image: '/imag/arbol.jpg',
    modalContent: {
      title: 'El árbol',
      image: '/imag/arbol-ventana.jpg',
      body: <p>Contenido detallado del árbol...</p>,
    },
  },
  {
    id: 'herramientas',
    title: 'Herramientas necesarias',
    description: 'Antes de ensuciarnos las manos, debemos reunir a nuestros aliados: un conjunto de instrumentos diseñados no solo para facilitar la tarea física, sino para garantizar la supervivencia del nuevo huésped. Plantar un árbol es un acto de fe en el futuro, pero para que esa fe rinda frutos, la buena voluntad no es suficiente.',
    image: '/imag/herramientas.jpg',
    reverse: true,
    modalContent: {
      title: 'Herramientas',
      image: '/imag/herramientas-ventana.jpg',
      body: <p>Contenido detallado de herramientas...</p>,
    },
  },
  {
    id: 'pozo',
    title: 'El pozo',
    description: 'La excavación inicial es, quizás, el paso más incomprendido y crítico de todo el proceso de plantación. Un error de cálculo aquí, por pequeño que parezca en centímetros, puede significar la diferencia entre un árbol que lucha por sobrevivir y uno que prospera con vigor. El secreto no está en qué tan profundo puedes llegar, sino en qué tan lejos puedes preparar el terreno.',
    image: '/imag/pozo.jpg',
    modalContent: {
      title: 'El pozo',
      image: '/imag/pozo-ventana.jpg',
      body: <p>Contenido detallado del pozo...</p>,
    },
  },
  {
    id: 'riego',
    title: 'El riego',
    description: 'Abrir la llave y dejar correr el agua por unos minutos parece la respuesta obvia, pero hidratar un árbol es un acto de precisión, no de volumen improvisado. Un riego superficial es un espejismo que debilita los cimientos invisibles del árbol. No se trata de cuántas veces mojas la tierra, sino de cómo logras que el líquido vital llegue a donde realmente importa.',
    image: '/imag/riego.jpg',
    reverse: true,
    modalContent: {
      title: 'El riego',
      image: '/imag/regar-ventana.jpg',
      body: <p>Contenido detallado del riego...</p>,
    },
  },
];

const careCards: Array<{
  id: string;
  title: string;
  subtitle: string;
  image: string;
  modal: ModalContent;
}> = [
  {
    id: 'partes',
    title: 'Partes de un árbol',
    subtitle: 'Conoce cada sección',
    image: '/imag/partes-arbol.jpg',
    modal: {
      title: 'Partes de un árbol',
      image: '/imag/partes-arbol-ventana.jpg',
      body: (
        <>
          <p><strong>Raíces:</strong> Son la parte subterránea del árbol que cumplen la función de anclarlo al suelo y absorber agua y nutrientes.</p>
          <p><strong>Tronco:</strong> Es la parte leñosa principal que sostiene al árbol.</p>
          <p><strong>Cuello:</strong> Corresponde a la parte inferior del tronco, en el punto de contacto con las raíces.</p>
          <p><strong>Ramas:</strong> Se trata de una estructura de madera conectada al tronco central.</p>
          <p><strong>Hojas:</strong> Realizan la fotosíntesis, convirtiendo luz en energía vital.</p>
          <p><strong>Copa:</strong> Es la parte superior del árbol que incluye las ramas y hojas.</p>
        </>
      ),
    },
  },
  {
    id: 'herramientas',
    title: 'Herramientas y materiales',
    subtitle: 'Lo que necesitas',
    image: '/imag/herramientas-materiales.png',
    modal: {
      title: 'Herramientas y materiales',
      image: '/imag/herramientas-ventana.jpg',
      body: (
        <>
          <p><strong>° Árbol nativo</strong></p>
          <p><strong>° Tijeras o navaja</strong></p>
          <p><strong>° Palas y picos</strong></p>
          <p><strong>° Acolchonado</strong></p>
          <p><strong>¿Qué es el cepellón?</strong> Conjunto de raíces del árbol que está adherido a una porción de tierra o sustrato.</p>
          <p><strong>¿Qué es el acolchonado?</strong> Capa de material reciclado (astillas de madera, hojas secas, etc) que se coloca sobre la superficie del suelo para protegerlo y mejorarlo.</p>
          <p><strong>¿Qué es la composta?</strong> Es un abono natural de alta calidad que se obtiene de la descomposición de residuos orgánicos.</p>
        </>
      ),
    },
  },
  {
    id: 'pozo',
    title: '¿Qué tan grande el pozo?',
    subtitle: 'Medidas ideales',
    image: '/imag/pozo-grande.jpg',
    modal: {
      title: '¿Qué tan grande debe ser la cepa o pozo?',
      image: '/imag/pozo-ventana.jpg',
      body: <img src="/imag/tabla.png" alt="Tabla de medidas" className="w-full max-w-[500px] h-auto" />,
    },
  },
  {
    id: 'riego',
    title: '¿Cómo regar tu árbol?',
    subtitle: 'Técnicas efectivas',
    image: '/imag/regar.jpg',
    modal: {
      title: '¿Cómo debes regar tu árbol?',
      image: '/imag/regar-ventana.jpg',
      body: (
        <>
          <p>Al plantar tu árbol, deja un <strong>encarcador de 10 cm de profundidad</strong> alrededor del tronco para que el <strong>agua se acumule</strong> y el árbol se mantenga <strong>hidratado</strong>.</p>
          <p>Durante los <strong>primeros 3 años</strong> de vida, es importante asegurarse de proporcionar el <strong>riego adecuado</strong>.</p>
          <p><strong>60 L (3 garrafones)</strong> por árbol, <strong>una vez por semana</strong>.</p>
          <p><strong>° Amanecer (6-9 a.m.)</strong></p>
          <p><strong>° Atardecer (6-8 p.m.)</strong></p>
          <p><strong>° Evitar regar el pasto</strong></p>
          <p><strong>° Regar el arbolado</strong></p>
          <p><strong>¿Qué debo hacer en época de sequía?</strong> Es fundamental cuidar el agua. Para asegurar que podamos seguir disfrutando de los beneficios del arbolado urbano, sólo se permite el riego de árboles.</p>
        </>
      ),
    },
  },
  {
    id: 'cuidar',
    title: '¿Cómo cuidar tu árbol?',
    subtitle: 'Mantenimiento esencial',
    image: '/imag/cuidar.jpg',
    modal: {
      title: '¿Cómo cuidar tu árbol?',
      image: '/imag/cuidados-ventana.jpg',
      body: (
        <>
          <p><strong>Acolchonado:</strong> Capa de material vegetal reciclado (astillas de madera, hojas secas, corteza, etc) que se coloca sobre la superficie del suelo para protegerlo del sol y la erosión para mejorarlo.</p>
          <p><strong>Cuello del árbol:</strong> Mantener esta zona en buen estado es vital para asegurar un crecimiento saludable y prevenir enfermedades. Los principales daños son a causa de las desbrozadoras; para protegerlo utiliza un collarín de PVC abierto de la mitad.</p>
          <p><strong>Encharcador:</strong> Es una técnica utilizada para concentrar agua en la base de un árbol, formando un pequeño charco alrededor del tronco. Esto permite que el agua se infiltre lentamente en el suelo.</p>
        </>
      ),
    },
  },
  {
    id: 'pasos',
    title: 'Plantar en 8 pasos',
    subtitle: 'Guía paso a paso',
    image: '/imag/plantar-pasos.jpg',
    modal: {
      title: 'Plantar tu árbol en 8 pasos',
      image: '/imag/pasos.jpg',
      body: (
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Excave un pozo:</strong> De 40 a 60 cm, más ancho que el cepellón y tan profundo como sus raíces. Separe la tierra superficial.</li>
          <li><strong>Coloque tierra:</strong> Superficialmente al fondo del pozo; si es posible, mézclela con abono orgánico o composta.</li>
          <li><strong>Riegue el pozo:</strong> Un día antes de la plantación. Esto favorece la humedad inicial del suelo.</li>
          <li><strong>Retire la bolsa de plástico:</strong> En la que viene el árbol con una navaja o tijeras.</li>
          <li><strong>Coloque el árbol al centro del pozo.</strong></li>
          <li><strong>Rellene el pozo con tierra:</strong> Compacte suavemente. El cuello debe quedar 10 cm bajo el nivel del suelo para retener agua.</li>
          <li><strong>Opcional:</strong> Aplique una capa de acolchado vegetal de 7 a 10 cm para conservar la humedad del suelo.</li>
          <li><strong>Riegue de inmediato:</strong> Riegue una vez por semana por inundación del encharcador.</li>
        </ol>
      ),
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
          <img src="/imag/logo.png" alt="Logo" className="w-[45px] h-[50px] object-contain rounded-[4px]" />
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
      <section className="relative w-full h-[500px] bg-gradient-to-br from-primary to-primaryLight overflow-hidden" id="inicio">
        <div 
          className="absolute inset-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Slides */}
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
          
          {/* Indicadores */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-[10]">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide 
                    ? 'bg-accent scale-[1.3]' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Contenido del banner */}
        <div className="relative z-5 text-white text-center py-10 px-5 h-full flex flex-col justify-center items-center bg-gradient-to-b from-black/20 to-primary/70">
          <h1 className="text-[2.5rem] mb-6 max-w-[800px] text-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] leading-[1.3]">
            Guía de Implementación y Mantenimiento de Árboles
          </h1>
          <a href="#cuidados" onClick={(e) => handleNavClick(e, 'cuidados')} className="inline-block no-underline">
            <button className="bg-accent text-white border-none rounded-full px-8 py-3 text-[17px] font-bold cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:bg-accentHover hover:-translate-y-0.75 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
              Empezar a Conocer
            </button>
          </a>
        </div>
      </section>

      {/* ===== SECCIÓN ¿QUÉ CONSIDERAR? ===== */}
      <section className="py-[60px] px-[5%] bg-bgCard" id="encuenta">
        <h1 className="text-center text-[2.2rem] text-primary mb-[45px] relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-accent after:rounded-[2px]">
          ¿Qué hay que considerar para el cuidado de un árbol?
        </h1>
        
        <div className="grid gap-[30px] max-w-[1200px] mx-auto">
          {considerationCards.map((card, index) => (
            <article
              key={card.id}
              data-card-id={card.id}
              className={`flex bg-white rounded-[20px] overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover ${
                visibleCards.has(card.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              } ${card.reverse ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex-1 min-h-[280px] relative overflow-hidden group">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <div className="flex-[1.2] p-[30px] flex flex-col justify-center">
                <h2 className="text-primary mb-4 text-[1.5rem]">{card.title}</h2>
                <p className="text-black mb-2.5">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== SECCIÓN CUIDADOS ===== */}
      <section className="py-[60px] px-[5%] bg-white" id="cuidados">
        <h2 className="text-center text-[2.2rem] text-primary mb-[45px] relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-accent after:rounded-[2px]">
          Cuidados que debes saber
        </h2>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[25px] max-w-[1400px] mx-auto">
          {careCards.map((card) => (
            <div
              key={card.id}
              data-card-id={`care-${card.id}`}
              onClick={() => openModal(card.id)}
              className={`bg-white rounded-[20px] overflow-hidden shadow-[0_8px_25px_rgba(48,90,75,0.1)] cursor-pointer transition-all duration-[350ms] hover:-translate-y-2.5 hover:shadow-card-hover relative group ${
                visibleCards.has(`care-${card.id}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <div className="relative h-[200px] overflow-hidden">
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

      {/* ===== MODALES ===== */}
      {activeModal && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-[8px] z-[1999]"
            onClick={closeModal}
          />
          
          {/* Contenido del modal */}
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-5">
            <div className="bg-white rounded-[25px] p-[30px] max-w-[750px] w-full max-h-[90vh] overflow-y-auto relative animate-[modal-slide_0.4s_ease] shadow-modal">
              {/* Botón cerrar */}
              <button 
                onClick={closeModal}
                className="absolute top-[15px] right-5 text-[32px] text-black cursor-pointer transition-colors duration-200 hover:text-accent leading-none"
                aria-label="Cerrar modal"
              >
                &times;
              </button>
              
              {/* Contenido dinámico según el modal activo */}
              {(() => {
                const modal = careCards.find(c => c.id === activeModal)?.modal;
                if (!modal) return null;
                
                return (
                  <>
                    <h3 className="text-primary mb-5 text-[1.6rem] text-center">{modal.title}</h3>
                    <img 
                      src={modal.image} 
                      alt={modal.title} 
                      className="w-full h-[320px] object-cover rounded-[15px] mb-5 shadow-[0_8px_20px_rgba(0,0,0,0.15)]" 
                    />
                    <div className="text-black leading-[1.7] space-y-3">
                      {modal.body}
                    </div>
                    <button 
                      onClick={closeModal}
                      className="block mx-auto mt-5 bg-primary text-white border-none rounded-full px-7 py-2.5 text-[15px] font-medium cursor-pointer transition-all duration-300 hover:bg-primaryLight hover:-translate-y-0.5"
                    >
                      Cerrar
                    </button>
                  </>
                );
              })()}
            </div>
          </div>
        </>
      )}

      {/* ===== FOOTER ===== */}
      <footer className="bg-primary text-white text-center py-6 px-5 text-[14px]" id="contacto">
        <p>© 2026 Regionerate | Cuidados - Todos los derechos reservados</p>
      </footer>
    </>
  );
}