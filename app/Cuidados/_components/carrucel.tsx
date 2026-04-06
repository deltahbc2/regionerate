const Carrucel = () => {
    return( 
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
    );
}

