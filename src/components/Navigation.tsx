
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-silver">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold gradient-text">
              Lumina X
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-deep-blue hover:text-electric-blue transition-colors duration-300 font-medium">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="text-deep-blue hover:text-electric-blue transition-colors duration-300 font-medium">
                Sobre
              </button>
              <button onClick={() => scrollToSection('services')} className="text-deep-blue hover:text-electric-blue transition-colors duration-300 font-medium">
                Serviços
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-deep-blue hover:text-electric-blue transition-colors duration-300 font-medium">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary text-sm py-2 px-6">
                Fale Conosco
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-deep-blue hover:text-electric-blue"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-silver">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 text-deep-blue hover:text-electric-blue font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-deep-blue hover:text-electric-blue font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-deep-blue hover:text-electric-blue font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block px-3 py-2 text-deep-blue hover:text-electric-blue font-medium">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-deep-blue hover:text-electric-blue font-medium">
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
