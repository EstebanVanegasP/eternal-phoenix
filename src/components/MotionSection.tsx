import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionSectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function MotionSection({ id, className = "", children }: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={`page-section ${className}`}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
