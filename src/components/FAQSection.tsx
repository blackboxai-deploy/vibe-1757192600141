'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

export default function FAQSection() {
  const faqs = [
    {
      id: 'faq-1',
      question: 'Preciso ter conhecimento técnico para ser um franqueado?',
      answer: 'Não. O Grupo GAIAS oferece todo o treinamento e suporte necessários. Nossa metodologia é desenvolvida para que pessoas sem formação técnica possam operar com sucesso todas as soluções de IA. Você receberá capacitação completa em vendas, gestão e uso das tecnologias.'
    },
    {
      id: 'faq-2',
      question: 'Qual o investimento inicial para ser franqueado?',
      answer: 'O investimento varia conforme o plano escolhido, mas é acessível e com retorno rápido, já que o mercado de IA está em alta demanda. Durante a reunião de apresentação, apresentaremos todas as opções de investimento e projeção de retorno personalizada para seu perfil.'
    },
    {
      id: 'faq-3',
      question: 'Quanto tempo leva para iniciar a operação?',
      answer: 'Após a assinatura do contrato e conclusão do treinamento, em poucos dias você já poderá começar a atender empresas em sua região. O processo completo desde o primeiro contato até o início da operação leva entre 15 a 30 dias.'
    },
    {
      id: 'faq-4',
      question: 'Posso trabalhar em home office?',
      answer: 'Sim! O modelo de franquia do Grupo GAIAS é totalmente digital, permitindo que você opere de onde quiser. Todas as ferramentas, treinamentos e suporte são online. Você só precisará fazer visitas aos clientes quando necessário.'
    },
    {
      id: 'faq-5',
      question: 'Como funciona o suporte ao franqueado?',
      answer: 'Você terá acesso a suporte técnico e estratégico contínuo através de múltiplos canais: WhatsApp, plataforma online, webinars semanais e uma comunidade ativa de franqueados para trocar experiências. Nosso time está disponível para ajudar em vendas, implementação técnica e crescimento do negócio.'
    },
    {
      id: 'faq-6',
      question: 'Qual o diferencial das soluções GAIAS no mercado?',
      answer: 'Nosso diferencial está na simplicidade, eficácia e suporte. Enquanto outras empresas oferecem soluções complexas, nós democratizamos a IA com ferramentas fáceis de usar que geram resultados reais. Além disso, nossos franqueados recebem suporte completo e atualizações constantes das tecnologias.'
    },
    {
      id: 'faq-7',
      question: 'Existe exclusividade territorial?',
      answer: 'Sim, trabalhamos com territórios exclusivos para garantir que cada franqueado tenha seu mercado protegido. O tamanho do território varia conforme a densidade populacional e potencial de mercado da região.'
    },
    {
      id: 'faq-8',
      question: 'Quais são as principais fontes de receita?',
      answer: 'Como franqueado, você terá múltiplas fontes de receita: implementação do CVL, desenvolvimento e manutenção de assistentes de IA para WhatsApp, licenciamento do ERP GAIAS, consultoria em automação e treinamentos. Isso garante diversificação e estabilidade financeira.'
    }
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Perguntas Frequentes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre como se tornar um franqueado do Grupo GAIAS
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="border border-slate-200 rounded-lg px-6 py-2 hover:border-teal-300 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 text-slate-900 font-semibold hover:text-teal-600 transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-teal-100">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Nossa equipe está pronta para esclarecer todas as suas questões sobre o programa de franquias
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a franquia do Grupo GAIAS."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">📱</span>
                  Falar no WhatsApp
                </a>
                <a 
                  href="mailto:contato@grupoGAIAS.com.br"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white font-semibold rounded-xl transition-all duration-300"
                >
                  <span className="mr-2">📧</span>
                  Enviar E-mail
                </a>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-slate-100">
              <div className="text-2xl font-bold text-teal-600 mb-2">15min</div>
              <div className="text-sm text-slate-600">Tempo médio de resposta</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-slate-100">
              <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-slate-600">Taxa de resposta</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-slate-100">
              <div className="text-2xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-sm text-slate-600">Suporte disponível</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-slate-100">
              <div className="text-2xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-slate-600">Satisfação no atendimento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}