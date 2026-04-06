const Modales = () => {
    return( 
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

    );
}