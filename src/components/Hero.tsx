// Hero.tsx
import { GithubIcon } from "../data/GithubIcon";
import { DownloadIcon } from "../data/DownloadIcon";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-grid" />
      <div className="hero-glow" />

      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          {/* Text */}
          <div className="col-md-7 hero-content">
            <p className="hero-eyebrow">Software Developer</p>
            <h1 className="hero-name">
              Abraham<br />
              <span>Ruiz.</span>
            </h1>
            <p className="hero-tagline">
              Building scalable web applications and data-driven systems with Java and modern web technologies.
            </p>
            <div className="hero-actions">
              <a
                href="https://github.com/AbrahamRuizP"
                target="_blank"
                rel="noreferrer"
                className="btn-primary-custom"
              >
                <GithubIcon />
                GitHub
              </a>
              <a href="/cv.pdf" download className="btn-outline-custom">
                <DownloadIcon />
                Download CV
              </a>
            </div>
          </div>

          {/* Profile */}
          <div className="col-md-5 hero-profile-col mb-5 mb-md-0">
            <div className="profile-frame">
              <div className="profile-placeholder">
                <img
                  src="/profile.jpg"
                  alt="Abraham"
                  className="rounded-circle img-fluid"
                  style={{ width: '220px', height: '220px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.4,
          animation: "fadeIn 1s ease forwards 1.5s",
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, var(--accent), transparent)",
            animation: "fadeSlideUp 1.5s ease infinite",
          }}
        />
      </div>
    </section>
  );
}
