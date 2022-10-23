import { motion } from "framer-motion";

const DELAY_BASE = 0.3;

const draw = {
  hidden: { translateY: -5, opacity: 0 },
  visible: (i: number) => {
    const delay = DELAY_BASE + i * 0.1;
    return {
      translateY: 0,
      opacity: 1,
      transition: {
        translateY: { delay, type: "spring", duration: 0.3, bounce: 0 },
        opacity: { delay, duration: 0.3 },
      },
    };
  },
};

function EmojiFace() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 38 38"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        className="fill-current"
        r="1.8"
        cx="13.5"
        cy="14"
        variants={draw}
        custom={1}
      />
      <motion.circle
        className="fill-current"
        r="1.8"
        cx="24.5"
        cy="14"
        variants={draw}
        custom={2}
      />
      <motion.path
        d="M 26.824 21.75 C 26.824 25.828 23.464 29.133 19.319 29.133 C 15.175 29.133 11.815 25.828 11.815 21.75"
        fill="transparent"
        strokeWidth="1"
        className="stroke-current"
        initial={{ translateY: -5, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        variants={draw}
        custom={3}
      />
    </motion.svg>
  );
}

export default EmojiFace;
