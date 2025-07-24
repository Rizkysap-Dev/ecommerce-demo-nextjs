import React from "react";
import { motion } from "framer-motion";

const headingText = "QUNIX.";

const SplashScreen = ({ onFinish }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
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
              transition={{ duration: 1.2, delay: index * 0.2 }}
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
