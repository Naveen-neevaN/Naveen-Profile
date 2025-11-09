import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a full-stack developer with a passion for creating beautiful and functional web applications. 
                With experience in modern web technologies, I focus on delivering high-quality solutions that meet 
                user needs and business objectives.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                My journey in web development started [Your Story]. I've since worked on numerous projects, 
                constantly learning and adapting to new technologies and best practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-accent mb-2">Frontend</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>HTML5 / CSS3</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-accent mb-2">Backend</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About