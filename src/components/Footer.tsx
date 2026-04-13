import { GithubIcon } from "../data/GithubIcon";
import { LinkedinIcon } from "../data/LinkedinIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-name">Abraham Ruiz</p>

        <div className="footer-socials">
          <a
            href="https://github.com/AbrahamRuizP"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/abraham-ruiz-pestana/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </div>

        <p className="footer-copy">
          © {year} Abraham Ruiz — All rights reserved
        </p>
      </div>
    </footer>
  );
}
