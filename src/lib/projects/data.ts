import type { ProjectCard } from '@/types'

export const PROJECTS: ProjectCard[] = [
  {
    id: 'residencia-rondon-01',
    title: 'Residência Unifamiliar',
    location: 'Marechal Cândido Rondon, PR',
    area: 148,
    image: '/images/projects/residencia-rondon-01/cover.jpg',
    tags: ['Residencial', 'Steel Frame'],
  },
  {
    id: 'residencia-rondon-02',
    title: 'Casa Compacta',
    location: 'Marechal Cândido Rondon, PR',
    area: 72,
    image: '/images/projects/residencia-rondon-02/cover.jpg',
    tags: ['Residencial', 'Steel Frame'],
  },
  {
    id: 'comercial-cascavel-01',
    title: 'Loja Comercial',
    location: 'Cascavel, PR',
    area: 220,
    image: '/images/projects/comercial-cascavel-01/cover.jpg',
    tags: ['Comercial', 'Steel Frame'],
  },
]

export const PROJECT_TAGS = ['Todos', 'Residencial', 'Comercial', 'Steel Frame'] as const

export type ProjectTag = (typeof PROJECT_TAGS)[number]
