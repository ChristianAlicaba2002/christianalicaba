export const ease = [0.25, 0.46, 0.45, 0.94];

export const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};
