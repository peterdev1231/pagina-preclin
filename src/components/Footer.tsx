import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cinza-escuro text-branco py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="fadeIn" style={{ animationDelay: '0.1s' }}>
            <img src="/PréClin_Conecta__Sistema_para_médicos__LOGO__.png" alt="PréClin Conecta" className="h-16 mb-4 brightness-200" />
            <p className="text-branco/70 mb-6">
              A ponte digital que conecta pacientes e médicos antes da consulta, otimizando o tempo e melhorando a experiência.
            </p>
          </div>
          
          <div className="fadeIn" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#beneficios" className="text-branco/70 hover:text-verde-claro transition-colors focus:outline-none focus:ring-2 focus:ring-verde-claro focus:ring-opacity-50">Benefícios</a></li>
              <li><a href="#como-funciona" className="text-branco/70 hover:text-verde-claro transition-colors">Como Funciona</a></li>
              <li><a href="#depoimentos" className="text-branco/70 hover:text-verde-claro transition-colors">Depoimentos</a></li>
              <li><a href="#planos" className="text-branco/70 hover:text-verde-claro transition-colors">Planos</a></li>
              <li><a href="#faq" className="text-branco/70 hover:text-verde-claro transition-colors focus:outline-none focus:ring-2 focus:ring-verde-claro focus:ring-opacity-50">FAQ</a></li>
            </ul>
          </div>
          
          <div className="fadeIn" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-lg font-bold mb-4">Segurança</h3>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verde-claro"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <p className="text-branco/70 text-sm">Plataforma 100% segura e confiável para seus dados.</p>
            </div>
          </div>
          
          <div className="fadeIn" style={{ animationDelay: '0.7s' }}>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center group focus-within:outline-none focus-within:ring-2 focus-within:ring-verde-claro focus-within:ring-opacity-50 transition-all duration-300 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-verde-claro transition-colors group-hover:text-verde-neon">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-branco/70 transition-colors group-hover:text-branco">contato@preconsulta.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-branco/20 text-center text-branco/50 fadeIn" style={{ animationDelay: '0.9s' }}>
          <p>&copy; {year} PréClin Conecta. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
