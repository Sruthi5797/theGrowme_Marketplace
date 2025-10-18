import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 24, text: "text-sm" },
    md: { icon: 36, text: "text-xl" },
    lg: { icon: 56, text: "text-3xl" },
  };

  const iconSize = sizes[size].icon;
  const textSize = sizes[size].text;

  // Animation timing per leaf
  const leafDelays = [1.5, 1.8, 2.1, 2.4, 2.7];

  return (
    <motion.div
      className="flex items-center gap-3"
      initial={false}
      animate="breathe"
      variants={{
        breathe: {
          scale: [1, 1.02, 0.98, 1],
          transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        },
      }}
    >
      <motion.svg
        viewBox="0 0 48 48"
        width={iconSize}
        height={iconSize}
        fill="none"
        style={{ display: "block" }}
      >
        {/* Soil mound */}
        <motion.ellipse
          cx="24"
          cy="45"
          rx="10"
          ry="3.5"
          fill="#c0e2da"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.25 } }}
        />
        {/* Main branch/stem */}
        <motion.path
          d="M24 44 Q24 34 25 19 Q25.2 11 24 5"
          stroke="#3b6358"
          strokeWidth="2.4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.7 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.3, delay: 0.6, ease: "easeOut" },
          }}
        />
        {/* Left lower leaf */}
        <motion.path
          d="M25 30 Q18 29 20.9 23 Q23.7 22.7 25 26"
          stroke="#61b16d"
          strokeWidth="1.3"
          fill="#b9e5b2"
          strokeLinecap="round"
          initial={{ pathLength: 0, scale: 0.2, opacity: 0, transformOrigin: "25 30" }}
          animate={{ pathLength: 1, scale: 1, opacity: 1, transition: { duration: 0.7, delay: leafDelays[0] } }}
        />
        {/* Right lower leaf */}
        <motion.path
          d="M25 26 Q32.5 25 30.5 19 Q27.8 19 25 23"
          stroke="#68b6a7"
          strokeWidth="1.2"
          fill="#b0ddda"
          strokeLinecap="round"
          initial={{ pathLength: 0, scale: 0.2, opacity: 0, transformOrigin: "25 26" }}
          animate={{ pathLength: 1, scale: 1, opacity: 1, transition: { duration: 0.7, delay: leafDelays[1] } }}
        />
        {/* Left upper leaf */}
        <motion.path
          d="M25 19 Q19 14 24 11 Q26 13 25 16"
          stroke="#80bb6c"
          strokeWidth="1.18"
          fill="#dae8ba"
          strokeLinecap="round"
          initial={{ pathLength: 0, scale: 0.2, opacity: 0, transformOrigin: "25 19" }}
          animate={{ pathLength: 1, scale: 1, opacity: 1, transition: { duration: 0.7, delay: leafDelays[2] } }}
        />
        {/* Right upper leaf */}
        <motion.path
          d="M25 16 Q32 13 27 9 Q25 11 25 14"
          stroke="#72bebb"
          strokeWidth="1.09"
          fill="#bbe4de"
          strokeLinecap="round"
          initial={{ pathLength: 0, scale: 0.2, opacity: 0, transformOrigin: "25 16" }}
          animate={{ pathLength: 1, scale: 1, opacity: 1, transition: { duration: 0.7, delay: leafDelays[3] } }}
        />
        {/* Central top leaf */}
        <motion.path
          d="M24.5 8.5 Q27 6 24 5 Q22.3 7.5 24.5 10"
          stroke="#93ac65"
          strokeWidth="1"
          fill="#e4ecd1"
          strokeLinecap="round"
          initial={{ pathLength: 0, scale: 0.18, opacity: 0, transformOrigin: "24.5 8.5" }}
          animate={{ pathLength: 1, scale: 1, opacity: 1, transition: { duration: 0.7, delay: leafDelays[4] } }}
        />
      </motion.svg>
      {showText && (
        <motion.span
          className={`${textSize} tracking-wide font-bold`}
          style={{
            color: "#3b6358",
            textShadow:
              "1.5px 1.5px 0px #eafbe4, 0 2px 8px #b9e5b266",
            letterSpacing: "0.01em",
          }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 3.4, duration: 0.6 } }}
        >
          TheGrowMe
        </motion.span>
      )}
    </motion.div>
  );
}
