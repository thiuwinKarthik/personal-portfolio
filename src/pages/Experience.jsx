import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="experience-section">
      {/* Header */}
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Experience</h2>
        <p>
          Real-world development experience building scalable and production-ready
          applications.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="timeline">
        <motion.div
          className="timeline-card glass-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="timeline-header">
            <h3>Web Development Intern</h3>
            <span className="company">NEHA Solutions</span>
            <span className="duration">June 2025</span>
          </div>

          <ul className="timeline-points">
            <li>
              Developed responsive frontend components using modern JavaScript
              frameworks and best UI practices.
            </li>
            <li>
              Integrated REST APIs and handled dynamic data rendering for
              real-time applications.
            </li>
            <li>
              Collaborated with backend and design teams to deliver
              feature-complete modules on schedule.
            </li>
            <li>
              Improved application performance and usability through clean
              code practices.
            </li>
          </ul>

          <div className="tech-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>REST APIs</span>
            <span>Git</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
