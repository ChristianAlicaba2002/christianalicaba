import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="border-t border-border px-6 py-6 text-center text-xs text-muted sm:px-8"
    >
      &copy; {new Date().getFullYear()} Christian Dave L. Alicaba. All rights reserved.
    </motion.footer>
  );
}
