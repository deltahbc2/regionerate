        type HeaderProps = {
        onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
        };

        export default function Header({ onNavClick }: HeaderProps) {
        const navItems = [
            { id: 'inicio', label: 'Inicio' },
            { id: 'encuenta', label: '¿Qué considerar?' },
            { id: 'cuidados', label: 'Cuidados', isPrimary: true },
        ] as const;

        return (
            <header className="sticky top-0 z-[1000] bg-primary text-accent flex items-center justify-between py-3 px-[5%] shadow-[0_2px_15px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3">
                <img src="/imag/logo.png" alt="Logo" className="w-[45px] h-[50px] object-contain rounded-[4px]" />
                <div className="flex flex-col">
                <strong className="text-[22px] text-accent">Regionerate</strong>
                <span className="text-[14px] text-white/90 -mt-[3px]">| Cuidados</span>
                </div>
            </div>

            <nav className="flex gap-2 items-center">
                {navItems.map((item) => (
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => onNavClick(e, item.id)}
                    className={`no-underline px-5 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                    item.isPrimary
                        ? 'bg-accent text-white font-semibold hover:bg-accentHover hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]'
                        : 'text-white bg-transparent border-2 border-transparent hover:bg-[rgba(255,131,0,0.2)] hover:border-accent'
                    }`}
                >
                    {item.label}
                </a>
                ))}
            </nav>
            </header>
  );
}