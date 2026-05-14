import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/motion";

const links = [
  { label: "Behance", href: "https://behance.net" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Notion", href: "https://notion.so" },
  { label: "Instagram", href: "https://instagram.com" },
];

export function Contacts() {
  return (
    <footer
      id="contact"
      className="border-t border-white/[0.06] bg-void pb-16 pt-20 sm:pb-20 sm:pt-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col gap-14 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <motion.p variants={fadeUp} className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-white/40">
              Контакты
            </motion.p>
            <motion.h2
              id="contact-heading"
              variants={fadeUp}
              className="font-display text-2xl font-semibold text-white sm:text-3xl"
            >
              Связь
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-8 space-y-3 text-sm text-white/60 sm:text-base">
              <p>
                Telegram:{" "}
                <a
                  href="https://t.me/yourname"
                  className="text-white transition-colors hover:text-cyan-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  @yourname
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:hello@yourmail.com" className="text-white transition-colors hover:text-cyan-200">
                  hello@yourmail.com
                </a>
              </p>
            </motion.div>
          </div>

          <motion.nav variants={fadeUp} className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Социальные ссылки">
            {links.map((l) => (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group relative text-sm font-medium text-white/45 transition-colors hover:text-white"
                whileHover={{ y: -2 }}
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-300 to-violet-400 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-xs text-white/30"
        >
          © {new Date().getFullYear()} Vibe Coder. Сделано с вниманием к ритму и деталям.
        </motion.p>
      </div>
    </footer>
  );
}
