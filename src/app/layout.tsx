import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Grupo GAIAS - Inteligência Artificial para Negócios',
  description: 'O Grupo GAIAS é a franqueadora que democratiza o acesso às soluções de IA para empresas e empreendedores em todo o Brasil.',
  keywords: 'inteligência artificial, franquia, IA, negócios, CVL, ERP, WhatsApp, automação',
  authors: [{ name: 'Grupo GAIAS' }],
  openGraph: {
    title: 'Grupo GAIAS - Inteligência Artificial para Negócios',
    description: 'Transforme negócios com soluções de IA. Seja um franqueado e democratize a tecnologia.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grupo GAIAS - Inteligência Artificial para Negócios',
    description: 'Transforme negócios com soluções de IA. Seja um franqueado e democratize a tecnologia.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  )
}