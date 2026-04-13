import { useState, FormEvent } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { GithubIcon } from "../data/GithubIcon";
import { Label } from "./Label";
import { LinkedinIcon } from "../data/LinkedinIcon";

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

              <Label title="Contact" />

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
                    <GithubIcon />
                  </div>
                  <div>
                    <p className="contact-info-label">GitHub</p>
                    <a
                      href="https://github.com/AbrahamRuizP"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-info-value"
                      style={{ transition: "var(--transition)" }}
                    >
                      AbrahamRuizP
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <LinkedinIcon />
                  </div>
                  <div>
                    <p className="contact-info-label">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/abraham-ruiz-pestana/"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-info-value"
                      style={{ transition: "var(--transition)" }}
                    >
                      Abraham Ruiz
                    </a>
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
