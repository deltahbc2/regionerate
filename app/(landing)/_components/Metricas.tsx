const Metricas = () => {
    return (
        <div className="flex justify-center w-full">
            <section className="w-[90%] max-w-7xl py-24 mx-auto px-4 bg-[#f2f8f5] border-y border-[#e0f0e8]">
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-700/30">
                        <div className="py-6 md:py-0">
                            <p className="text-5xl font-extrabold text-emerald-800 mb-2">45,000+</p>
                            <p className="text-sm font-medium text-emerald-700 uppercase tracking-wide">Arboles plantados</p>
                        </div>
                        <div className="py-6 md:py-0">
                            <p className="text-5xl font-extrabold text-emerald-800 mb-2">12.5k</p>
                            <p className="text-sm font-medium text-emerald-700 uppercase tracking-wide">Ton de CO2 capturadas</p>
                        </div>
                        <div className="py-6 md:py-0">
                            <p className="text-5xl font-extrabold text-emerald-800 mb-2">24</p>
                            <p className="text-sm font-medium text-emerald-700 uppercase tracking-wide">Municipios Activos</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Metricas;