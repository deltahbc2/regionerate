const CTA = () => {
    return (
        <div className="w-[90%] max-w-5xl mx-auto py-24">
            <div className="bg-linear-to-br from-[#2b6954] to-[#004231] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-balance leading-tight">Comienza a reforestar tu ciudad hoy mismo.</h2>
                    <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">Únete a miles de ciudadanos que ya están transformando su entorno con tecnología y naturaleza.</p>
                    <button className="bg-white text-md text-black font-medium px-10 py-5 rounded-2xl text-lg hover:scale-105 transition-transform active:scale-95">
                        Explorar plataforma
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default CTA;