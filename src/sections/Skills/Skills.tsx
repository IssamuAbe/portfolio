import SectionTitle from '../../components/SectionTitle/SectionTitle'
import SkillCard from '../../components/SkillCard/SkillCard'
import { skills } from '../../data/skills'
import styles from './Skills.module.css'

function Skills() {
  return (
    <section id="habilidades" className={`section ${styles.skills}`}>
      <div className="container">
        <SectionTitle
          eyebrow="Habilidades"
          title="Tecnologias e competências"
          description="Conhecimentos desenvolvidos ao longo da minha formação e aplicados em projetos práticos."
        />

        <div className={styles.grid}>
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills