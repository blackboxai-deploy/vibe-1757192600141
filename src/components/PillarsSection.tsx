'use client'

import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

export default function PillarsSection() {
  const pillars = [
    {
      id: 'cvl',
      title: 'CVL – Código da Visibilidade Lucrativa',
      description: 'Mais clientes, mais faturamento e presença digital inteligente.',
      longDescription: 'O CVL é um método exclusivo que ajuda empresas a atraírem clientes e conquistarem visibilidade online. Por meio de estratégias baseadas em dados e IA, o CVL posiciona empresas de forma correta no maior motor de busca do mundo.',
      benefits: [
        'Mais clientes descobrindo sua marca',
        'Aumento de faturamento com baixo custo',
        'Resultados rápidos e mensuráveis'
      ],
      icon: '🎯',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'whatsapp-ai',
      title: 'Agentes e Assistentes de IA no WhatsApp',
      description: 'Atendimento e vendas 24h, com agentes inteligentes como a Vitória.',
      longDescription: 'Imagine ter uma vendedora incansável, disponível 24h por dia, 7 dias por semana, atendendo clientes, tirando dúvidas e fechando vendas diretamente no WhatsApp. Esse é o papel de nossas Agentes de IA, como a Vitória.',
      benefits: [
        'Atendimento imediato e sem limitações de horário',
        'Aumento nas taxas de conversão de vendas',
        'Redução de custos com equipes grandes de suporte'
      ],
      icon: '🤖',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'erp',
      title: 'GAIAS ERP – Gestão Automatizada com IA',
      description: 'Gestão completa e automatizada com inteligência artificial.',
      longDescription: 'Nosso ERP online foi criado para ser simples, acessível e poderoso, integrando todas as áreas de gestão empresarial em um só lugar. Do financeiro às vendas, da emissão de notas fiscais ao controle de estoque.',
      benefits: [
        'Controle total e centralizado do negócio',
        'Economia de tempo e redução de retrabalho',
        'Insights e relatórios inteligentes para decisões estratégicas'
      ],
      icon: '📊',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50'
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="solucoes" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Nossos 3 Pilares de Soluções
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Tecnologias avançadas de IA que transformam a forma como empresas operam, vendem e crescem no mercado digital.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {pillars.map((pillar, index) => (
              <Card key={pillar.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${pillar.color}`}></div>
                <CardContent className="p-8">
                  {/* Icon & Title */}
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 ${pillar.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{pillar.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-teal-600 font-semibold mb-4">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Long Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    {pillar.longDescription}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-slate-900 text-sm mb-3">Benefícios principais:</h4>
                    {pillar.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={() => scrollToSection('franquia')}
                    className={`w-full bg-gradient-to-r ${pillar.color} hover:shadow-lg text-white font-semibold transition-all duration-300`}
                  >
                    Saiba mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Button 
              onClick={() => scrollToSection('franquia')}
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Saiba mais sobre cada solução
            </Button>
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-slate-700 font-medium">Automatizadas com IA</div>
                <div className="text-sm text-slate-600">Soluções inteligentes</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-slate-700 font-medium">Disponibilidade</div>
                <div className="text-sm text-slate-600">Atendimento contínuo</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  ROI+
                </div>
                <div className="text-slate-700 font-medium">Retorno Garantido</div>
                <div className="text-sm text-slate-600">Resultados mensuráveis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}