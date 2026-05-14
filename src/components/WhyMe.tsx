import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/motion";

const notOnly = ["как это собрать"];
const butAlso = [
  "как это подать",
  "как это будет восприниматься",
  "где человек зацепится взглядом",
  "что запомнит",
  "почему это будет выглядеть дороже, чем стоит",
];

export function WhyMe() {
  return (
    <section
      id="why"
      className="relative border-t border-white/[0.06] py-24 sm:py-32 lg:py-40"
      aria-labelledby="why-heading"
    >
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          className="grid gap-16 lg:grid-cols-12 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="lg:col-span-4">
            <motion.p variants={fadeUp} className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-white/40">
              Позиционирование
            </motion.p>
            <motion.h2
              id="why-heading"
              variants={fadeUp}
              className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white text-balance sm:text-4xl"
            >
              Почему ко мне идут не просто за кодом
            </motion.h2>
          </div>

          <div className="space-y-12 lg:col-span-8">
            <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
              Потому что я умею видеть проект целиком.
            </motion.p>

            <div className="grid gap-10 md:grid-cols-2">
              <motion.div variants={fadeUp} className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/35">Не только</p>
                <ul className="space-y-3">
                  {notOnly.map((t) => (
                    <li key={t} className="flex gap-3 text-white/55">
                      <span className="mt-2 h-px w-8 shrink-0 bg-white/20" />
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/35">но и</p>
                <ul className="space-y-3">
                  {butAlso.map((t) => (
                    <motion.li
                      key={t}
                      className="flex gap-3 text-white/70"
                      initial={{ opacity: 0, x: 8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                    >
                      <span className="mt-2 h-px w-8 shrink-0 bg-gradient-to-r from-cyan-400/60 to-violet-400/40" />
                      {t}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-white/85 sm:text-3xl"
            >
              Я соединяю:{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent">
                эстетику + структуру + digital-мышление + скорость
              </span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
