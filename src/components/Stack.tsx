import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/motion";

const tools = [
  "ChatGPT",
  "Cursor",
  "HTML / CSS / JS",
  "React",
  "Tailwind",
  "Framer Motion",
  "Figma",
  "Tilda / Webflow / custom",
  "Telegram / Bots / AI tools",
];

export function Stack() {
  return (
    <section
      id="stack"
      className="relative bg-gradient-to-b from-ink to-void py-24 sm:py-32 lg:py-40"
      aria-labelledby="stack-heading"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          className="mb-14 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-white/40">
            Стек
          </motion.p>
          <motion.h2
            id="stack-heading"
            variants={fadeUp}
            className="font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl"
          >
            Инструменты
          </motion.h2>
        </motion.div>

        <motion.ul
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {tools.map((tool) => (
            <motion.li key={tool} variants={fadeUp}>
              <motion.span
                className="inline-flex cursor-default items-center rounded-full border border-white/[0.09] bg-white/[0.03] px-4 py-2 text-sm text-white/75 backdrop-blur-md"
                whileHover={{
                  scale: 1.04,
                  borderColor: "rgba(120, 220, 255, 0.35)",
                  boxShadow: "0 0 28px rgba(120, 220, 255, 0.12)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                {tool}
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg"
        >
          Но если честно — главный инструмент не стек, а вкус, насмотренность и умение собирать цельное впечатление.
        </motion.p>
      </div>
    </section>
  );
}
