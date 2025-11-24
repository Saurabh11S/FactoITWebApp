import { motion } from "framer-motion";
import logoImage from "../logo/Logo2.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "small" | "medium" | "large";
}

export function Logo({ className = "", showText = true, size = "medium" }: LogoProps) {
  const sizeClasses = {
    small: { icon: "w-12 h-12", text: "text-sm", subtext: "text-xs" },
    medium: { icon: "w-20 h-20", text: "text-lg", subtext: "text-xs" },
    large: { icon: "w-28 h-28", text: "text-2xl", subtext: "text-sm" },
  };

  const currentSize = sizeClasses[size];

  return (
    <motion.div
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo Image */}
      <motion.img
        src={logoImage}
        alt="Facto Technologies Logo"
        className={`${currentSize.icon} mr-3 object-contain`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={`font-bold tracking-tight text-white ${currentSize.text}`}>
            Facto
          </div>
          <div className={`text-gray-300 ${currentSize.subtext}`}>
            Technologies
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

