
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen hero-gradient relative overflow-hidden flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-soft-gold/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Liberte Seu
              <span className="block gradient-text">
                Potencial
              </span>
              com IA
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Você é um líder visionário, mas está preso em operações caóticas? 
              <strong className="text-white block mt-2">
                Descubra como a IA pode transformar sua empresa em uma máquina de resultados.
              </strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button onClick={scrollToContact} className="btn-primary">
                Transformar Minha Empresa
              </button>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
                Conhecer a Lumina X
              </button>
            </div>
            
            <div className="flex items-center gap-8 text-blue-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">300%</div>
                <div className="text-sm">Aumento médio em eficiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">90%</div>
                <div className="text-sm">Redução em tarefas manuais</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm">Sistemas inteligentes</div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-left lg:animate-fade-in relative">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-electric-blue/20 to-soft-gold/20 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-gradient-to-r from-electric-blue to-soft-gold rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2h-5zM12 7a5 5 0 0 0-5 5v3.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V12a5 5 0 0 0-5-5z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">IA Inteligente</h3>
                  <p className="text-blue-100">Automatização que pensa e aprende</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
