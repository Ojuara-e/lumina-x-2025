
const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
            Somos Seus <span className="gradient-text">Mentores Digitais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Na Lumina X, entendemos a jornada do empreendedor visionário. Você tem grandes ideias, 
            mas se sente sobrecarregado pela complexidade operacional do dia a dia.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-silver card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-soft-gold rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-deep-blue mb-4">O Problema</h3>
              <p className="text-gray-600 leading-relaxed">
                Você está preso em tarefas repetitivas, perdendo tempo com processos manuais 
                e lutando para escalar sua operação. Sua visão de negócio fica em segundo plano 
                enquanto você "apaga incêndios" constantemente.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-electric-blue to-blue-700 rounded-3xl p-8 shadow-2xl text-white card-hover">
              <div className="w-16 h-16 bg-soft-gold rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-deep-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Nossa Solução</h3>
              <p className="text-blue-100 leading-relaxed">
                Transformamos sua empresa em uma operação inteligente e autônoma. 
                Com IA estratégica, branding poderoso e automação inteligente, 
                você finalmente conquista a liberdade para focar no que realmente importa: 
                <strong className="text-white"> liderar e inovar.</strong>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-xl border border-silver">
            <div className="w-12 h-12 bg-gradient-to-r from-soft-gold to-yellow-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="font-bold text-deep-blue">Sua Transformação Começa Aqui</div>
              <div className="text-gray-600">De caos operacional para maestria estratégica</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
