import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'

const links = [
  { label: 'Início', href: '#inicio', id: 'inicio' },
  { label: 'Sobre', href: '#sobre', id: 'sobre' },
  { label: 'Projetos', href: '#projetos', id: 'projetos' },
  { label: 'Habilidades', href: '#habilidades', id: 'habilidades' },
  { label: 'Experiência', href: '#experiencia', id: 'experiencia' },
  { label: 'Contato', href: '#contato', id: 'contato' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)

      const scrollPosition = window.scrollY + 180

      for (let index = links.length - 1; index >= 0; index -= 1) {
        const section = document.getElementById(links[index].id)

        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(links[index].id)
          break
        }
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.headerScrolled : ''
      }`}
    >
      <div className={`container ${styles.container}`}>
        <a href="#inicio" className={styles.logo} onClick={closeMenu}>
          Issamu<span>.</span>
        </a>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen((currentState) => !currentState)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav
          className={`${styles.navigation} ${
            menuOpen ? styles.navigationOpen : ''
          }`}
          aria-label="Navegação principal"
        >
          <ul className={styles.menu}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={
                    activeSection === link.id ? styles.activeLink : ''
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header