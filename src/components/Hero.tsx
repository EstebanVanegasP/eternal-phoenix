import { motion } from "framer-motion";
import { Flame, ShieldCheck, Swords } from "lucide-react";
import { brand, formUrl, heroHighlights } from "../data/landingContent";
import { GlowButton } from "./GlowButton";
import { PhoenixEmblem } from "./PhoenixEmblem";

const highlightIcons = [ShieldCheck, Flame, Swords];

export function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-radial" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          >
            {brand.name}
          </motion.h1>
          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.72 }}
          >
            {brand.tagline}
          </motion.p>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.72 }}
          >
            Comunidad de Mobile Legends donde el talento, la disciplina y el
            espíritu de equipo se convierten en progreso competitivo.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.72 }}
          >
            <GlowButton href={formUrl} external>
              Postularme al Equipo Pro
            </GlowButton>
            <GlowButton href="#comunidad" variant="secondary">
              Conocer la Comunidad
            </GlowButton>
          </motion.div>
        </div>

        <div className="hero-visual">
          <PhoenixEmblem />
          <div className="hero-highlight-grid">
            {heroHighlights.map((label, index) => {
              const Icon = highlightIcons[index];
              return (
                <motion.div
                  className="hero-mini-card"
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + index * 0.1, duration: 0.58 }}
                >
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
