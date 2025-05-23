import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const Cta: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
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
    <section className="py-24 bg-verde-escuro text-branco relative overflow-hidden" ref={ctaRef}>
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-verde-escuro/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-verde-escuro/50 to-transparent"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-verde-claro/20 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-verde-claro/20 rounded-full filter blur-3xl opacity-60"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: "linear-gradient(rgba(163, 201, 168, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(163, 201, 168, 0.3) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center fadeIn">
          <span className="inline-block px-6 py-2 rounded-full bg-verde-claro/20 text-verde-claro text-sm font-semibold uppercase tracking-wide mb-6 fadeIn" style={{ animationDelay: '0.2s' }}>
            PréClin Conecta
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight fadeIn" style={{ animationDelay: '0.4s' }}>
            Economize tempo, <span className="relative inline-block">
              sem riscos
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-verde-claro to-transparent rounded-full"></span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed fadeIn" style={{ animationDelay: '0.6s' }}>
            Teste nossa plataforma clínica premium e veja como ela pode transformar sua rotina
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 fadeIn" style={{ animationDelay: '0.8s' }}>
            {/* Premium button with glow effect */}
            <div className="relative group transition-transform duration-300 hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-verde-escuro via-verde-claro to-verde-escuro rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <a href="#planos" className="block">
                <Button className="relative premium-btn text-lg py-6 px-10 bg-gradient-to-r from-verde-escuro to-verde-escuro hover:from-verde-escuro hover:to-verde-claro shadow-lg hover:shadow-xl hover:translate-y-[-3px] transition-all duration-500 border border-verde-claro/20 focus:outline-none focus:ring-2 focus:ring-verde-claro focus:ring-opacity-50">
                  Iniciar Teste Grátis
                </Button>
              </a>
            </div>
            
            <a href="#planos" className="block">
              <Button variant="outline" className="bg-transparent border-2 border-branco text-branco hover:bg-branco/10 text-lg py-7 px-10 rounded-xl hover:shadow-[0_8px_30px_rgba(245,246,245,0.2)] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-branco focus:ring-opacity-50">
                Saiba Mais
              </Button>
            </a>
          </div>
          
          <p className="mt-8 font-medium flex items-center justify-center fadeIn transition-transform duration-300 hover:scale-[1.01]" style={{ animationDelay: '1.0s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3C9A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Ganhe 7 dias grátis ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;
