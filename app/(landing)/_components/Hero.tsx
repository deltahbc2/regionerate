import Link from "next/link";
import Objeto3d from "./3d";

const Hero = () => {
    return (
        <section className="w-[90%] md:py-12 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 px-4 order-1 md:order-0 mt-4 md:mt-0">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#e1efe7] mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        <span className="text-xs font-medium text-neutral-600 tracking-wide uppercase">DeltaHBC</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#11221c] mb-4 leading-[1.1]"
                        style={{
                            fontFamily: 'Maven Pro'
                        }}>
                        Reforestemos Nuevo León, <br/>
                        <span className="gradient-text">un arbol a la vez.</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-neutral-800 mb-6 leading-relaxed">Únete al movimiento para transformar Nuevo León en un ecosistema próspero. Descubre especies nativas, sigue el crecimiento y mide el impacto ambiental real.</p>
                    
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <Link href='/Mapa' className="w-auto px-6 py-3 bg-[#28493d] text-white rounded-full font-medium text-lg  hover:shadow-xl flex items-center justify-center gap-2">
                            Explorar mapa <i className="text-sm" data-fa-i2svg=""><svg className="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></i>
                        </Link>
                        <a className="w-auto px-6 py-3 bg-white text-neutral-800 rounded-full font-medium text-lg border border-eco-200 hover:border-eco-400 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                            Conoce cómo funciona
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 objeto3d px-4 order-0 md:order-1">
                <Objeto3d/>
            </div>
        </section>
    );
}
 
export default Hero;