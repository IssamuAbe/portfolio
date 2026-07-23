export interface Experience {
  id: number
  period: string
  role: string
  company: string
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    period: '2026 — Atual',
    role: 'Estagiário de Suporte SAP Business One',
    company: 'Manyminds',
    description:
      'Atuação no suporte a usuários e investigação de ocorrências relacionadas ao SAP Business One, integrações, permissões e processos empresariais.',
    highlights: [
      'Análise inicial de chamados',
      'Investigação de erros e permissões',
      'Contato com APIs REST e Postman',
      'Apoio em processos corporativos',
    ],
  },
  {
    id: 2,
    period: '2018 — 2026',
    role: 'Coordenador Pedagógico',
    company: 'CNA',
    description:
      'Responsável por liderança de equipe, acompanhamento de indicadores, treinamento de professores e organização de processos pedagógicos.',
    highlights: [
      'Liderança e desenvolvimento de equipes',
      'Treinamento de professores',
      'Acompanhamento de resultados',
      'Organização de projetos e eventos',
    ],
  },
  {
    id: 3,
    period: '2014 — Atual',
    role: 'Professor de Inglês',
    company: 'Ensino de idiomas',
    description:
      'Experiência com ensino de inglês para diferentes perfis, com foco em comunicação, planejamento e desenvolvimento individual.',
    highlights: [
      'Comunicação clara',
      'Planejamento de aulas',
      'Atendimento personalizado',
      'Inglês avançado',
    ],
  },
]