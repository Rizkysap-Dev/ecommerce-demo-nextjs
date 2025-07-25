"use client";

import { useInView, motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import UnderlineButton from "./UnderlineButton";

const HighlightSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 my-10 md:my-20 rounded-lg px-6 sm:px-8 md:px-10 py-10 md:py-20 overflow-hidden gap-8 md:gap-0"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.17, 0.55, 0.55, 1] }}
    >
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="w-[60%]">
        <h2 className=" font-sans font-semibold text-lg text-gray-900">
          Explore a variety of shirts crafted for comfort and style. Whether you
          prefer timeless classics or modern designs.
        </h2>
        <div className="mt-4 pl-1">
          <UnderlineButton
            className={"font-light text-sm text-gray-500 font-serif"}
            href={"/shop/shirts"}>
            Shop Now
          </UnderlineButton>
        </div>
      </div>
      <div
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}>
        <h1 className="text-2xl font-semibold">
          <span className="font-playfair text-2xl font-semibold">
            — Giorgio Armani,{" "}
          </span>
          The difference between style and fashion is quality. A well-chosen
          shirt can elevate your confidence and express your personality without
          saying a word.
        </h1>
      </div>
    </motion.div>
  );
};

export default HighlightSection;
