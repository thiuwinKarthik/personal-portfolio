import { useState, useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [darkMode]);

  return (
    <nav>
      <div className="logo">Thiruwin Karthik</div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {darkMode ? <HiSun size={22} /> : <HiMoon size={22} />}
        </button>
      </div>
    </nav>
  );
}
