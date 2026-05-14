import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/motion";

const steps = [
  {
    title: "Сначала вайб",
    body: "Я смотрю не только на задачу, но и на ощущение, которое должен передавать проект.",
  },
  {
    title: "Потом структура",
    body: "Красивый сайт без логики — это просто красивая обёртка. Поэтому я собираю смысл, сценарий и путь пользователя.",
  },
  {
    title: "Потом реализация",
    body: "Когда есть стиль и логика, проект собирается быстрее, точнее и выглядит сильно.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative border-t border-white/[0.06] bg-gradient-to-b from-void to-ink py-24 sm:py-32 lg:py-40"
      aria-labelledby="process-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-24 h-96 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/20 via-white/10 to-transparent opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          className="mb-20 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-white/40">
            Процесс
          </motion.p>
          <motion.h2
            id="process-heading"
            variants={fadeUp}
            className="font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
          >
            Как я работаю
          </motion.h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[11px] top-3 bottom-3 w-px bg-white/[0.06] sm:left-[15px]" aria-hidden />
          <ol className="relative space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                className="relative grid gap-6 pl-10 sm:grid-cols-[auto_1fr] sm:gap-10 sm:pl-14"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              >
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center sm:h-8 sm:w-8">
                  <motion.span
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-500/30 blur-md"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                  />
                  <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-void text-[10px] font-semibold text-white/80 sm:h-8 sm:w-8 sm:text-xs">
                    {index + 1}
                  </span>
                </div>

                <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 backdrop-blur-md transition-colors hover:border-white/12 hover:bg-white/[0.035]">
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{step.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/55">{step.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
