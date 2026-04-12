import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div ref={ref} className="fade-in-section">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <p className="section-label">About</p>
              <h2 className="section-title mb-4">
                Building things<br />
                <em style={{ fontStyle: "italic", color: "var(--text-secondary)", fontSize: "0.85em" }}>that actually work.</em>
              </h2>
              <p className="about-text">
                Software developer with experience building{" "}
                <strong>web applications and data-driven systems</strong> using Java and modern web technologies.
                Strong analytical mindset with a focus on solving complex problems and delivering{" "}
                <strong>scalable, maintainable solutions.</strong>
              </p>
            </div>

            <div className="col-lg-5">
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years of experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4</div>
                  <div className="stat-label">Projects shipped</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2</div>
                  <div className="stat-label">Core industries served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
