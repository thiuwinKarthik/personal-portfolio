export default function Modal({ project, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close" onClick={onClose}>×</button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p><b>Tech Stack:</b> {project.tech.join(", ")}</p>
        {project.live && (
          <a href={project.live} target="_blank" className="btn-primary">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
