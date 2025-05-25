import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Star, Rocket, ShieldCheck } from 'lucide-react';

declare const gtag: (...args: any[]) => void;

const Plans: React.FC = () => {
  const plansRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeInActive');
            if (typeof gtag === 'function') {
              gtag('event', 'conversion', {'send_to': 'AW-17107304072/92aQCOKbzs0aEIj9st0_'});
            }
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
    <section id="planos" className="py-20 bg-branco relative overflow-hidden" ref={plansRef}
      style={{ backgroundImage: "url('/texture-lines.svg')" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-verde-claro/10 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-verde-escuro/10 to-transparent rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fadeIn" style={{ animationDelay: '0.1s' }}>
          <span className="text-verde-claro text-lg font-semibold uppercase tracking-wider">Planos Premium</span>
          <h2 className="section-title mx-auto mt-4">
            Escolha o plano ideal para sua prática
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-cinza-escuro/80 mt-3">
            Oferecemos opções flexíveis que se adaptam ao tamanho da sua clínica
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Monthly Plan */}
          <div className="glass-card backdrop-blur-md bg-white/80 border border-white/40 p-8 rounded-2xl shadow-elevated relative z-10 fadeIn transform hover:translate-y-[-10px] transition-all duration-500 flex flex-col" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-verde-escuro/20 to-verde-claro/20 rounded-2xl blur-sm opacity-75"></div>
            <div className="relative bg-white/95 rounded-xl p-8 h-full flex flex-col justify-between">
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-verde-escuro mb-2">Mensal</h3>
                  <div className="flex justify-center items-end">
                    <span className="text-5xl font-bold text-verde-escuro">R$ 49,90</span>
                    <span className="text-cinza-escuro/80 ml-1">/mês</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center transition-transform duration-200 hover:translate-x-1">
                    <div className="w-6 h-6 bg-verde-claro/20 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Pacientes ilimitados</span>
                  </div>
                  <div className="flex items-center transition-transform duration-200 hover:translate-x-1">
                    <div className="w-6 h-6 bg-verde-claro/20 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Visualização de fotos e exames</span>
                  </div>
                  <div className="flex items-center transition-transform duration-200 hover:translate-x-1">
                    <div className="w-6 h-6 bg-verde-claro/20 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Acessos simultâneos ilimitados</span>
                  </div>
                  <div className="flex items-center transition-transform duration-200 hover:translate-x-1">
                    <div className="w-6 h-6 bg-verde-claro/20 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Suporte por e-mail</span>
                  </div>
                </div>
              </div>
              
              <a href="https://pay.hotmart.com/R99794303O?off=errb81gg" target="_blank" rel="noopener noreferrer">
                <Button className="w-full py-6 bg-verde-escuro hover:bg-verde-escuro/90 text-white border-2 border-verde-escuro hover:border-verde-claro hover:shadow-xl transition-all duration-300 mt-auto transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-verde-claro focus:ring-opacity-50">
                  Quero esse plano
                </Button>
              </a>
            </div>
          </div>
          
          {/* Annual Plan - Featured */}
          <div className="glass-card backdrop-blur-lg bg-gradient-to-br from-verde-escuro via-verde-escuro/95 to-verde-claro/50 text-white p-10 rounded-2xl shadow-2xl relative z-10 fadeIn transform hover:translate-y-[-10px] hover:scale-105 transition-all duration-500 flex flex-col" style={{ animationDelay: '0.5s' }}>
            {/* Sombra removida */}
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <span className="bg-dourado text-verde-escuro text-sm font-bold py-1.5 px-6 rounded-full shadow-lg flex items-center">
                <Star className="w-4 h-4 mr-2 fill-current" />
                RECOMENDADO
              </span>
            </div>
            
            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              <div>
                <div className="text-center mb-6 mt-4">
                  <h3 className="text-2xl font-bold mb-2">Anual</h3>
                  <div className="flex flex-col items-center mb-1">
                    <div className="text-xl line-through text-white/60 mr-2 self-center">De R$ 598,80</div>
                    <div className="flex items-baseline self-center">
                      <span className="text-5xl font-bold">R$ 499,00</span>
                      <span className="text-xl text-white/80 ml-1">/ano</span>
                    </div>
                  </div>
                  <p className="mt-2 text-xl text-verde-neon font-bold uppercase tracking-wide">
                    2 MESES GRÁTIS!
                  </p>
                  <p className="text-sm text-white/70 font-medium">
                    (Economize R$ 99,80)
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center transition-transform duration-200 hover:translate-x-1">
                    <div className="w-6 h-6 bg-verde-neon rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Pacientes ilimitados</span>
                  </div>
                  <div className="flex items-center transition-transform duration-200 hover:translate-x-1">
                    <div className="w-6 h-6 bg-verde-neon rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Visualização de fotos e exames</span>
                  </div>
                  <div className="flex items-center transition-transform duration-200 hover:translate-x-1">
                    <div className="w-6 h-6 bg-verde-neon rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Acessos simultâneos ilimitados</span>
                  </div>
                  <div className="flex items-center transition-transform duration-200 hover:translate-x-1">
                    <div className="w-6 h-6 bg-verde-neon rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Suporte prioritário</span>
                  </div>
                  <div className="flex items-center transition-transform duration-200 hover:translate-x-1">
                    <div className="w-6 h-6 bg-verde-neon rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>Análises avançadas</span>
                  </div>
                  <div className="flex items-center transition-transform duration-200 hover:translate-x-1">
                    <div className="w-6 h-6 bg-verde-neon rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="text-white">Bônus: Conteúdo VIP Exclusivo</span>
                  </div>
                </div>
              </div>
              
              <a href="https://pay.hotmart.com/R99794303O?off=e3nl8u6h" target="_blank" rel="noopener noreferrer">
                <Button className="w-full py-6 bg-verde-claro hover:bg-verde-claro/90 text-verde-escuro font-bold border-2 border-verde-claro hover:shadow-2xl transition-all duration-300 animate-pulse mt-auto flex items-center justify-center text-lg transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-verde-escuro focus:ring-opacity-50">
                  <Rocket className="w-5 h-5 mr-2" />
                  Iniciar Teste Grátis
                </Button>
              </a>
              <div className="flex items-center justify-center text-xs text-white/70 mt-3 transition-transform duration-200 hover:translate-y-1">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-verde-neon" />
                <span>Teste sem riscos: cancele quando quiser.</span>
              </div>
            </div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <div className="absolute -rotate-12 -translate-x-1/2 top-1/2 w-1/2 h-40 bg-gradient-to-r from-transparent via-verde-claro/10 to-transparent blur-sm transform animate-shine"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
