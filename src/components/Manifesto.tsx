import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export function Manifesto() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/[0.06] bg-ink py-28 sm:py-36 lg:py-44"
      aria-label="Манифест"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(120,220,255,0.08),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <motion.blockquote
          className="font-display text-2xl font-semibold leading-[1.2] tracking-[-0.03em] text-white text-balance sm:text-4xl md:text-5xl lg:text-[3.25rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeUp}
        >
          Хороший сайт — это не когда «нормально сверстано». Это когда у проекта появляется{" "}
          <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent">
            энергия, форма и ощущение
          </span>
          , что он живой.
        </motion.blockquote>
      </div>
    </section>
  );
}
