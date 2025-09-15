import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInOnScroll({ 
  children, 
  direction = "up", 
  delay = 0.1, 
  duration = 0.5 
}) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const transforms = {
    up: "translateY(30px)",
    down: "translateY(-30px)",
    left: "translateX(90px)",
    right: "translateX(-90px)"
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, transform: transforms[direction] }}
      animate={inView ? { opacity: 1, transform: "translate(0,0)" } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      style={{ willChange: inView ? "auto" : "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}