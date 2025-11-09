import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiAmazon,
  SiVercel
} from 'react-icons/si'

type Skill = {
  name: string
  Icon: IconType
  color: string
}

const skills: Skill[] = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', Icon: SiExpress, color: '#000000' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', Icon: SiAmazon, color: '#FF9900' },
  { name: 'Vercel', Icon: SiVercel, color: '#000000' }
]

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass-card flex flex-col items-center p-4"
    >
      <skill.Icon 
        className="w-12 h-12 mb-3" 
        style={{ color: skill.color }}
      />
      <span className="font-medium">{skill.name}</span>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills