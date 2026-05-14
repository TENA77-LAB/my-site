import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/motion";

const audience = [
  "экспертам",
  "креаторам",
  "digital-проектам",
  "AI-продуктам",
  "студиям",
  "тем, кому нужен сайт с характером",
  "тем, кто не хочет шаблонную безликую страницу",
];

export function Audience() {
  return (
    <section
      id="audience"
      className="relative py-24 sm:py-32 lg:py-40"
      aria-labelledby="audience-heading"
    >
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          className="mb-14 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-white/40">
            Аудитория
          </motion.p>
          <motion.h2
            id="audience-heading"
            variants={fadeUp}
            className="font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
          >
            Кому подойдёт моя работа
          </motion.h2>
        </motion.div>

        <motion.ul
          className="columns-1 gap-4 sm:columns-2 lg:columns-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
        >
          {audience.map((item, i) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="mb-4 break-inside-avoid"
              style={{ transform: `translateY(${i % 3 === 1 ? 8 : i % 3 === 2 ? -6 : 0}px)` }}
            >
              <motion.span
                className="inline-flex w-full items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 text-sm text-white/75 backdrop-blur-md"
                whileHover={{
                  y: -4,
                  borderColor: "rgba(167, 139, 250, 0.35)",
                  boxShadow: "0 18px 48px rgba(80, 60, 160, 0.18)",
                }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                <span>{item}</span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-300 to-fuchsia-400 opacity-70 shadow-[0_0_14px_rgba(196,181,253,0.45)]" />
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
