'use client'

import { Button } from './ui/button'

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-600/10"></div>
      
      {/* Network Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-teal-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#14B8A6', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#2563EB', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <line x1="25%" y1="25%" x2="33%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
          <line x1="66%" y1="33%" x2="50%" y2="66%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <line x1="75%" y1="50%" x2="25%" y2="33%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>
      </div>

      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/12465946-e0c6-4163-984c-a04358f76898.png" 
          alt="Rede tecnológica futurista com conexões digitais teal e azul representando inteligência artificial"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block">Inteligência Artificial</span>
            <span className="block bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              para transformar negócios
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
              em todo o Brasil
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            O Grupo GAIAS é a franqueadora que democratiza o acesso às soluções de IA 
            para empresas e empreendedores.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              onClick={() => scrollToSection('solucoes')}
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 min-w-[250px]"
            >
              Conheça nossas soluções
            </Button>
            
            <Button 
              onClick={() => scrollToSection('franquia')}
              variant="outline"
              size="lg"
              className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm bg-white/10 transition-all duration-300 min-w-[250px]"
            >
              Seja um Franqueado
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 md:pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-teal-400">3+</div>
                <div className="text-sm text-slate-400">Soluções Principais</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-slate-400">Atendimento IA</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-teal-400">100%</div>
                <div className="text-sm text-slate-400">Online</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <button onClick={() => scrollToSection('quem-somos')} className="flex flex-col items-center space-y-2">
          <span className="text-sm">Role para descobrir</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
          </div>
        </button>
      </div>
    </section>
  )
}