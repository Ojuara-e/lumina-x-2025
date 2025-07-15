
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    alert('Obrigado pelo interesse! Entraremos em contato em até 24 horas.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
            Pronto para Sua <span className="gradient-text">Transformação</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Agende uma conversa estratégica gratuita e descubra como podemos 
            liberar todo o potencial da sua empresa em apenas 90 dias.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-slide-in-left">
            <div className="bg-gradient-to-br from-electric-blue to-blue-700 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Por que Escolher a Lumina X?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-soft-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-deep-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Resultados em 90 Dias</h4>
                    <p className="text-blue-100">Implementação rápida com impacto imediato nos seus resultados.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-soft-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-deep-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">ROI Garantido</h4>
                    <p className="text-blue-100">Investimento com retorno mensuráveis e comprovados.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-soft-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-deep-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Expertise Premium</h4>
                    <p className="text-blue-100">Especialistas que entendem a jornada do empreendedor visionário.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-white/20">
                <h4 className="font-bold mb-3">Contato Direto:</h4>
                <div className="space-y-2 text-blue-100">
                  <p>📧 contato@luminax.com.br</p>
                  <p>📱 (47) 99699-4835</p>
                  <p>🕒 Seg-Sex: 9h às 18h</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl border border-silver">
              <h3 className="text-2xl font-bold text-deep-blue mb-6">
                Agende Sua Consultoria Gratuita
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-deep-blue mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-deep-blue mb-2">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-deep-blue mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-colors"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-deep-blue mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-deep-blue mb-2">
                    Desafio Atual
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-colors resize-none"
                    placeholder="Conte-nos sobre seu maior desafio operacional atual..."
                  />
                </div>
                
                <button type="submit" className="w-full btn-primary text-lg">
                  Agendar Consultoria Gratuita
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  * Respondemos em até 24 horas. Seus dados estão seguros conosco.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
