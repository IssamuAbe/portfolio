import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section id="projetos" className={`section ${styles.projects}`}>
      <div className="container">
        <SectionTitle
          eyebrow="Projetos"
          title="Aplicações que representam minha evolução"
          description="Projetos desenvolvidos durante minha formação, com foco em componentização, responsividade, arquitetura e boas práticas."
        />

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects