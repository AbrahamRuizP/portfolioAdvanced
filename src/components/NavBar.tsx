import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((n) => n.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
      {navItems.map((item, i) => (
        <>
          <button
            key={item.href}
            className={`nav-link-custom ${active === item.href.slice(1) ? "active" : ""}`}
            onClick={() => scrollTo(item.href)}
          >
            {item.label}
          </button>
          {i < navItems.length - 1 && <div className="nav-dot" key={`dot-${i}`} />}
        </>
      ))}
    </nav>
  );
}
