import React from "react";
import { motion, scale, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const headingText = "QUNIX.";

const SplashScreen = ({ onFinish }) => {
  const duration = 0.5 + (headingText.length - 1) * 0.1;

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, duration * 1000 + 300);

    return () => clearTimeout(timer);
  }, [onFinish, duration]);

  return (
    <motion.div
      al={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 bg-white z-50 flex justify-center items-center h-screen">
      <div className="flex items-center justify-center h-40 space-y-2 overflow-hidden">
        {headingText.split("").map((char, index) => {
          return (
            <motion.h1
              key={index}
              animate={{
                y: "0%",
              }}
              initial={{
                y: "100%",
              }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-9xl whitespace-nowrap p-0 text-center font-playfair font-semibold text-gray-950 pr-5">
              {char}
            </motion.h1>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SplashScreen;
