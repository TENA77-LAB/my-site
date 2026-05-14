import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/motion";

const services = [
  {
    title: "Лендинги",
    body: "Сайты, которые не просто «есть», а собирают внимание, держат ритм и ведут человека по смыслу.",
  },
  {
    title: "Портфолио и личные сайты",
    body: "Страницы, которые показывают не только работы, но и стиль, характер и уровень.",
  },
  {
    title: "Визуальные концепты",
    body: "Когда нужен не просто сайт, а ощущение: атмосфера, характер, настроение, подача.",
  },
  {
    title: "AI + Web",
    body: "Использую нейросети как инструмент ускорения и усиления идей, а не как замену мышлению.",
  },
  {
    title: "UX и структура",
    body: "Продумываю, как человек читает, куда смотрит, где теряется и где принимает решение.",
  },
  {
    title: "Быстрый запуск",
    body: "Могу собрать сильную первую версию быстро, без месяцев бесконечных согласований.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 lg:py-40"
      aria-labelledby="services-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          className="mb-16 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-white/40">
            Услуги
          </motion.p>
          <motion.h2
            id="services-heading"
            variants={fadeUp}
            className="font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
          >
            Что я делаю
          </motion.h2>
        </motion.div>

        <motion.ul
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
        >
          {services.map((s, i) => (
            <motion.li key={s.title} variants={fadeUp} className="group relative h-full">
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-[1px] transition-shadow duration-500 hover:shadow-[0_0_48px_rgba(120,220,255,0.08)]">
                <div className="relative flex h-full flex-col rounded-[1.4rem] bg-mist/80 p-7 backdrop-blur-xl">
                  <motion.div
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400/15 to-violet-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <span className="mb-6 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] font-display text-sm font-semibold text-white/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/55">{s.body}</p>
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  <span className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
                    vibe → system
                  </span>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
