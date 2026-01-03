import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((s) => (
          <div className="glass-card text-center" key={s.name}>
            <img src={s.icon} alt={s.name} width={50} height={50} />
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
