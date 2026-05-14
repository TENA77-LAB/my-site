import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/motion";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  return (
    <header className="relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fade bg-grid bg-[length:64px_64px] opacity-40" />
        <motion.div
          className="absolute -left-1/4 top-0 h-[70vh] w-[70vh] rounded-full bg-gradient-to-br from-cyan-500/25 via-transparent to-transparent blur-3xl"
          animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-0 h-[60vh] w-[60vh] rounded-full bg-gradient-to-tl from-violet-600/30 via-fuchsia-500/10 to-transparent blur-3xl"
          animate={{ opacity: [0.3, 0.5, 0.3], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-void via-void/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-24 pt-28 sm:px-8 lg:px-10">
        <motion.div
          className="mb-10 max-w-4xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/45 backdrop-blur-md sm:text-xs"
          >
            <span className="h-1 w-1 rounded-full bg-cyan-400/80 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
            Vibe Coder / Portfolio / Web &amp; AI Experiences
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white text-balance sm:text-4xl md:text-5xl lg:text-[3.35rem] xl:text-[3.65rem]"
          >
            Я делаю сайты, интерфейсы и digital-проекты, которые выглядят как вайб, а работают как система
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg"
          >
            Не просто «что-то сверстать», а собрать ощущение, стиль, логику и подачу так, чтобы проект хотелось открыть, листать и запомнить.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToId("projects")}
              className="group relative overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-medium text-void transition-shadow hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
            >
              <span className="relative z-10">Посмотреть проекты</span>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-200/40 via-white to-violet-200/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
            <button
              type="button"
              onClick={() => scrollToId("contact")}
              className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/[0.07] hover:shadow-[0_0_32px_rgba(120,220,255,0.12)]"
            >
              Обсудить задачу
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="flex h-12 w-7 items-start justify-center rounded-full border border-white/15 p-1.5"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.span
              className="h-2 w-1 rounded-full bg-white/50"
              animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
