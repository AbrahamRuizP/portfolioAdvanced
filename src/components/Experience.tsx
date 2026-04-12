import { experience } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div ref={ref} className="fade-in-section">
          <div className="row mb-5">
            <div className="col">
              <p className="section-label">Experience</p>
              <h2 className="section-title">Where I've worked</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="experience-card">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-4 gap-3">
                  <div>
                    <h3 className="exp-role">{experience.role}</h3>
                  </div>
                  <span className="exp-date">{experience.date}</span>
                </div>

                <ul className="exp-bullets">
                  {experience.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                {/* Tech used */}
                <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <span className="mono" style={{ color: "var(--text-muted)" }}>Stack used</span>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {["Java", "Hilla", "Vaadin", "FileMaker", "SQL"].map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
