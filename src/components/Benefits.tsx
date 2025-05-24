import React, { useEffect, useRef } from 'react';

const Benefits: React.FC = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const currentRef = benefitsRef.current;
    if (!currentRef) return;

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

    const elements = currentRef.querySelectorAll('.fadeIn');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
      // It might be good to also disconnect the observer if the component unmounts
      // observer.disconnect(); // Uncomment if needed, but ensure elements are unobserved first.
    };
  }, []);

  return (
    <section id="beneficios" className="py-20 bg-branco" ref={benefitsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fadeIn" style={{ animationDelay: '0.1s' }}>
          <h2 className="section-title mx-auto">Benefícios</h2>
          <div className="w-24 h-1 bg-verde-claro mx-auto mt-2 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fadeIn" style={{ animationDelay: '0.3s' }}>
          {/* Benefit 1 */}
          <div className="bg-white rounded-xl p-8 shadow-elevated hover:shadow-card-hover transition-all duration-500 card-3d group">
            <div className="w-16 h-16 bg-verde-claro/20 flex items-center justify-center rounded-full mb-6 mx-auto transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-verde-escuro mb-4 text-center">Seu Tempo Mais Valioso, Devolvido.</h3>
            <p className="text-center text-cinza-escuro/80">
              A PréClin entrega o histórico do paciente antes da consulta. Use os 10-15 minutos ganhos para diagnósticos mais profundos, não para perguntas básicas.
            </p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-white rounded-xl p-8 shadow-elevated hover:shadow-card-hover transition-all duration-500 card-3d group">
            <div className="w-16 h-16 bg-verde-claro/20 flex items-center justify-center rounded-full mb-6 mx-auto transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" style={{ animationDelay: '0.3s' }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-verde-escuro mb-4 text-center">Adeus Papel, Olá Decisões Precisas.</h3>
            <p className="text-center text-cinza-escuro/80">
              Esqueça fichas ilegíveis. Tenha dados cruciais do paciente organizados e acessíveis em segundos em um sistema totalmente intuitivo, para diagnósticos e tratamentos mais seguros.
            </p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-white rounded-xl p-8 shadow-elevated hover:shadow-card-hover transition-all duration-500 card-3d fadeIn group" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-verde-claro/20 flex items-center justify-center rounded-full mb-6 mx-auto transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" style={{ animationDelay: '0.6s' }}>
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                <line x1="6" y1="1" x2="6" y2="4"/>
                <line x1="10" y1="1" x2="10" y2="4"/>
                <line x1="14" y1="1" x2="14" y2="4"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-verde-escuro mb-4 text-center">Consultório Eficiente, Pacientes Satisfeitos.</h3>
            <p className="text-center text-cinza-escuro/80">
              Consultas ágiles reduzem atrasos e otimizam sua agenda. Menos estresse na sala de espera, mais profissionalismo percebido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
