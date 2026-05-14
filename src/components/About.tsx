import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/motion";

const bullets = [
  "лендинги",
  "портфолио",
  "промо-страницы",
  "интерфейсы",
  "спецпроекты",
  "digital-концепты",
  "AI-first сайты и продукты",
];

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/[0.06] bg-ink/50 py-24 sm:py-32 lg:py-40"
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 lg:items-start">
          <motion.div
            className="lg:col-span-5 lg:sticky lg:top-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-white/40">
              О подходе
            </motion.p>
            <motion.h2
              id="about-heading"
              variants={fadeUp}
              className="font-display text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-white text-balance sm:text-4xl"
            >
              Я не просто пишу код — я собираю впечатление
            </motion.h2>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="space-y-6 text-base leading-relaxed text-white/60 sm:text-lg">
              <p>
                Я работаю на стыке кода, визуала, UX и AI-инструментов. Для меня сайт — это не набор блоков. Это ощущение от проекта, ритм, подача, структура и то, как человек чувствует себя внутри интерфейса.
              </p>
              <p className="text-white/50">Я делаю:</p>
            </motion.div>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {bullets.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 backdrop-blur-sm transition-colors hover:border-cyan-400/20 hover:bg-white/[0.04]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 opacity-70 shadow-[0_0_12px_rgba(120,220,255,0.35)] transition-transform group-hover:scale-125" />
                  <span className="text-sm font-medium text-white/80">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 max-w-xl text-base leading-relaxed text-white/55"
            >
              Мой подход — сделать быстро, красиво и не бездумно. Чтобы проект не выглядел как очередной шаблон, собранный без вкуса и идеи.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
