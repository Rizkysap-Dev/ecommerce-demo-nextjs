import React, { useState } from "react";
import { motion } from "framer-motion";

const LogoAnimation = ({ children, href }) => {
  const [isMobileHovered, setIsMobileHovered] = useState(false);

  const handleTap = () => {
    setIsMobileHovered(true);
    setTimeout(() => setIsMobileHovered(false), 600); // animasi bertahan 600ms
  };

  return (
    <motion.a
      initial="initial"
      animate={isMobileHovered ? "hovered" : "initial"}
      whileHover="hovered"
      onTouchStart={handleTap}
      href={href}
      style={{ lineHeight: 1.3 }}
      className="relative block uppercase overflow-hidden text-[23px] sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-gray-800 whitespace-nowrap">
      <div>
        {children.split("").map((char, index) => {
          return (
            <motion.span
              key={index}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="inline-block">
              {char}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((char, index) => {
          return (
            <motion.span
              key={index}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.03,
                ease: "easeInOut",
              }}
              className="inline-block">
              {char}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};

export default LogoAnimation;
