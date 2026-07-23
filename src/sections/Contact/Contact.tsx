import type { FormEvent } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { profile } from '../../data/profile'
import styles from './Contact.module.css'

function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get('name'))
    const email = String(formData.get('email'))
    const subject = String(formData.get('subject'))
    const message = String(formData.get('message'))

    const emailBody = `
Nome: ${name}
E-mail: ${email}

Mensagem:
${message}
    `.trim()

    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(emailBody)}`

    window.location.href = mailtoLink
  }

  return (
    <section id="contato" className={`section ${styles.contact}`}>
      <div className="container">
        <SectionTitle
          eyebrow="Contato"
          title="Vamos conversar?"
          description="Estou aberto a oportunidades, novos projetos e conexões profissionais."
        />

        <div className={styles.grid}>
          <div className={styles.information}>
            <h3>Entre em contato</h3>

            <p>
              Você pode enviar uma mensagem pelo formulário ou acessar meus
              perfis profissionais.
            </p>

            <div className={styles.links}>
              <a
                href={`mailto:${profile.email}`}
                className={styles.contactLink}
              >
                <FaEnvelope />

                <span>
                  <strong>E-mail</strong>
                  {profile.email}
                </span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
              >
                <FaGithub />

                <span>
                  <strong>GitHub</strong>
                  {profile.github.replace('https://', '')}
                </span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
              >
                <FaLinkedin />

                <span>
                  <strong>LinkedIn</strong>
                  {profile.linkedin.replace('https://', '')}
                </span>
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">Nome</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">E-mail</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="subject">Assunto</label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Assunto da mensagem"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Mensagem</label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Escreva sua mensagem"
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact