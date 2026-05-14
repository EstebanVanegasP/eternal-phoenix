import { brand, formUrl, navItems } from "../data/landingContent";
import { GlowButton } from "./GlowButton";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <span className="footer-sigil">EPX</span>
          <h2>{brand.name}</h2>
          <p>{brand.seal}</p>
        </div>

        <div className="footer-links" aria-label="Enlaces internos">
          {navItems
            .filter((item) => !item.external)
            .map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
        </div>

        <div className="footer-cta">
          <GlowButton href={formUrl} external>
            Postularme al Equipo Pro
          </GlowButton>
        </div>
      </div>
      <div className="container footer-disclaimer">
        <p>{brand.disclaimer}</p>
      </div>
    </footer>
  );
}
