import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Modal from "../components/Modal";
import { projects } from "../data";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <br></br>
      <div className="grid grid-cols-2">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            project={p}
            onClick={() => setSelected(p)}
          />
        ))}
      </div>

      {selected && (
        <Modal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
