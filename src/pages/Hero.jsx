import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Sherwind Anjalin</h1>
          <h2>Web Developer</h2>
          <p>"Building interactive and modern web solutions with passion."</p>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="123123123.jpeg" alt="Sherwind Anjalin" /> 
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
