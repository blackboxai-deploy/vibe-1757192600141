'use client'

import { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'João Pereira',
      role: 'Franqueado em Minas Gerais',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2429a03d-3420-4a90-9e2d-79a7e475bfab.png',
      text: 'Ser franqueado do Grupo GAIAS me deu a oportunidade de oferecer soluções de ponta para pequenas empresas da minha cidade. Hoje sou reconhecido como referência em inovação e ainda conquistei independência financeira.',
      rating: 5
    },
    {
      id: 2,
      name: 'Ana Luiza',
      role: 'Cliente em São Paulo',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e6929e95-68d6-47e6-aa65-b9f3ecb86cd1.png',
      text: 'O ERP GAIAS revolucionou a gestão da minha empresa. Simples de usar, prático e com relatórios inteligentes que realmente ajudam na tomada de decisão.',
      rating: 5
    },
    {
      id: 3,
      name: 'Carlos Mendoza',
      role: 'Franqueado no Rio Grande do Sul',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1ea3397c-f39f-4ff5-aed3-850eed0ee0e3.png',
      text: 'As soluções de IA no WhatsApp transformaram completamente a forma como meus clientes vendem. A Vitória, nossa assistente virtual, fecha vendas mesmo quando eles estão dormindo!',
      rating: 5
    },
    {
      id: 4,
      name: 'Mariana Santos',
      role: 'Cliente no Ceará',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4162d7f9-2ba4-4a36-a120-ece5e6df6a41.png',
      text: 'O CVL me trouxe visibilidade que eu nunca imaginei ser possível. Em 3 meses, meu faturamento dobrou e agora sou encontrada facilmente pelos meus clientes.',
      rating: 5
    },
    {
      id: 5,
      name: 'Roberto Silva',
      role: 'Franqueado em Santa Catarina',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/38b01637-067d-4c20-b314-629e6d25649d.png',
      text: 'O suporte do Grupo GAIAS é excepcional. Mesmo sem conhecimento técnico, consegui implementar todas as soluções e hoje tenho uma carteira sólida de clientes satisfeitos.',
      rating: 5
    },
    {
      id: 6,
      name: 'Patricia Oliveira',
      role: 'Cliente no Paraná',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/43e26615-52fe-4912-bdee-b3698d8ed405.png',
      text: 'A integração entre o ERP e o atendimento por IA criou um ecossistema perfeito para meu negócio. Economia de tempo e aumento de produtividade incríveis.',
      rating: 5
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ))
  }

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Depoimentos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Veja o que nossos franqueados e clientes falam sobre as soluções do Grupo GAIAS
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-blue-50/30 max-w-4xl mx-auto">
                      <CardContent className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                          {/* Profile Image */}
                          <div className="flex-shrink-0">
                            <img 
                              src={testimonial.image}
                              alt={`Foto de ${testimonial.name}`}
                              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-4 border-white"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 text-center md:text-left">
                            {/* Stars */}
                            <div className="flex justify-center md:justify-start mb-4">
                              {renderStars(testimonial.rating)}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-lg md:text-xl text-slate-700 mb-6 leading-relaxed italic">
                              "{testimonial.text}"
                            </blockquote>

                            {/* Author */}
                            <div className="border-t border-slate-200 pt-4">
                              <cite className="not-italic">
                                <div className="font-semibold text-slate-900 text-lg">
                                  {testimonial.name}
                                </div>
                                <div className="text-teal-600 font-medium">
                                  {testimonial.role}
                                </div>
                              </cite>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              variant="outline"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-slate-300 bg-white/90 backdrop-blur-sm hover:bg-white hover:border-teal-500 transition-all duration-300"
              aria-label="Anterior"
            >
              ←
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-slate-300 bg-white/90 backdrop-blur-sm hover:bg-white hover:border-teal-500 transition-all duration-300"
              aria-label="Próximo"
            >
              →
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-teal-500 w-8' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-3xl md:text-4xl font-bold">98%</div>
                <div className="text-lg font-medium">Satisfação dos Clientes</div>
                <div className="text-sm opacity-90">Avaliação média das soluções</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl md:text-4xl font-bold">150+</div>
                <div className="text-lg font-medium">Franqueados Ativos</div>
                <div className="text-sm opacity-90">Em todo território nacional</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl md:text-4xl font-bold">200%</div>
                <div className="text-lg font-medium">ROI Médio</div>
                <div className="text-sm opacity-90">Retorno sobre investimento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}