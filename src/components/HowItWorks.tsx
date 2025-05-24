import React, { useEffect, useRef } from 'react';

const HowItWorks: React.FC = () => {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeInActive');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fadeIn');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-b from-branco to-verde-claro/10" ref={howItWorksRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fadeIn" style={{ animationDelay: '0.1s' }}>
          <h2 className="section-title mx-auto">
            Como funciona a PréClin Conecta
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-cinza-escuro/80">
            Simples, intuitivo e eficiente para você e seus pacientes
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Steps connection line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-verde-claro/30 transform -translate-x-1/2 z-0"></div>
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center mb-16 md:mb-24 fadeIn transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg rounded-lg p-4 md:p-0" style={{ animationDelay: '0.3s' }}>
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                <h3 className="text-2xl font-bold text-verde-escuro mb-3">1. Cadastro Fácil de Pacientes</h3>
                <p className="text-cinza-escuro/80">
                  Cadastre seus pacientes novos de forma simples. Nosso sistema intuitivo faz o trabalho pesado por você.
                </p>
              </div>
              
              <div className="bg-verde-escuro text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold z-10 mb-6 md:mb-0 relative transition-transform duration-300 hover:scale-110">
                <div className="absolute w-full h-full rounded-full bg-verde-escuro animate-pulse opacity-50"></div>
                1
              </div>
              
              <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                <img 
                  src="/painel para médicos 1.webp" 
                  alt="Cadastro de pacientes" 
                  className="rounded-lg shadow-premium w-full max-w-xs mx-auto md:ml-0 transition-transform duration-300 hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-16 md:mb-24 fadeIn transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg rounded-lg p-4 md:p-0" style={{ animationDelay: '0.5s' }}>
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl font-bold text-verde-escuro mb-3">2. Envio Inteligente do Pré-Consulta</h3>
                <p className="text-cinza-escuro/80">
                  Com apenas dois cliques, envie um formulário por e-mail ou WhatsApp para seu paciente antes da consulta. Eles preenchem onde e quando for mais conveniente.
                </p>
              </div>
              
              <div className="bg-verde-escuro text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold z-10 mb-6 md:mb-0 relative transition-transform duration-300 hover:scale-110">
                <div className="absolute w-full h-full rounded-full bg-verde-escuro animate-pulse opacity-50"></div>
                2
              </div>
              
              <div className="md:w-1/2 md:pr-12 text-center md:text-right">
                <img 
                  src="/pre-consulta 3.webp" 
                  alt="Visualização das informações" 
                  className="rounded-lg shadow-premium w-full max-w-xs mx-auto md:mr-0 transition-transform duration-300 hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center fadeIn transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg rounded-lg p-4 md:p-0" style={{ animationDelay: '0.7s' }}>
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                <h3 className="text-2xl font-bold text-verde-escuro mb-3">3. Diagnóstico Antecipado, Consulta Eficaz</h3>
                <p className="text-cinza-escuro/80">
                  Receba todas as informações cruciais do paciente – sintomas, histórico, exames, fotos – de forma organizada, antes da consulta. Quando o paciente entrar em sua sala você já tem um pre-diagnóstico.
                </p>
              </div>
              
              <div className="bg-verde-escuro text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold z-10 mb-6 md:mb-0 relative transition-transform duration-300 hover:scale-110">
                <div className="absolute w-full h-full rounded-full bg-verde-escuro animate-pulse opacity-50"></div>
                3
              </div>
              
              <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                <img 
                  src="/inteligencia artificial para medicos 2.webp" 
                  alt="Envio de formulário" 
                  className="rounded-lg shadow-premium w-full max-w-xs mx-auto md:ml-0 transition-transform duration-300 hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
