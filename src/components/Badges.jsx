import { motion } from "framer-motion";

const badges = [
  { label: "Languages & frameworks", value: "12+" },
  { label: "Shipped projects", value: "11+" },
  { label: "Years building", value: "3+" },
];

export default function Badges() {
  return (
    <motion.div
      className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-3"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
    >
      {badges.map((badge) => (
        <div key={badge.label}>
          <p className="text-3xl font-semibold tracking-tight text-foreground">{badge.value}</p>
          <p className="mt-1 text-sm text-muted">{badge.label}</p>
        </div>
      ))}
    </motion.div>
  );
}
