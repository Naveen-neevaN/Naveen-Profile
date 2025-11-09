import { motion } from 'framer-motion'
import Image from 'next/image'
import { BsGithub, BsGlobe } from 'react-icons/bs'

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-card group"
    >
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-2 py-1 text-sm rounded-full bg-accent/10 text-accent"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-accent dark:text-gray-300 dark:hover:text-accent-light"
          >
            <BsGithub className="w-5 h-5" />
            <span>Code</span>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-accent dark:text-gray-300 dark:hover:text-accent-light"
          >
            <BsGlobe className="w-5 h-5" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A description of your first project',
      image: '/images/project1.jpg',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1.com'
    },
    // Add more projects here
  ]

  return (
    <section id="projects" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects