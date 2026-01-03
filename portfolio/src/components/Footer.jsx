import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Left */}
        <div className="footer-left">
          <h3>Thiruwin Karthik</h3>
          <p>
            Aspiring Software Engineer <br />
            Full Stack & AI Developer
          </p>
        </div>

        {/* Center */}
        <div className="footer-center">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right */}
        <div className="footer-right">
          <a
            href="mailto:thiruwintheri@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/thiuwinkarthik"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/thiruwin-karthik"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Thiruwin Theri. All rights reserved.
      </div>
    </footer>
  );
}
