import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'
import { profile } from '../../data/profile'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div>
          <a href="#inicio" className={styles.logo}>
            Issamu<span>.</span>
          </a>

          <p>
            Desenvolvido com React, TypeScript e CSS Modules.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.social}>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir perfil no GitHub"
            >
              <FaGithub />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir perfil no LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          <span>
  © {currentYear} {profile.name}
</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer