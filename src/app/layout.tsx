import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Bricolage_Grotesque, Inter } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--vm-font-display',
  display: 'swap',
})

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--vm-font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--vm-font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://veritasmetal.com.br'),
  title: {
    default: 'Veritas Metal — Steel Frame Marechal Cândido Rondon | Oeste do Paraná',
    template: '%s | Veritas Metal',
  },
  description:
    'Construção inteligente com Steel Frame em Marechal Cândido Rondon e Oeste do Paraná. Estruturas leves, duráveis e sustentáveis. Solicite seu orçamento.',
  keywords: [
    'steel frame marechal cândido rondon',
    'steel frame oeste do paraná',
    'construção steel frame paraná',
    'estrutura metálica leve marechal rondon',
    'steel frame rondon',
    'construtora steel frame oeste paraná',
  ],
  authors: [{ name: 'Veritas Metal' }],
  creator: 'Veritas Metal',
  publisher: 'Veritas Metal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://veritasmetal.com.br',
    siteName: 'Veritas Metal',
    title: 'Veritas Metal — Construção Inteligente. Engenharia Moderna.',
    description:
      'Steel Frame em Marechal Cândido Rondon e Oeste do Paraná. Estruturas que duram décadas com menor custo e tempo de obra.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Veritas Metal — Steel Frame no Oeste do Paraná',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veritas Metal — Construção Inteligente. Engenharia Moderna.',
    description:
      'Steel Frame em Marechal Cândido Rondon e Oeste do Paraná. Estruturas que duram décadas com menor custo e tempo de obra.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://veritasmetal.com.br',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111111',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${bricolageGrotesque.variable} ${inter.variable} ${GeistMono.variable}`}
    >
      <body>
        <a href="#main-content" className="sr-only">
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  )
}
