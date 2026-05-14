import { Flame, ScrollText, ShieldCheck } from "lucide-react";
import { ChannelCard } from "./components/ChannelCard";
import { CommunicationToneCard } from "./components/CommunicationToneCard";
import { EmberBackground } from "./components/EmberBackground";
import { FAQ } from "./components/FAQ";
import { FeatureCard } from "./components/FeatureCard";
import { Footer } from "./components/Footer";
import { GlowButton } from "./components/GlowButton";
import { Hero } from "./components/Hero";
import { MotionSection } from "./components/MotionSection";
import { Navbar } from "./components/Navbar";
import { PhoenixEmblem } from "./components/PhoenixEmblem";
import { RequirementChecklist } from "./components/RequirementChecklist";
import { SectionHeading } from "./components/SectionHeading";
import { Timeline } from "./components/Timeline";
import { ValueCard } from "./components/ValueCard";
import {
  aboutMetrics,
  channels,
  communicationTones,
  evidenceItems,
  formUrl,
  participationRoutes,
  ruleStatement,
  values,
} from "./data/landingContent";

function App() {
  return (
    <>
      <EmberBackground />
      <Navbar />
      <main>
        <Hero />

        <MotionSection id="comunidad" className="about-section">
          <div className="container two-column">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Comunidad competitiva"
                title="¿Qué es Eternal Phoenix?"
                description="Eternal Phoenix es una comunidad de Mobile Legends creada para jugadores que quieren crecer, competir y formar parte de algo más grande que una partida."
              />
              <p className="section-copy">
                Aquí reunimos convivencia, reclutamiento, evaluación y formación
                competitiva bajo una misma identidad: el renacer constante del
                jugador.
              </p>
              <div className="metric-grid">
                {aboutMetrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
            </div>

            <div className="emblem-card">
              <PhoenixEmblem compact />
              <div>
                <h3>Entrar. Mejorar. Competir. Representar.</h3>
                <p>
                  Un sistema de participación pensado para ordenar el talento,
                  cuidar la convivencia y abrir camino al juego competitivo.
                </p>
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection id="equipo-pro">
          <div className="container">
            <SectionHeading
              eyebrow="Rutas de participación"
              title="Elige dónde arde tu fuego"
              description="La comunidad abre espacios para convivencia, formación y representación competitiva."
            />
            <div className="feature-grid">
              {participationRoutes.map((route) => (
                <FeatureCard key={route.title} {...route} />
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="proceso" className="process-section">
          <div className="container">
            <SectionHeading
              eyebrow="Camino del jugador"
              title="Del primer registro al roster"
              description="El proceso transforma la postulación en revisión, prueba, seguimiento y posible integración competitiva."
            />
            <Timeline />
          </div>
        </MotionSection>

        <MotionSection id="postulacion" className="requirements-section">
          <div className="container split-panel">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Requisitos de postulación"
                title="Prepara tu ficha antes de entrar al fuego"
                description="El formulario solicita información del perfil de jugador y evidencias para que el staff pueda revisar con más claridad."
              />
              <p className="notice-text">
                El envío del formulario no garantiza aceptación inmediata. La
                revisión depende de evidencias, conducta, disponibilidad y
                desempeño.
              </p>
            </div>
            <RequirementChecklist />
          </div>
        </MotionSection>

        <MotionSection id="evidencias">
          <div className="container evidence-layout">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Evidencias"
                title="No todo se decide por rango"
                description="El proceso de Eternal Phoenix no se basa solo en rango. El staff revisa evidencias, comportamiento, consistencia y comunicación para tomar decisiones más justas."
              />
            </div>
            <div className="evidence-grid">
              {evidenceItems.map((item, index) => (
                <article className="evidence-card" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="reglas" className="rules-section">
          <div className="container">
            <SectionHeading
              eyebrow="Valores y reglas clave"
              title="Competir también es cuidar el espacio"
              description="La identidad de Eternal Phoenix se sostiene en conducta, privacidad y mejora colectiva."
            />
            <div className="value-grid">
              {values.map((value) => (
                <ValueCard key={value.title} {...value} />
              ))}
            </div>
            <aside className="rule-scroll">
              <ScrollText aria-hidden="true" />
              <p>{ruleStatement}</p>
            </aside>
          </div>
        </MotionSection>

        <MotionSection id="canales">
          <div className="container">
            <SectionHeading
              eyebrow="Canales de comunicación"
              title="Una estructura clara para moverse en comunidad"
              description="Cada módulo tiene una función dentro del sistema de convivencia, reclutamiento y actividad social."
            />
            <div className="channel-grid">
              {channels.map((channel) => (
                <ChannelCard key={channel.title} {...channel} />
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="comunicacion" className="communication-section">
          <div className="container">
            <SectionHeading
              eyebrow="Comunicación oficial"
              title="Tres voces para un mismo sello"
              description="Ceremonial para convocar, administrativa para ordenar y cercana para recibir a nuevos jugadores."
            />
            <div className="tone-grid">
              {communicationTones.map((tone) => (
                <CommunicationToneCard key={tone.title} {...tone} />
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="faq">
          <div className="container faq-layout">
            <div>
              <SectionHeading
                align="left"
                eyebrow="FAQ"
                title="Preguntas antes de postular"
                description="Respuestas rápidas para entrar al proceso con expectativas claras."
              />
              <div className="faq-icons" aria-hidden="true">
                <Flame />
                <ShieldCheck />
              </div>
            </div>
            <FAQ />
          </div>
        </MotionSection>

        <section className="final-cta" aria-labelledby="final-cta-title">
          <div className="container final-cta-inner">
            <h2 id="final-cta-title">
              ¿Listo para renacer dentro de Eternal Phoenix?
            </h2>
            <p>
              Completa tu ficha, adjunta tus evidencias y permite que el staff
              revise tu perfil competitivo.
            </p>
            <GlowButton href={formUrl} external>
              Postularme al Equipo Pro
            </GlowButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
