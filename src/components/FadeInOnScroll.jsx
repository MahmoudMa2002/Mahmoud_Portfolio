import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function FadeInOnScroll({
  children,
  direction = "up",
  delay = 0.1,
  duration = 0.6,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration, delay },
      });
    }
  }, [controls, inView, delay, duration]);

  const initialY = direction === "up" ? 40 : direction === "down" ? -40 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
