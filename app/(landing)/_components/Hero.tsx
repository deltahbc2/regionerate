import Link from "next/link";
import Hero3dDeferred from "./Hero3dDeferred";
import { ArrowRight, Map } from "lucide-react"

const Hero = () => {
    return (
        <section className="w-[90%] max-w-7xl pb-18 md:pb-0 flex flex-col md:flex-row items-center min-h-screen">
            <div className="w-full md:w-1/2 px-4 order-1 md:order-0 mt-4 md:mt-0">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#e1efe7] mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        <span className="text-xs font-medium text-neutral-600 tracking-wide uppercase">DeltaHBC</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#11221c] mb-4 leading-[1.1]"
                        style={{
                            fontFamily: 'Maven Pro'
                        }}>
                        Reforestemos Nuevo León, <br/>
                        <span className="gradient-text">un arbol a la vez.</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-neutral-800 mb-6 leading-relaxed">
                        Únete al movimiento para transformar Nuevo León en un ecosistema próspero. 
                        Descubre especies nativas, sigue el crecimiento y mide el impacto ambiental real.
                    </p>
                    
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <Link href='/Mapa' className="w-auto px-6 py-3 bg-[#28493d] text-white rounded-full font-medium text-md md:text-lg hover:shadow-xl flex items-center justify-center gap-2">
                            <Map/> Explorar mapa
                        </Link>
                        <a className="w-auto px-6 py-3 bg-white text-neutral-800 rounded-full font-medium text-md md:text-lg border border-eco-200 hover:border-eco-400 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                            Conoce cómo funciona <ArrowRight />
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 objeto3d px-4 order-0 md:order-1">
                <Hero3dDeferred/>
            </div>
        </section>
    );
}
 
export default Hero;
