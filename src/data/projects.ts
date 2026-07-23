export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image?: string
  imageAlt?: string
  githubUrl: string
  demoUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Micro Frontends Food',
    description:
      'Aplicação de pedidos desenvolvida com arquitetura de Micro Frontends, utilizando Webpack Module Federation para integrar módulos independentes.',
    technologies: [
      'React',
      'Webpack',
      'Module Federation',
      'JavaScript',
    ],
    image: '/projects/microfrontend-food.png',
    imageAlt:
      'Tela do projeto Micro Frontends Food com cardápio e painel de pedidos',
    githubUrl:
      'https://github.com/IssamuAbe/microfrontend-food',
    featured: true,
  },
  {
    id: 2,
    title: 'Portal de Viagens',
    description:
      'Portal responsivo de destinos turísticos com navegação entre páginas, cards informativos e interface focada em experiência do usuário.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'CSS',
    ],
    image: '/projects/portal-viagens.png',
    imageAlt:
      'Página de destinos turísticos do projeto Portal de Viagens',
    githubUrl:
      'https://github.com/IssamuAbe/portal-de-viagens',
    featured: true,
  },
  {
    id: 3,
    title: 'Diário de Bordo PWA',
    description:
      'Aplicação web progressiva para registrar experiências de viagem, com suporte offline, manifest e Service Worker.',
    technologies: [
      'JavaScript',
      'PWA',
      'Service Worker',
      'HTML',
      'CSS',
    ],
    image: '/projects/diario-de-bordo-pwa.png',
    imageAlt:
      'Tela principal do projeto Diário de Bordo PWA',
    githubUrl:
      'https://github.com/IssamuAbe/Diario-de-bordo.git',
    featured: true,
  },
]