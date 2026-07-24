import Hero from "./_components/Hero";
import Mapa from "./_components/Mapa";
import Reto from "./_components/Reto";
import Proceso from "./_components/Proceso";
import Metricas from "./_components/Metricas";
import Funcionalidades from "./_components/Funcionalidades";
import Publico from "./_components/Publico";
import CTA from "./_components/CTA";

const LandingPage = () => {
    return (
        <>
            <Hero/>
            <Reto/>
            <Mapa/>
            <Proceso/>
            <Funcionalidades/>
            <Metricas/>
            <Publico />
            <CTA />
        </>
    );
}
 
export default LandingPage;