
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <svg className="w-6 h-6 text-burnt-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="font-bold text-xl text-black">Psicóloga Daniela</span>
        </a>
        
        <nav className={`${menuOpen ? 'flex' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <li><a href="#inicio" onClick={() => setMenuOpen(false)} className="text-black hover:text-burnt-red font-medium transition-colors">Início</a></li>
            <li><a href="#sobre" onClick={() => setMenuOpen(false)} className="text-black hover:text-burnt-red font-medium transition-colors">Sobre</a></li>
            <li><a href="#diferenciais" onClick={() => setMenuOpen(false)} className="text-black hover:text-burnt-red font-medium transition-colors">Diferenciais</a></li>
            <li><a href="#contato" onClick={() => setMenuOpen(false)} className="text-black hover:text-burnt-red font-medium transition-colors">Contato</a></li>
          </ul>
        </nav>
        
        <div className="md:hidden">
          <button className="p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6 text-burnt-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
