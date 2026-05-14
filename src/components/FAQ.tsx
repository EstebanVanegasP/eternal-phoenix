import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqItems } from "../data/landingContent";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="faq-item" key={item.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <ChevronDown aria-hidden="true" className={isOpen ? "open" : ""} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
