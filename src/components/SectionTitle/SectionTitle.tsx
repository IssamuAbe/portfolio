import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  eyebrow: string
  title: string
  description?: string
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.eyebrow}>{eyebrow}</span>

      <h2>{title}</h2>

      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle