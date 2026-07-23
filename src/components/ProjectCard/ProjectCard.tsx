import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import type { Project } from '../../data/projects'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
          />
        ) : (
          <div className={styles.placeholder}>
            <span>{project.title}</span>
          </div>
        )}

        <div className={styles.overlay}>
          <span>{project.featured ? 'Projeto em destaque' : 'Projeto'}</span>
        </div>
      </div>

      <div className={styles.content}>
        <div>
          <span className={styles.label}>
            {project.featured ? 'Projeto em destaque' : 'Projeto'}
          </span>

          <h3>{project.title}</h3>

          <p>{project.description}</p>
        </div>

        <div className={styles.technologies}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className={styles.links}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir repositório do projeto ${project.title}`}
          >
            <FaGithub />
            Código
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir demonstração do projeto ${project.title}`}
            >
              <FaExternalLinkAlt />
              Ver projeto
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard