import { useState, FormEvent } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { GithubIcon } from "../data/GithubIcon";
import { Label } from "./Label";
import { LinkedinIcon } from "../data/LinkedinIcon";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

type FormStatus = "idle" | "sending" | "success" | "error";
type FormData = {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {

  const ref = useScrollReveal();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const limits: Record<string, number> = {
    name: 20,
    email: 50,
    message: 100
  }
  const [isSubmitting, setSubmitting] = useState(false);

  // To messages showing time
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(timer);
    }

  }, [status]);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { name, value } = ev.target;
    const limit = limits[name];
    if (limit) value = truncateOver(value, limit);

    setFormData((prev) => ({
      ...prev, [name]: value
    }));
  }

  const truncateOver = (word: string, position: number): string => {
    return word.slice(0, position);
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    setSubmitting(true);
    setStatus("idle");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setSubmitting(false);
      return;
    }

    try {

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // sending email
      setStatus("success");

      // clean form fields
      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

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
                    value={formData.name}
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
                    value={formData.email}
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
                    value={formData.message}
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
                <Label title="Get In Touch" />
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
