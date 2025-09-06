'use client'

import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

export default function FranchiseSection() {
  const benefits = [
    {
      icon: '📈',
      title: 'Mercado em expansão',
      description: 'IA é a tecnologia que mais cresce no mundo e está ao alcance de todos os negócios'
    },
    {
      icon: '✅',
      title: 'Modelo validado',
      description: 'Soluções testadas e aprovadas por empresas em diversos segmentos'
    },
    {
      icon: '💰',
      title: 'Rentabilidade atrativa',
      description: 'Múltiplas fontes de receita em cada um dos 3 pilares'
    },
    {
      icon: '💻',
      title: 'Baixo custo de operação',
      description: 'Modelo digital que dispensa grandes estruturas físicas'
    },
    {
      icon: '🚀',
      title: 'Inovação contínua',
      description: 'Atualização constante das soluções para manter competitividade'
    },
    {
      icon: '🏠',
      title: 'Trabalhe de casa',
      description: 'Modelo 100% digital permite operação remota'
    }
  ]

  const supportFeatures = [
    {
      icon: '🎓',
      title: 'Treinamento completo',
      description: 'Capacitação em vendas, gestão e tecnologia'
    },
    {
      icon: '🎨',
      title: 'Materiais de marketing',
      description: 'Kit completo pronto para uso'
    },
    {
      icon: '🛠️',
      title: 'Suporte técnico',
      description: 'Especializado em todas as etapas'
    },
    {
      icon: '👥',
      title: 'Comunidade ativa',
      description: 'Rede de franqueados para troca de experiências'
    }
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Preencha o formulário',
      description: 'Demonstre seu interesse em ser franqueado'
    },
    {
      step: '2', 
      title: 'Reunião de apresentação',
      description: 'Conheça o modelo de negócio detalhadamente'
    },
    {
      step: '3',
      title: 'Avalie investimento',
      description: 'Analise plano de investimento e retorno'
    },
    {
      step: '4',
      title: 'Assine o contrato',
      description: 'Formalize sua parceria conosco'
    },
    {
      step: '5',
      title: 'Treinamento inicial',
      description: 'Receba capacitação e kit inicial'
    },
    {
      step: '6',
      title: 'Comece a operar',
      description: 'Inicie operação e geração de resultados'
    }
  ]

  return (
    <section id="franquia" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Franquia Grupo GAIAS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Seja parte da revolução da Inteligência Artificial e transforme sua carreira empreendedora
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cba20804-a0fe-4882-9d02-4d87eeab1c40.png" 
                alt="Rede de parceiros franqueados conectados por todo o Brasil com tecnologia digital e soluções de IA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Conecte-se ao Futuro dos Negócios
                  </h3>
                  <p className="text-lg opacity-90">
                    Faça parte da maior rede de franquias de IA do Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Be a Franchisee */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">
              Por que ser um franqueado?
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">{benefit.icon}</div>
                    <h4 className="font-semibold text-slate-900 mb-3">{benefit.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div className="mb-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">
              Suporte Completo ao Franqueado
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportFeatures.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">
              Processo para se tornar franqueado
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-teal-500 to-blue-600 hidden md:block"></div>
                
                <div className="space-y-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}>
                      {/* Step Content */}
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                        <Card className="border-0 shadow-lg bg-white">
                          <CardContent className="p-6">
                            <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                            <p className="text-slate-600 text-sm">{step.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      {/* Step Number */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg md:relative md:left-0 md:transform-none order-first md:order-none">
                        {step.step}
                      </div>
                      
                      {/* Spacer */}
                      <div className="md:w-1/2 hidden md:block"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para começar sua jornada?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Junte-se ao Grupo GAIAS e faça parte da transformação digital dos negócios brasileiros
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-teal-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Quero ser um franqueado
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}