import Objeto3d from "./3d";

const Hero = () => {
    return (
        <div className="w-full md:w-[90%] flex items-center my-8">
            <div className="w-full md:w-1/2">
                <div className="text-center mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-eco-100 mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-eco-500"></span>
                        <span className="text-xs font-medium text-eco-700 tracking-wide uppercase">Reimagining Urban Spaces</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-eco-950 mb-6 leading-[1.1]">
                        Reforest your city, <br/>
                        <span className="gradient-text">one tree at a time.</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-eco-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join the movement to transform concrete jungles into thriving ecosystems. Discover native species, track growth, and measure real environmental impact.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="#solution" className="w-full sm:w-auto px-8 py-4 bg-green-900 text-white rounded-full font-medium text-lg hover:bg-eco-800 transition-all shadow-float hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                            Explorar mapa <i className="text-sm" data-fa-i2svg=""><svg className="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></i>
                        </a>
                        <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-white text-eco-900 rounded-full font-medium text-lg border border-eco-200 hover:border-eco-400 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                            Conoce cómo funciona
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 objeto3d">
                <Objeto3d/>
            </div>
        </div>
    );
}
 
export default Hero;