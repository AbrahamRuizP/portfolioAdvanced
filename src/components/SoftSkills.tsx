import { softSkills } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function SoftSkills() {
  const ref = useScrollReveal();

  return (
    <section id="soft-skills" className="soft-skills-section">
      <div className="container">
        <div ref={ref} className="fade-in-section">
          <div className="row mb-5">
            <div className="col-lg-6">
              <p className="section-label">Soft Skills</p>
              <h2 className="section-title">The human side</h2>
            </div>
            <div className="col-lg-6 d-flex align-items-end">
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", fontStyle: "italic", lineHeight: 1.7 }}>
                Technical skills get you hired. These keep you valuable.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              {softSkills.map((skill, i) => (
                <div key={i} className="soft-card">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h3 className="soft-title">{skill.title}</h3>
                    <span className="soft-index">0{i + 1}</span>
                  </div>
                  <p className="soft-quote">{skill.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
