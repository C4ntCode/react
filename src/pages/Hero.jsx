import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="name-tag">
            <span className="tag">Welcome</span>
          </motion.div>
          <motion.h1>
            Crafting Digital
            <span className="highlight"> Experiences</span>
          </motion.h1>
          <motion.p>
            Frontend Developer specializing in building exceptional digital experiences that combine creativity with technical precision
          </motion.p>
          <motion.div className="cta-container">
            <button className="cta-primary">See My Work</button>
            <div className="social-links">
              <span className="social-dot"></span>
              <span>Available for projects</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="geometric-shape"></div>
          <div className="profile-container">
            <img src="123123123.jpeg" alt="Profile" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
