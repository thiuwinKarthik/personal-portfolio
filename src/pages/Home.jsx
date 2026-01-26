import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Thiruwin Karthik S
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Aspiring Software Engineer | Full Stack & AI Developer
      </motion.p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#contact" className="btn-secondary">Contact Me</a>
      </div>
    </section>
  );
}
