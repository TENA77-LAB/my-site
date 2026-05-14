import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/motion";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function FinalCTA() {
  return (
    <section
      className="relative py-24 sm:py-32 lg:py-40"
      aria-labelledby="cta-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-[1px] shadow-[0_0_80px_rgba(120,220,255,0.06)]"
        >
          <div className="rounded-[1.95rem] bg-void/80 px-8 py-16 backdrop-blur-2xl sm:px-14 sm:py-20">
            <motion.h2
              id="cta-heading"
              variants={fadeUp}
              className="font-display text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-white text-balance sm:text-4xl md:text-[2.6rem]"
            >
              Если тебе нужен сайт, который выглядит сильно и ощущается современно — давай соберём
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
              Могу помочь с концепцией, структурой, упаковкой и реализацией. От первого вайба до готовой страницы.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => scrollToId("contact")}
                className="rounded-full bg-white px-8 py-3.5 text-sm font-medium text-void transition-shadow hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                Написать мне
              </button>
              <button
                type="button"
                onClick={() => scrollToId("projects")}
                className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-3.5 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/[0.07]"
              >
                Посмотреть работы
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
