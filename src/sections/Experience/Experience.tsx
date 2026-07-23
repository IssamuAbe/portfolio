import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { experiences } from '../../data/experiences'
import styles from './Experience.module.css'

function Experience() {
  return (
    <section id="experiencia" className={`section ${styles.experience}`}>
      <div className="container">
        <SectionTitle
          eyebrow="Experiência"
          title="Uma trajetória baseada em pessoas, processos e tecnologia"
          description="Experiências que fortaleceram minha comunicação, liderança, capacidade analítica e resolução de problemas."
        />

        <div className={styles.list}>
          {experiences.map((experience) => (
            <article key={experience.id} className={styles.card}>
              <div className={styles.period}>
                <span>{experience.period}</span>
              </div>

              <div className={styles.content}>
                <span className={styles.company}>{experience.company}</span>

                <h3>{experience.role}</h3>

                <p>{experience.description}</p>

                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience