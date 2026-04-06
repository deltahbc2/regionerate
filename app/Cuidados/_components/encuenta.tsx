const Encuenta = () => {
    return( 
            <section className="py-[60px] px-[5%] bg-bgCard" id="encuenta">
                    <h1 className="text-center text-[2.2rem] text-primary mb-[45px] relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-accent after:rounded-[2px]">
                    ¿Qué hay que considerar para el cuidado de un árbol?
                    </h1>
                    
                    <div className="grid gap-[30px] max-w-[1200px] mx-auto">
                    {considerationCards.map((card, index) => (
                        <article
                        key={card.id}
                        data-card-id={card.id}
                        className={`flex bg-white rounded-[20px] overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover ${
                            visibleCards.has(card.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        } ${card.reverse ? 'flex-row-reverse' : ''}`}
                        >
                        <div className="flex-1 min-h-[280px] relative overflow-hidden group">
                            <img 
                            src={card.image} 
                            alt={card.title} 
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                        </div>
                        <div className="flex-[1.2] p-[30px] flex flex-col justify-center">
                            <h2 className="text-primary mb-4 text-[1.5rem]">{card.title}</h2>
                            <p className="text-black mb-2.5">{card.description}</p>
                        </div>
                        </article>
                    ))}
                    </div>
            </section>
      );
}