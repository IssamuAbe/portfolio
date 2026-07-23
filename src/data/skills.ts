import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiPostman,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

export interface Skill {
  name: string
  category: string
  icon: IconType
}

export const skills: Skill[] = [
  {
    name: 'HTML5',
    category: 'Front-End',
    icon: FaHtml5,
  },
  {
    name: 'CSS3',
    category: 'Front-End',
    icon: FaCss3Alt,
  },
  {
    name: 'JavaScript',
    category: 'Front-End',
    icon: FaJs,
  },
  {
    name: 'TypeScript',
    category: 'Front-End',
    icon: SiTypescript,
  },
  {
    name: 'React',
    category: 'Front-End',
    icon: FaReact,
  },
  {
    name: 'Next.js',
    category: 'Front-End',
    icon: SiNextdotjs,
  },
  {
    name: 'Vite',
    category: 'Ferramentas',
    icon: SiVite,
  },
  {
    name: 'Git',
    category: 'Ferramentas',
    icon: FaGitAlt,
  },
  {
    name: 'Postman',
    category: 'APIs',
    icon: SiPostman,
  },
]