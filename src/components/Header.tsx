'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Grupo GAIAS</h1>
                <p className="text-xs text-teal-600 font-medium">Inteligência Artificial</p>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('quem-somos')}
              className="text-slate-700 hover:text-teal-600 transition-colors font-medium"
            >
              Quem Somos
            </button>
            <button 
              onClick={() => scrollToSection('solucoes')}
              className="text-slate-700 hover:text-teal-600 transition-colors font-medium"
            >
              Soluções
            </button>
            <button 
              onClick={() => scrollToSection('franquia')}
              className="text-slate-700 hover:text-teal-600 transition-colors font-medium"
            >
              Franquia
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-slate-700 hover:text-teal-600 transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-slate-700 hover:text-teal-600 transition-colors font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-slate-700 hover:text-teal-600 transition-colors font-medium"
            >
              Contato
            </button>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('franquia')}
              className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Seja um Franqueado
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-teal-600 focus:outline-none"
              aria-label="Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <div className={`h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('quem-somos')}
                className="block px-3 py-2 text-slate-700 hover:text-teal-600 font-medium w-full text-left"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')}
                className="block px-3 py-2 text-slate-700 hover:text-teal-600 font-medium w-full text-left"
              >
                Soluções
              </button>
              <button 
                onClick={() => scrollToSection('franquia')}
                className="block px-3 py-2 text-slate-700 hover:text-teal-600 font-medium w-full text-left"
              >
                Franquia
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="block px-3 py-2 text-slate-700 hover:text-teal-600 font-medium w-full text-left"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block px-3 py-2 text-slate-700 hover:text-teal-600 font-medium w-full text-left"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block px-3 py-2 text-slate-700 hover:text-teal-600 font-medium w-full text-left"
              >
                Contato
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('franquia')}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-lg font-semibold"
                >
                  Seja um Franqueado
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}