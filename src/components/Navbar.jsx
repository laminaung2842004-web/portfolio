import { useEffect, useState } from "react";
import { navLinks, profile } from "../data.js";

export default function Navbar({
  activeSection,
  onNavigate,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <button className="nav__brand" onClick={() => go("home")}>
          <span className="nav__mark" aria-hidden="true">
            {profile.name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </span>
          <span className="nav__name">{profile.name}</span>
        </button>

        <nav
          className={`nav__links ${open ? "nav__links--open" : ""}`}
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav__link ${
                activeSection === link.id ? "is-active" : ""
              }`}
              onClick={() => go(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="nav__controls">
          <button
            className="icon-btn nav__burger"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`burger ${open ? "burger--open" : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
