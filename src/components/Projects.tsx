import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger } from "../lib/motion";

const projects = [
  {
    title: "AI Landing Experience",
    desc: "Лендинг для digital-продукта с акцентом на атмосферу, скорость восприятия и современный визуал.",
    meta: "Что сделано: структура, тексты, дизайн-концепция, сборка.",
    tone: "from-cyan-500/30 to-blue-600/10",
  },
  {
    title: "Portfolio for Creative Expert",
    desc: "Личный сайт-портфолио, который показывает не только кейсы, но и стиль человека.",
    meta: "Что сделано: позиционирование, подача, визуальный ритм, упаковка работ.",
    tone: "from-violet-500/30 to-fuchsia-600/10",
  },
  {
    title: "Bot & Funnel Page",
    desc: "Промо-страница под воронку и digital-продукт с акцентом на конверсию и лёгкость восприятия.",
    meta: "Что сделано: логика блоков, тексты, CTA, визуальный каркас.",
    tone: "from-emerald-400/25 to-cyan-600/10",
  },
  {
    title: "Concept Site for AI Creator",
    desc: "Сайт с упором на трендовую подачу, сильный первый экран и ощущение «это хочется переслать».",
    meta: "Что сделано: creative direction, структура, визуальная концепция.",
    tone: "from-fuchsia-500/30 to-orange-500/10",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 lg:py-40"
      aria-labelledby="projects-heading"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="max-w-xl">
            <motion.p variants={fadeUp} className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-white/40">
              Кейсы
            </motion.p>
            <motion.h2
              id="projects-heading"
              variants={fadeUp}
              className="font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
            >
              Избранные проекты
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-sm text-sm leading-relaxed text-white/45">
            Визуальные плейсхолдеры — за ними скрывается ритм композиции и сценарий скролла.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40 * (index % 2 === 0 ? 1 : -0.6), -40 * (index % 2 === 0 ? 1 : 0.6)]);

  return (
    <motion.div
      ref={ref}
      role="article"
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02]"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
    >
      <motion.div className="relative aspect-[16/10] w-full overflow-hidden" style={{ y }}>
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.tone} opacity-80 transition-opacity duration-700 group-hover:opacity-100`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
        <div className="absolute inset-8 rounded-2xl border border-white/10 bg-void/40 backdrop-blur-sm" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white/40 backdrop-blur-md transition-all duration-500 group-hover:border-white/25 group-hover:text-white/70">
            Preview
          </span>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 translate-y-1/4 bg-gradient-to-t from-void via-void/70 to-transparent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
      </motion.div>

      <div className="relative z-10 border-t border-white/[0.06] bg-void/60 p-8 backdrop-blur-xl">
        <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/55 sm:text-base">{project.desc}</p>
        <p className="mt-6 text-xs leading-relaxed text-white/40 transition-colors group-hover:text-white/55">
          {project.meta}
        </p>
      </div>
    </motion.div>
  );
}
