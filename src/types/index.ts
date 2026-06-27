export type Section =
  | 'header'
  | 'hero'
  | 'intro'
  | 'steel-frame'
  | 'comparativo'
  | 'servicos'
  | 'processo'
  | 'projetos'
  | 'numeros'
  | 'depoimentos'
  | 'videos'
  | 'faq'
  | 'cta'
  | 'localizacao'
  | 'lgpd'
  | 'footer'

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type AnimationVariant = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale'

export type WhatsAppSource =
  | 'hero'
  | 'orcamento'
  | 'comparativo'
  | 'projetos'
  | 'faq'
  | 'footer'

export type NavItem = {
  label: string
  href: string
  external?: boolean
}

export type ProjectCard = {
  id: string
  title: string
  location: string
  area: number
  image: string
  tags: string[]
}

export type Testimonial = {
  id: string
  name: string
  role: string
  location: string
  text: string
  avatar?: string
  rating: 1 | 2 | 3 | 4 | 5
}

export type FAQItem = {
  id: string
  question: string
  answer: string
}

export type Metric = {
  value: string
  unit?: string
  label: string
  description?: string
}
