import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Import Hamburger & Close icons
import "./Navbar.css"; // Ensure you have the CSS below

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Enforce Dark Mode permanently on mount
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Thiruwin Karthik</div>

        {/* Hamburger Button (Visible only on Mobile) */}
        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Navigation Links */}
        {/* The 'active' class controls visibility on mobile */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
}