import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Reveal from './components/Reveal/Reveal'
import About from './sections/About/About'
import Contact from './sections/Contact/Contact'
import Experience from './sections/Experience/Experience'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Stats from './sections/Stats/Stats'
import BackToTop from './components/BackToTop/BackToTop'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Reveal>
          <Stats />
        </Reveal>

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Experience />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

export default App
