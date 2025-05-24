import React, { useEffect, useRef, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Gustavo Almeida",
    title: "Médico",
    image: "/doctor-1.svg",
    quote: "Isso transformou minhas consultas. Agora, entro no atendimento já com um conhecimento aprofundado do caso, pronta para discutir os próximos passos. Consigo dedicar um tempo muito maior à escuta qualificada, ao exame físico e à explicação do diagnóstico e tratamento. Sinto que minhas consultas se tornaram não só mais eficientes, mas também mais humanas e personalizadas, pois o paciente percebe que já estudei seu caso. Reduziu a correria, aumentou a qualidade e, sinceramente, tornou meu trabalho diário mais gratificante. É uma ferramenta que realmente entende as necessidades do médico moderno."
  },
  {
    id: 2,
    name: "Dr. Carlos Drummond",
    title: "Cardiologista",
    image: "/doctor-2.svg",
    quote: "Na cardiologia, o histórico do paciente é extenso e cada detalhe conta. Antes da Préclin Conecta, organizar todas essas informações durante a consulta tomava um tempo considerável, que eu preferia dedicar à interação e ao plano de cuidados. Agora, com o acesso antecipado aos dados e exames do paciente, tudo estruturado no painel, minhas consultas se tornaram muito mais dinâmicas e objetivas. Consigo focar no que é crucial para o paciente ali, naquele momento. É uma ferramenta que otimizou significativamente minha rotina e a qualidade do meu atendimento aqui em Belo Horizonte."
  },
  {
    id: 3,
    name: "Dr. Frederico Bittencourt",
    title: "Médico",
    image: "/doctor-3.svg",
    quote: "Eu hesitava em adotar novas tecnologias, mas o sistema realmente me surpreendeu. Ter acesso ao histórico completo do paciente, já organizado no painel, antes mesmo da consulta, me devolve um tempo precioso. Isso me permite focar totalmente na avaliação clínica e no diagnóstico, otimizando de verdade a minha rotina e a qualidade do atendimento."
  }
];

const Testimonials: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
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

    // Auto-rotation for testimonials
    // const interval = setInterval(() => {
    //   setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    // }, 5000);

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
      // clearInterval(interval);
    };
  }, []);

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-verde-claro/10 to-branco" ref={testimonialsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fadeIn" style={{ animationDelay: '0.1s' }}>
          <h2 className="section-title mx-auto">
            O que dizem nossos clientes
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-cinza-escuro/80">
            Veja como a PréClin Conecta tem transformado a rotina de médicos como você
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative fadeIn" style={{ animationDelay: '0.3s' }}>
          <div className="relative overflow-hidden glass-card backdrop-blur-lg bg-white/60 py-6 px-8 md:p-12 rounded-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-verde-escuro to-verde-claro"></div>
            
            {/* Navigation Arrows */}
            

            <div key={currentTestimonial} className="flex flex-col md:flex-row items-center md:items-start gap-8 transition-opacity duration-500 opacity-100 px-6">
              <div>
                <svg className="w-10 h-10 text-verde-claro/30 mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
                
                <p className="text-lg md:text-2xl text-cinza-escuro mb-4 italic flex-grow">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                
                <div>
                  <h4 className="text-xl font-bold text-verde-escuro">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-cinza-escuro/80">{testimonials[currentTestimonial].title}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2 fadeIn" style={{ animationDelay: '0.4s' }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-verde-escuro focus:ring-opacity-50 ${
                  currentTestimonial === index ? 'bg-verde-escuro scale-125' : 'bg-verde-claro hover:opacity-75'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
