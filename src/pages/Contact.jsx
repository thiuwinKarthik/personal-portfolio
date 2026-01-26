import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section">
      {/* Header */}
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Let’s Build Something Great</h2>
        <p>
          I’m open to internships, full-time roles, and exciting projects.
          Feel free to reach out.
        </p>
      </motion.div>

      {/* Contact Card */}
      <motion.div
        className="contact-card glass-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="contact-actions">
          <a href="mailto:thiruwinkarthik4@gmail.com" className="btn-primary">
            <FaEnvelope /> Email Me
          </a>

          <a
            href="https://linkedin.com/in/thiruwin-karthik"
            target="_blank"
            className="btn-secondary"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://github.com/thiuwinkarthik"
            target="_blank"
            className="btn-secondary"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="/resume.pdf"
            download
            className="btn-primary outline"
          >
            <FaFileDownload /> Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
