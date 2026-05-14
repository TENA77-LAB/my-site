import { motion, AnimatePresence } from "framer-motion";

type PreloaderProps = {
  show: boolean;
};

export function Preloader({ show }: PreloaderProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-14 w-14">
              <motion.span
                className="absolute inset-0 rounded-2xl border border-white/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="absolute inset-1 rounded-xl bg-gradient-to-br from-cyan-400/30 via-violet-500/25 to-fuchsia-500/20 blur-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 flex items-center justify-center font-display text-lg font-semibold tracking-tight text-white">
                V
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-sm font-medium tracking-[0.35em] text-white/50 uppercase">
                Loading
              </span>
              <motion.div
                className="h-px w-32 overflow-hidden bg-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
