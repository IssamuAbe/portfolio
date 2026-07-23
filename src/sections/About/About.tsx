import SectionTitle from '../../components/SectionTitle/SectionTitle'
import styles from './About.module.css'

const timeline = [
  {
    year: '2014',
    title: 'Professor de Inglês',
    description:
      'Início da trajetória profissional com foco em comunicação, didática e desenvolvimento de pessoas.',
  },
  {
    year: '2018',
    title: 'Coordenação Pedagógica',
    description:
      'Atuação em liderança, treinamento de equipes, acompanhamento de resultados e organização de processos.',
  },
  {
    year: '2026',
    title: 'Suporte SAP Business One',
    description:
      'Entrada na área de tecnologia, trabalhando com investigação de erros, APIs, atendimento e processos corporativos.',
  },
  {
    year: 'Hoje',
    title: 'Front-End Developer',
    description:
      'Desenvolvimento de interfaces modernas com React, TypeScript, Next.js e boas práticas de engenharia de software.',
  },
]

function About() {
  return (
    <section id="sobre" className={`section ${styles.about}`}>
      <div className="container">
        <SectionTitle
          eyebrow="Sobre mim"
          title="Minha trajetória até a tecnologia"
          description="Uma combinação de comunicação, liderança, resolução de problemas e desenvolvimento de aplicações."
        />

        <div className={styles.grid}>
          <div className={styles.content}>
            <p>
              Sou um desenvolvedor Front-End em formação, com experiência em
              React, TypeScript, Next.js e desenvolvimento de aplicações web
              responsivas.
            </p>

            <p>
              Minha trajetória profissional começou na educação, onde
              desenvolvi habilidades de comunicação, liderança e organização.
              Hoje, aplico essas competências em tecnologia e no suporte SAP
              Business One.
            </p>

            <p>
              Meu objetivo é criar soluções claras, eficientes e centradas no
              usuário, sempre buscando evolução técnica e aprendizado
              contínuo.
            </p>
          </div>

          <div className={styles.timeline}>
            {timeline.map((item) => (
              <article key={`${item.year}-${item.title}`} className={styles.item}>
                <div className={styles.marker}>
                  <span />
                </div>

                <div className={styles.itemContent}>
                  <span className={styles.year}>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About