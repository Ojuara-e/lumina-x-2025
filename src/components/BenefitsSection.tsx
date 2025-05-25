
const BenefitsSection = () => {
  const benefits = [
    {
      title: "Liberdade Operacional",
      description: "Sistemas inteligentes que funcionam sem sua supervisão constante",
      icon: "🗽",
      details: ["Automação completa de processos", "Decisões baseadas em IA", "Operação 24/7 autônoma"]
    },
    {
      title: "Crescimento Escalável",
      description: "Expanda seu negócio sem aumentar proporcionalmente sua carga de trabalho",
      icon: "📈",
      details: ["Estrutura que cresce com você", "Sistemas que se adaptam", "ROI crescente no tempo"]
    },
    {
      title: "Marca Premium",
      description: "Posicionamento que atrai automaticamente os clientes ideais",
      icon: "👑",
      details: ["Diferenciação clara no mercado", "Precificação premium", "Autoridade reconhecida"]
    },
    {
      title: "Tempo para Visão",
      description: "80% do seu tempo dedicado à estratégia e inovação",
      icon: "🔮",
      details: ["Foco em decisões estratégicas", "Desenvolvimento de novos produtos", "Expansão de mercado"]
    },
    {
      title: "Resultados Mensuráveis",
      description: "Métricas claras e dashboards que mostram o impacto real",
      icon: "📊",
      details: ["KPIs em tempo real", "ROI transparente", "Análises preditivas"]
    },
    {
      title: "Suporte Contínuo",
      description: "Parceria de longo prazo para evolução constante",
      icon: "🤝",
      details: ["Consultoria estratégica", "Atualizações constantes", "Suporte especializado"]
    }
  ];

  return (
    <section id="benefits" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
            Os <span className="gradient-text">Benefícios</span> que Você Conquistará
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Não são apenas ferramentas. É uma transformação completa 
            na forma como você lidera e como sua empresa opera.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-silver card-hover animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-deep-blue mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
              
              <div className="space-y-3">
                {benefit.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-electric-blue to-soft-gold rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-electric-blue to-blue-700 rounded-3xl p-8 lg:p-12 text-white shadow-2xl animate-fade-in">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Sua Jornada de Transformação Começa Agora
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Você já provou que tem visão. Agora é hora de ter os sistemas 
              que executam essa visão com excelência, enquanto você lidera o futuro.
            </p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
              Iniciar Minha Transformação
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
