import { motion } from "framer-motion";

export default function Scroll({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
      viewport={{ once: true, amount:0.2 }}
    >
      {children}
    </motion.div>
  );
}
