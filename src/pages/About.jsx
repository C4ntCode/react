import { motion } from 'framer-motion';

const About = () => {
  const skills = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Git'];

  return (
    <section className="about">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <p className="about-text">
          I'm a passionate Web Developer with a keen eye for design and a 
          love for creating intuitive user experiences. With several years of 
          experience in web development, I specialize in building modern, 
          responsive web applications.
        </p>
        
        <div className="skills">
          <h3>Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
