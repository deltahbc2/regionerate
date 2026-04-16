import MapClient from "@/components/mapClient";

const Mapa = () => {
    return (
        <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-surface-container-high h-100 forest-shadow border border-outline-variant/10">
              <MapClient/>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-headline text-4xl font-extrabold mb-8">
              UrbanEcho: El nexo de la reforestación inteligente
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Nuestra plataforma une a ciudadanos entusiastas con viveros
              locales e instituciones gubernamentales para transformar el
              concreto en pulmones urbanos.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="shrink-0 w-6 h-6 bg-primary text-on-primary rounded-full flex items-center justify-center mt-1">
                  <span
                    className="material-symbols-outlined text-[16px]"
                    data-icon="check"
                  >
                    check
                  </span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">
                    Base de datos de especies nativas
                  </p>
                  <p className="text-on-surface-variant text-sm">
                    Algoritmos que sugieren qué plantar según tu ubicación
                    exacta.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 w-6 h-6 bg-primary text-on-primary rounded-full flex items-center justify-center mt-1">
                  <span
                    className="material-symbols-outlined text-[16px]"
                    data-icon="check"
                  >
                    check
                  </span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">
                    Trazabilidad total
                  </p>
                  <p className="text-on-surface-variant text-sm">
                    Monitorea el crecimiento y salud de cada árbol plantado en
                    tiempo real.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    );
}
 
export default Mapa;