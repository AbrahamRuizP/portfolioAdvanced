import { skills } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Label } from "./Label";

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div ref={ref} className="fade-in-section">
          <div className="row mb-5">
            <div className="col">

              <Label title="Skills"/>

              <h2 className="section-title">Tools of the trade</h2>
            </div>
          </div>

          <div className="row g-4">
            {skills.map((group, i) => (
              
              <div key={i} className="col-sm-6 col-md-4">
                <div className="skill-group">
                  <p className="skill-category">{group.category}</p>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
