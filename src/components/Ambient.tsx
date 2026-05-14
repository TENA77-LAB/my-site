import { motion } from "framer-motion";

export function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.035] mix-blend-overlay"
      aria-hidden
    >
      <svg className="h-full w-full">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}

export function AmbientOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-[20%] top-[10%] h-[55vmin] w-[55vmin] rounded-full bg-gradient-to-br from-cyan-500/25 via-transparent to-transparent blur-3xl"
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[15%] top-[30%] h-[60vmin] w-[60vmin] rounded-full bg-gradient-to-bl from-violet-500/30 via-fuchsia-500/10 to-transparent blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[25%] h-[45vmin] w-[70vmin] rounded-full bg-gradient-to-t from-rose-500/15 via-transparent to-transparent blur-3xl"
        animate={{ y: [0, -30, 0], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
