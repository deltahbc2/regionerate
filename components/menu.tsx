import Link from "next/link";
import { BookOpenText, Map } from "lucide-react";

const Menu = () => {
    return (
        <nav className="w-full z-10000 sticky top-0 border-b border-[#dbe8e1]/80 bg-[rgba(242,248,245,0.92)] backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between gap-4">
                    <Link href="/" className="flex items-center gap-3">
                        <img src="/Imagenes/Logo.png" alt="Nuevo Leon" className="h-11 w-11" />
                        
                        <div className="leading-tight">
                            <p className="text-lg font-bold tracking-tight text-[#11221c]" style={{ fontFamily: 'Maven Pro' }}>Regionerate</p>
                            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Nuevo Leon</p>
                        </div>
                    </Link>

                    <div className="flex items-center gap-3 sm:gap-4">
                        <Link href="/Mapa" className="inline-flex items-center gap-2 rounded-full border border-[#dbe8e1] bg-white px-4 py-2 text-sm font-medium text-[#244338] transition-all hover:border-[#9fc2b2] hover:shadow-sm">
                            <Map className="size-4" />
                            <span className="hidden sm:inline">Ir al mapa</span>
                            <span className="sm:hidden">Mapa</span>
                        </Link>

                        <Link href="/GuiaPlantacion.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#28493d] px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-md">
                            <BookOpenText className="size-4" />
                            <span className="hidden sm:inline">Guia de Plantacion</span>
                            <span className="sm:hidden">Guia</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Menu;