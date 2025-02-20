import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt, FaNode } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, level: '90%' },
    { name: 'JavaScript', icon: <FaJs />, level: '85%' },
    { name: 'HTML5', icon: <FaHtml5 />, level: '95%' },
    { name: 'CSS3', icon: <FaCss3 />, level: '90%' },
    { name: 'Node.js', icon: <FaNode />, level: '80%' },
    { name: 'Git', icon: <FaGitAlt />, level: '85%' }
  ];

  return (
    <section className="about">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-header">
          <h2>About Me</h2>
          <div className="header-line"></div>
        </div>

        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p>
              I'm a passionate Web Developer crafting modern digital experiences. 
              With expertise in frontend technologies, I transform ideas into 
              intuitive and responsive web applications.
            </p>
          </motion.div>

          <motion.div 
            className="skills-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3>Technical Expertise</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="skill-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: skill.level }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
