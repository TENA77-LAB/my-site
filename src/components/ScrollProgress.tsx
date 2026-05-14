import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

type ScrollProgressProps = {
  progress: number;
};

export function ScrollProgress({ progress }: ScrollProgressProps) {
  const spring = useSpring(0, { stiffness: 120, damping: 28, mass: 0.35 });
  const width = useTransform(spring, (v) => `${Math.min(100, Math.max(0, v * 100))}%`);

  useEffect(() => {
    spring.set(progress);
  }, [progress, spring]);

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[90] h-[2px] bg-white/[0.04]">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-cyan-400/90 via-violet-400/90 to-fuchsia-400/80 shadow-[0_0_24px_rgba(120,220,255,0.45)]"
        style={{ width }}
      />
    </div>
  );
}
