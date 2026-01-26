export default function ProjectCard({ project, onClick }) {
  return (
    <div className="glass-card" onClick={onClick}>
      <h3>{project.title}</h3>
      <p><b>Tech:</b> {project.tech.join(", ")}</p>
      <p>{project.description}</p>
    </div>
  );
}
