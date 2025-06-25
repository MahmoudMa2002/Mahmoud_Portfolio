import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInOnScroll({
  children,
  direction = "up",
  delay = 0.1,
  duration = 0.6,
}) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const initialY = direction === "up" ? 40 : direction === "down" ? -40 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
