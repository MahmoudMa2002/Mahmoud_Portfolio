import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInOnScroll({
  children,
  direction = "up", // up, down, left, right
  delay = 0.1,
  duration = 0.4,
}) {
  const [ref, inView] = useInView({
    threshold: 0.275,
    triggerOnce: true,
    rootMargin: '50px 0px',
  });

  // Determine initial x and y based on direction
  const initial = {
    x: direction === "left" ? 160 : direction === "right" ? -160 : 0,
    y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
    opacity: 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
