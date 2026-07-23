import type { Skill } from '../../data/skills'
import styles from './SkillCard.module.css'

interface SkillCardProps {
  skill: Skill
}

function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon

  return (
    <article className={styles.card}>
      <div className={styles.icon}>
        <Icon />
      </div>

      <div>
        <h3>{skill.name}</h3>
        <span>{skill.category}</span>
      </div>
    </article>
  )
}

export default SkillCard