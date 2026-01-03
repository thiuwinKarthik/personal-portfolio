import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about-section">
      {/* Header */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          Aspiring software engineer with hands-on experience in building
          full-stack and AI-powered applications that solve real-world problems.
        </p>
      </motion.div>

      {/* Content */}
      <div className="about-grid">
        {/* Education */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>🎓 Education</h3>
          <p className="title">
            Bachelor of Engineering – Computer Science
          </p>
          <p>
            Dr. Mahalingam College of Engineering and Technology
            <br />
            Pollachi
          </p>
          <span className="meta">Expected Graduation: May 2027</span>
        </motion.div>

        {/* Internship */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>💼 Internship</h3>
          <p className="title">
            Web Development Intern – NEHA Solutions
          </p>
          <p>
            Worked on building responsive web applications and implementing
            backend integrations using modern frameworks.
          </p>
          <span className="meta">June 2025</span>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>📜 Certifications</h3>
          <ul>
            <li>Fundamentals of Python – SpringBoard</li>
            <li>Networking Essentials – Cisco</li>
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>🏆 Achievements</h3>
          <p>
            1st Place – Inter-College Coding Event
          </p>
          <span className="meta">
            Recognized for problem-solving and algorithmic skills
          </span>
        </motion.div>
      </div>
    </section>
  );
}
