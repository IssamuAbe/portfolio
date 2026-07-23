import { stats } from '../../data/stats'
import styles from './Stats.module.css'

function Stats() {
  return (
    <section className={styles.stats} aria-label="Resumo profissional">
      <div className={`container ${styles.container}`}>
        {stats.map((stat) => (
          <article key={stat.label} className={styles.card}>
            <strong>{stat.value}</strong>

            <div>
              <h2>{stat.label}</h2>
              <p>{stat.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Stats