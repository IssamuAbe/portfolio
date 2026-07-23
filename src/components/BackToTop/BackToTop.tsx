import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import styles from './BackToTop.module.css'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 600)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      className={`${styles.button} ${
        visible ? styles.visible : ''
      }`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
    >
      <FaArrowUp />
    </button>
  )
}

export default BackToTop