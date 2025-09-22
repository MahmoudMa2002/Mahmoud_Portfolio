import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6
}) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...variants[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.42, 0, 0.58, 1] }}
    >
      {children}
    </motion.div>
  );
}