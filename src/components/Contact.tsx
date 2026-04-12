import { useState, FormEvent } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useScrollReveal();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");

    // Simulate API call — replace with your actual endpoint
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div ref={ref} className="fade-in-section">
          <div className="row mb-5">
            <div className="col">
              <p className="section-label">Contact</p>
              <h2 className="section-title">Let's talk</h2>
            </div>
          </div>

          <div className="row g-5 align-items-start">
            {/* Form */}
            <div className="col-lg-7">
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label className="form-label-custom" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control-custom"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label-custom" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control-custom"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label-custom" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control-custom"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary-custom"
                  disabled={status === "sending"}
                  style={{ opacity: status === "sending" ? 0.7 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }}
                >
                  {status === "sending" ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "rotate 1s linear infinite" }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Send message
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="form-status success">
                    ✓ Message sent. I'll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="form-status error">
                    ✕ Please fill in all fields before sending.
                  </div>
                )}
              </form>
            </div>

            {/* Info */}
            <div className="col-lg-5">
              <div className="contact-info">
                <p className="section-label" style={{ marginBottom: "24px" }}>Get in touch</p>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="contact-info-label">Email</p>
                    <p className="contact-info-value">abraham@example.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="contact-info-label">GitHub</p>
                    <a href="https://github.com/AbrahamRuizP" target="_blank" rel="noreferrer" className="contact-info-value" style={{ transition: "var(--transition)" }}>
                      AbrahamRuizP
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="contact-info-label">LinkedIn</p>
                    <p className="contact-info-value">Abraham Ruiz</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="contact-info-label">Languages</p>
                    <p className="contact-info-value">Spanish (Native) · English (B2/C1)</p>
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
