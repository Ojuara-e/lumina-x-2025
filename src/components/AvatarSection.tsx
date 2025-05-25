
const AvatarSection = () => {
  return (
    <section id="avatar" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
            Para Quem <span className="gradient-text">Criamos Resultados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Se você se reconhece neste perfil, a Lumina X foi feita para você.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-silver animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-gradient-to-r from-electric-blue to-soft-gold rounded-3xl flex items-center justify-center text-white mb-8">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold text-deep-blue mb-6">
                O Líder Visionário
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-deep-blue">Você é um CEO, fundador ou empresário</strong> que construiu 
                  algo significativo, mas sente que está perdendo tempo demais com operações.
                </p>
                <p>
                  Você tem uma <strong className="text-electric-blue">visão clara do futuro</strong>, 
                  mas precisa de sistemas inteligentes para executar essa visão sem sua presença constante.
                </p>
                <p>
                  Você valoriza <strong className="text-soft-gold">excelência, eficiência e autonomia</strong> - 
                  e está disposto a investir em soluções premium que realmente funcionam.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-electric-blue/5 to-soft-gold/5 rounded-2xl p-6 border border-electric-blue/10">
                <h4 className="font-bold text-deep-blue mb-3">Seus Maiores Desafios:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-electric-blue mt-1">•</span>
                    Tempo perdido em tarefas operacionais
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-blue mt-1">•</span>
                    Dificuldade para escalar sem perder qualidade
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-blue mt-1">•</span>
                    Falta de sistemas que "pensam" sozinhos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-blue mt-1">•</span>
                    Marca que não reflete sua excelência
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-soft-gold/5 to-electric-blue/5 rounded-2xl p-6 border border-soft-gold/10">
                <h4 className="font-bold text-deep-blue mb-3">Seu Futuro com a Lumina X:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-soft-gold mt-1">✓</span>
                    80% do seu tempo focado em estratégia
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-soft-gold mt-1">✓</span>
                    Sistemas que operam 24/7 sem você
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-soft-gold mt-1">✓</span>
                    Crescimento previsível e escalável
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-soft-gold mt-1">✓</span>
                    Marca premium que atrai os melhores clientes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvatarSection;
