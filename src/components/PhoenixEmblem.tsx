import { motion, useReducedMotion } from "framer-motion";

type PhoenixEmblemProps = {
  compact?: boolean;
};

export function PhoenixEmblem({ compact = false }: PhoenixEmblemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={compact ? "phoenix-emblem compact" : "phoenix-emblem"}
      animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 420 420" role="img" aria-label="Emblema de fénix">
        <defs>
          <radialGradient id="phoenixCore" cx="50%" cy="42%" r="58%">
            <stop offset="0%" stopColor="#FFF1D2" />
            <stop offset="34%" stopColor="#FFB23F" />
            <stop offset="70%" stopColor="#F26A1B" />
            <stop offset="100%" stopColor="#8F1D12" />
          </radialGradient>
          <linearGradient id="phoenixStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF1D2" />
            <stop offset="52%" stopColor="#D8A84F" />
            <stop offset="100%" stopColor="#7A3518" />
          </linearGradient>
          <filter id="phoenixGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="9" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0.95 0 0.58 0 0 0.22 0 0 0.25 0 0.06 0 0 0 0.7 0"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx="210"
          cy="210"
          r="170"
          fill="rgba(18,8,7,0.62)"
          stroke="url(#phoenixStroke)"
          strokeWidth="2"
          strokeDasharray="2 12"
        />
        <path
          d="M210 44c20 44 18 76-2 106 36-29 82-40 138-34-39 20-67 43-82 69 35-14 69-14 103 3-41 11-74 30-100 57 26-3 49 3 68 19-52 4-93 22-123 55 10-44 2-77-24-99-28 32-43 72-46 121-23-44-26-86-9-126-29 12-55 30-79 54 7-42 26-75 57-99-28-3-57 4-88 20 34-45 74-72 119-80-13-24-10-47 10-69 11 43 31 70 58 83 20-25 20-52 0-80Z"
          fill="url(#phoenixCore)"
          filter="url(#phoenixGlow)"
        />
        <path
          d="M210 122c23 33 33 70 29 112 20-22 43-35 69-39-41 29-69 66-83 111l-15 47-18-49c-14-39-41-74-80-105 30 3 54 17 72 41-8-42 0-81 26-118Z"
          fill="rgba(18,8,7,0.55)"
          stroke="#FFF1D2"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M184 94c19 34 24 69 15 104M237 96c-23 34-30 69-20 106M171 298c16 19 29 41 39 67 9-27 22-50 39-69"
          fill="none"
          stroke="#FFF1D2"
          strokeLinecap="round"
          strokeWidth="5"
          opacity="0.86"
        />
        <circle cx="210" cy="197" r="12" fill="#FFF1D2" />
      </svg>
    </motion.div>
  );
}
