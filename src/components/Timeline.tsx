import { motion, useInView } from "framer-motion";
import { Flame } from "lucide-react";
import { useRef } from "react";
import { playerPath } from "../data/landingContent";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.28, once: true });

  return (
    <div className="timeline" ref={ref}>
      <div className="timeline-track" aria-hidden="true">
        <motion.div
          className="timeline-progress"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      {playerPath.map((step, index) => (
        <motion.article
          className="timeline-item"
          key={step.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: index * 0.04 }}
        >
          <div className="timeline-node">
            <Flame aria-hidden="true" />
          </div>
          <div className="timeline-card">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
