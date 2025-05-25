
const ServicesSection = () => {
  const services = [
    {
      title: "Consultoria em IA",
      description: "Estratégias personalizadas para implementar IA de forma inteligente em seus processos, gerando resultados mensuráveis e sustentáveis.",
      features: ["Análise de processos", "Implementação gradual", "ROI garantido", "Suporte contínuo"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2h-5zM12 7a5 5 0 0 0-5 5v3.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V12a5 5 0 0 0-5-5z"/>
        </svg>
      )
    },
    {
      title: "Branding Inteligente",
      description: "Construímos marcas poderosas que se conectam emocionalmente com seu público, usando dados e IA para maximizar o impacto.",
      features: ["Identidade visual premium", "Posicionamento estratégico", "Comunicação consistente", "Análise de mercado"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "Automação Marketing",
      description: "Sistemas que trabalham 24/7 para nutrir leads, converter clientes e fidelizar sua base, enquanto você foca na estratégia.",
      features: ["Funis automatizados", "Lead scoring inteligente", "Personalização em massa", "Métricas avançadas"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547A8.014 8.014 0 004 21h16a8.014 8.014 0 00-.244-5.572zM12 2a5 5 0 110 10 5 5 0 010-10z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
            <span className="gradient-text">Serviços</span> que Transformam
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada solução é projetada para liberar você das amarras operacionais 
            e elevar sua empresa a um novo patamar de excelência e autonomia.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-silver card-hover animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-soft-gold rounded-2xl flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-deep-blue mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-electric-blue/10 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-electric-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full mt-8 bg-gradient-to-r from-electric-blue/10 to-soft-gold/10 hover:from-electric-blue hover:to-soft-gold text-electric-blue hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-electric-blue/20 hover:border-transparent">
                Saber Mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
