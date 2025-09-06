'use client'

import { Button } from './ui/button'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Quem Somos', id: 'quem-somos' },
    { name: 'Soluções', id: 'solucoes' },
    { name: 'Franquia', id: 'franquia' },
    { name: 'Depoimentos', id: 'depoimentos' },
    { name: 'FAQ', id: 'faq' }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/grupo-gaias',
      icon: '💼'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/grupoGAIAS',
      icon: '📸'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@grupoGAIAS',
      icon: '📺'
    }
  ]

  return (
    <footer id="contato" className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Grupo GAIAS</h3>
                  <p className="text-teal-400 font-medium">Inteligência Artificial</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                Democratizando o acesso às soluções de Inteligência Artificial para empresas e empreendedores em todo o Brasil.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-teal-400">📍</span>
                  <span className="text-slate-300">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo, SP - 01310-100
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-400">📧</span>
                  <a 
                    href="mailto:contato@grupoGAIAS.com.br"
                    className="text-slate-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    contato@grupoGAIAS.com.br
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-400">📱</span>
                  <a 
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    (11) 9 9999-9999
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-400">☎️</span>
                  <a 
                    href="tel:+551133334444"
                    className="text-slate-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    (11) 3333-4444
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Links Rápidos</h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-slate-300 hover:text-teal-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                ))}
                <a 
                  href="/politica-privacidade"
                  className="block text-slate-300 hover:text-teal-400 transition-colors duration-300"
                >
                  Política de Privacidade
                </a>
                <a 
                  href="/termos-uso"
                  className="block text-slate-300 hover:text-teal-400 transition-colors duration-300"
                >
                  Termos de Uso
                </a>
              </nav>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Conecte-se</h4>
              
              <div className="space-y-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-slate-300 hover:text-teal-400 transition-colors duration-300 group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>

              <Button 
                onClick={() => scrollToSection('franquia')}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Seja um Franqueado GAIAS
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-teal-500/10 to-blue-600/10 rounded-xl p-8 text-center">
              <h4 className="text-xl font-semibold mb-4">
                Receba novidades sobre IA e oportunidades de negócio
              </h4>
              <p className="text-slate-400 mb-6">
                Inscreva-se em nossa newsletter e fique por dentro das últimas tendências em Inteligência Artificial
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500 text-white placeholder-slate-400"
                />
                <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 px-6 py-3 font-semibold">
                  Inscrever
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-slate-400 mb-4 md:mb-0">
              <p>&copy; 2024 Grupo GAIAS. Todos os direitos reservados.</p>
            </div>
            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <span>CNPJ: 00.000.000/0001-00</span>
              <span>•</span>
              <span>Feito com ❤️ no Brasil</span>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as soluções do Grupo GAIAS."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Falar no WhatsApp"
        >
          <span className="text-2xl text-white group-hover:scale-110 transition-transform duration-300">
            💬
          </span>
        </a>
      </div>
    </footer>
  )
}