import { Card, CardContent } from './ui/card'

export default function AboutSection() {
  const values = [
    {
      icon: '🚀',
      title: 'Inovação com propósito',
      description: 'Desenvolvemos soluções que realmente transformam negócios e geram resultados.'
    },
    {
      icon: '🤝',
      title: 'Transparência',
      description: 'Relacionamentos baseados em confiança, clareza e comunicação honesta.'
    },
    {
      icon: '💎',
      title: 'Valorização do empreendedor',
      description: 'Cada franqueado é um parceiro estratégico em nossa jornada de crescimento.'
    },
    {
      icon: '⚡',
      title: 'Alta performance',
      description: 'Excelência em resultados, tecnologia e atendimento em tudo que fazemos.'
    }
  ]

  return (
    <section id="quem-somos" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Quem Somos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  O <strong className="text-teal-600">Grupo GAIAS</strong> nasceu com a missão de democratizar o acesso a soluções de{' '}
                  <strong className="text-blue-600">Inteligência Artificial para empresas e empreendedores</strong> em todo o Brasil.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Somos uma <strong>franqueadora inovadora</strong>, que reúne tecnologia, estratégia e suporte de ponta para que nossos franqueados ofereçam serviços inteligentes que transformam negócios.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Nosso nome carrega propósito: <strong className="text-teal-600">GAIAS significa Gestão Avançada com Inteligência Artificial e Sistemas</strong>, refletindo a essência de nossa atuação.
                </p>
              </div>

              {/* Mission, Vision */}
              <div className="space-y-4 pt-4">
                <div className="p-4 bg-white rounded-lg border-l-4 border-teal-500 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-2">Nossa Missão</h3>
                  <p className="text-slate-700">
                    Levar inovação, eficiência e crescimento sustentável a empresas por meio de soluções inteligentes e acessíveis.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-2">Nossa Visão</h3>
                  <p className="text-slate-700">
                    Ser reconhecido como o maior ecossistema de franquias de inteligência artificial para negócios no Brasil.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/efb64589-a252-40aa-9c27-ae41e4850531.png" 
                  alt="Equipe profissional colaborando com tecnologia e soluções de IA em ambiente corporativo moderno"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-blue-600/20"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">IA</span>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Tecnologia</div>
                    <div className="font-semibold text-slate-900">Avançada</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16 md:mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-8">
              Nossos Valores
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h4 className="font-semibold text-slate-900 mb-3">{value.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}