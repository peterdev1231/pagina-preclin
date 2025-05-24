import React, { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "O sistema PréClin Conecta é intuitivo e prático para médicos?",
    answer: "Sim, desenvolvemos uma interface extremamente intuitiva tanto para médicos quanto para pacientes. Com nosso software para médicos, você poderá enviar formulários com apenas dois cliques, e seus pacientes os preencherão facilmente em qualquer dispositivo."
  },
  {
    question: "Como envio o link do formulário para o paciente usando o sistema?",
    answer: "Após cadastrar o paciente em nosso sistema para médicos, você pode enviar o link do formulário automaticamente por WhatsApp ou e-mail."
  },
  {
    question: "É mesmo gratuito para testar?",
    answer: "Sim! Ao optar pelo plano anual, você tem 7 dias de teste gratuito com todas as funcionalidades disponíveis para experimentar a plataforma PréClin Conecta sem compromisso."
  },
  {
    question: "O que cobre a garantia de 7 dias?",
    answer: "Durante 7 dias, você tem acesso total a todos os recursos premium para testar a PréClin Conecta sem compromisso. Se não ficar satisfeito, basta cancelar sem custo."
  },
  {
    question: "É difícil configurar e começar a usar o software PréClin Conecta?",
    answer: "Não! O software para médicos PréClin Conecta foi projetado para ser intuitivo e fácil de usar. Oferecemos onboarding guiado e suporte para que você comece a otimizar suas consultas rapidamente com nosso sistema."
  },
  {
    question: "Como o sistema PréClin Conecta garante a segurança dos dados dos meus pacientes?",
    answer: "Levamos a segurança a sério. Nosso sistema para médicos utiliza criptografia de ponta e segue as melhores práticas de segurança para proteger todas as informações armazenadas na plataforma."
  }
];

const Faq: React.FC = () => {
  const faqRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
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
    <section 
      id="faq" 
      className="py-28 relative overflow-hidden" 
      ref={faqRef}
      style={{
        background: `
          linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(163, 201, 168, 0.15)),
          url('/texture-lines.svg')
        `,
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-verde-claro/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-verde-escuro/5 rounded-full filter blur-3xl"></div>
        
        {/* Light streaks */}
        <div className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-verde-claro/20 to-transparent"></div>
        <div className="absolute bottom-80 left-0 w-full h-px bg-gradient-to-r from-transparent via-verde-claro/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 fadeIn" style={{ animationDelay: '0.1s' }}>
          <div className="inline-block relative mb-4">
            <span className="inline-block px-6 py-2 rounded-full bg-verde-claro/10 text-verde-escuro text-sm font-semibold uppercase tracking-wide mb-4 border border-verde-claro/20 shadow-sm">
              Perguntas & Respostas
            </span>
            <h2 className="section-title mx-auto relative z-10">
              Perguntas Frequentes
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-verde-claro/30 to-transparent rounded-full transform -skew-x-12"></div>
          </div>
          <p className="text-xl max-w-2xl mx-auto text-cinza-escuro/80 mt-4">
            Tire suas dúvidas sobre a plataforma PréClin Conecta
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto fadeIn" style={{ animationDelay: '0.3s' }}>
          <Accordion 
            type="single" 
            collapsible 
            className="space-y-6"
            onValueChange={setActiveItem}
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className={`relative transition-all duration-500 hover:scale-[1.005] ${
                  activeItem === `item-${index}` 
                    ? 'premium-glass backdrop-blur-lg bg-white/90 border-verde-claro/30' 
                    : 'backdrop-blur-sm bg-white/60 border border-white/60'
                } rounded-xl overflow-hidden group`}
              >
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-verde-claro/20 to-transparent rounded-xl transition-opacity duration-500 ${
                  activeItem === `item-${index}` ? 'opacity-100' : 'opacity-0'
                } group-hover:opacity-70`}></div>
                
                <AccordionTrigger 
                  className="px-8 py-5 text-lg font-medium text-verde-escuro hover:text-verde-escuro/80 transition-colors relative"
                >
                  <span className="relative z-10 block text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-cinza-escuro/80 relative z-10">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
