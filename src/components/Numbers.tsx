import React, { useEffect, useRef } from 'react';
import { UsersRound, ThumbsUp, Clock } from 'lucide-react';

const Numbers: React.FC = () => {
  const numbersRef = useRef<HTMLDivElement>(null);
  
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

  const numberItems = [
    {
      icon: <UsersRound className="w-10 h-10 text-verde-neon mb-3" />,
      value: "+1.200",
      label: "médicos consultores",
      delay: '0s'
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-verde-neon mb-3" />,
      value: "98%",
      label: "de satisfação",
      delay: '0.2s'
    },
    {
      icon: <Clock className="w-10 h-10 text-verde-neon mb-3" />,
      value: "15 min",
      label: "economizados por consulta",
      delay: '0.4s'
    }
  ];

  // Remover os itens de número e logos, manter apenas a estrutura base se necessário para o layout
  // const numberItems = [...];
  // const partnerLogos = [...];

  return (
    <section className="py-20 bg-gradient-to-b from-branco to-verde-claro/5" ref={numbersRef}>
      <div className="container mx-auto px-4">
        {/* Remover a seção original "Números que Impressionam" */}
        
        <div className="text-center mb-16 fadeIn">
          <h2 className="section-title mx-auto">
            Números que Impressionam
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-cinza-escuro/80 mt-5">
            Veja como a PréClin Conecta está <span className="font-semibold text-verde-escuro">transformando clínicas como a sua</span>. Os números falam por si:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {numberItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-premium hover:shadow-elevated transform hover:scale-105 transition-all duration-300 text-center fadeIn flex flex-col items-center border border-verde-claro/20"
              style={{ animationDelay: item.delay }}
            >
              {item.icon}
              <div className="text-5xl md:text-6xl font-extrabold text-verde-escuro">{item.value}</div>
              <p className="text-lg text-cinza-escuro/80 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
        
        {/* Descomentado: Seção focada em Resultados */}
        
        <div className="mt-16 text-center fadeIn" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-3xl md:text-4xl font-bold text-verde-escuro mb-10">
            Os Resultados que Você Pode Alcançar
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex flex-col items-center p-6 bg-transparent rounded-none shadow-none transform hover:scale-105 transition-all duration-300 border-none fadeIn hover:shadow-none" style={{ animationDelay: '0.9s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verde-neon mb-4">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <p className="text-xl font-bold text-verde-escuro mb-2">Mais Tempo Livre</p>
              <p className="text-cinza-escuro/80">Recupere minutos valiosos em cada consulta para focar no atendimento ou ter mais tempo pessoal.</p>
            </div>
            
            
            <div className="flex flex-col items-center p-6 bg-transparent rounded-none shadow-none transform hover:scale-105 transition-all duration-300 border-none fadeIn hover:shadow-none" style={{ animationDelay: '1.0s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verde-neon mb-4">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <p className="text-xl font-bold text-verde-escuro mb-2">Potencial de Faturamento</p>
              <p className="text-cinza-escuro/80">Com o tempo otimizado, é possível atender mais pacientes ou oferecer serviços adicionais.</p>
            </div>
            
            
            <div className="flex flex-col items-center p-6 bg-transparent rounded-none shadow-none transform hover:scale-105 transition-all duration-300 border-none fadeIn hover:shadow-none" style={{ animationDelay: '1.1s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verde-neon mb-4">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <p className="text-xl font-bold text-verde-escuro mb-2">Consultas Otimizadas</p>
              <p className="text-cinza-escuro/80">Pacientes chegam mais informados, permitindo um foco maior na análise clínica durante a consulta.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Numbers;
