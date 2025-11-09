import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent dark:text-gray-300 dark:hover:text-accent-light"
            >
              <BsGithub className="w-5 h-5" />
            </a>
            
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent dark:text-gray-300 dark:hover:text-accent-light"
            >
              <BsLinkedin className="w-5 h-5" />
            </a>
            
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent dark:text-gray-300 dark:hover:text-accent-light"
            >
              <BsTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer