import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'
import profileIllustration from '../../assets/images/profile-illustration.png'
import { profile } from '../../data/profile'
import styles from './Hero.module.css'

const floatingTechnologies = [
  { name: 'React', className: styles.techReact },
  { name: 'TypeScript', className: styles.techTypeScript },
  { name: 'Next.js', className: styles.techNext },
  { name: 'SAP B1', className: styles.techSap },
  { name: 'REST API', className: styles.techApi },
]

function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Front-End Developer & SAP Business One Support
          </span>

          <h1>
            Olá, eu sou
            <strong>Issamu Abe</strong>
          </h1>

          <p className={styles.highlight}>
            Construindo aplicações modernas com foco em usabilidade,
            performance e resolução de problemas.
          </p>

          <p className={styles.description}>
            Desenvolvo interfaces responsivas com React, TypeScript e Next.js.
            Atualmente também atuo com suporte SAP Business One, APIs REST e
            investigação de ocorrências em ambientes corporativos.
          </p>

          <div className={styles.actions}>
            <a href="#projetos" className={styles.primaryButton}>
              Ver projetos
            </a>

            <a
              href="/curriculo-issamu.pdf"
              download
              className={styles.secondaryButton}
            >
              Download CV
            </a>
          </div>

          <div className={styles.socialLinks}>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Issamu Abe"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Issamu Abe"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Enviar e-mail para Issamu Abe"
            >
              <FaEnvelope />
              E-mail
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.glow} />

          <div className={styles.imageWrapper}>
            <img
              src={profileIllustration}
              alt="Ilustração profissional de Issamu Abe"
              className={styles.profileImage}
            />
          </div>

          {floatingTechnologies.map((technology) => (
            <span
              key={technology.name}
              className={`${styles.floatingTech} ${technology.className}`}
            >
              {technology.name}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#sobre"
        className={styles.scrollIndicator}
        aria-label="Ir para a seção Sobre mim"
      >
        <span />
        Role para explorar
      </a>
    </section>
  )
}

export default Hero