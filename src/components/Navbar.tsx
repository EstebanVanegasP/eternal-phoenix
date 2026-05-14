import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand, navItems } from "../data/landingContent";

const sectionIds = navItems
  .filter((item) => !item.external)
  .map((item) => item.href.replace("#", ""));

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.12, 0.35, 0.6] },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="site-nav" aria-label="Navegación principal">
        <a className="brand-mark" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-sigil">EPX</span>
          <span>
            <strong>{brand.name}</strong>
            <small>{brand.seal}</small>
          </span>
        </a>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className={
                activeSection === item.href.replace("#", "") ? "active" : ""
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
