
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marina Campos",
      role: "CEO, TechFlow Solutions",
      content: "A Lumina X transformou completamente nossa operação. Em 6 meses, conseguimos automatizar 85% dos nossos processos manuais. Agora posso focar 100% na visão estratégica da empresa.",
      image: "🚀",
      results: "300% aumento na produtividade"
    },
    {
      name: "Ricardo Silva",
      role: "Fundador, Digital Innovations",
      content: "O trabalho de branding da Lumina X foi extraordinário. Nossa marca agora comunica exatamente o que somos: líderes premium no mercado. O retorno sobre investimento foi imediato.",
      image: "🏆",
      results: "250% crescimento em vendas"
    },
    {
      name: "Ana Beatriz Costa",
      role: "Diretora, Growth Ventures",
      content: "Finalmente encontrei parceiros que entendem a jornada do empreendedor visionário. A automação de marketing da Lumina X gerou mais leads qualificados em 3 meses do que tivemos em 2 anos.",
      image: "💎",
      results: "400% mais leads qualificados"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
            <span className="gradient-text">Líderes</span> que Transformaram suas Empresas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Veja como outros visionários conquistaram a liberdade operacional 
            e elevaram seus negócios a um novo patamar.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-light-blue rounded-3xl p-8 shadow-xl border border-silver card-hover animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{testimonial.image}</div>
                <h4 className="font-bold text-deep-blue text-lg">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
              
              <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="bg-gradient-to-r from-electric-blue to-soft-gold p-4 rounded-2xl text-center">
                <div className="text-white font-bold text-lg">{testimonial.results}</div>
              </div>
              
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-soft-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-electric-blue/10 to-soft-gold/10 rounded-2xl p-6 border border-electric-blue/20">
            <div className="text-3xl">🎯</div>
            <div className="text-left">
              <div className="font-bold text-deep-blue text-lg">Próximo na Lista: Você</div>
              <div className="text-gray-600">Pronto para sua transformação?</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
