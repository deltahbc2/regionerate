const Metricas = () => {
    return (
        <div className="bg-emerald-800 w-full flex justify-center w-full">
            <section className="w-[90%] max-w-7xl py-24 mx-auto px-4 border-t border-[#e0f0e8]">
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="py-6 md:py-0">
                            <p className="text-5xl font-extrabold text-white mb-2">45,000+</p>
                            <p className="text-sm font-medium text-emerald-200 uppercase tracking-wide">Arboles plantados</p>
                        </div>
                        <div className="py-6 md:py-0">
                            <p className="text-5xl font-extrabold text-white mb-2">12.5k</p>
                            <p className="text-sm font-medium text-emerald-200 uppercase tracking-wide">Ton de CO2 capturadas</p>
                        </div>
                        <div className="py-6 md:py-0">
                            <p className="text-5xl font-extrabold text-white mb-2">24</p>
                            <p className="text-sm font-medium text-emerald-200 uppercase tracking-wide">Municipios Activos</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Metricas;