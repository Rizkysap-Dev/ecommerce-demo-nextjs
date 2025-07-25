"use client";

import React from "react";
import { motion } from "framer-motion";

const ButtonHover = ({ children, href, Content, className }) => {
  const [open, setOpen] = React.useState(false);

  const showDropdown = open && Content;

  return (
    <div
      className="w-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      <button
        className={`text-base md:text-lg px-4 py-1 rounded-md transition 
          md:bg-transparent md:border-none 
          border border-gray-300 w-full md:w-fit
          ${className}`}
        href={href}>
        {children}
      </button>
      {showDropdown && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-12 left-0 w-full z-20">
          <div className="pt-5">
            <div className="mb-10 w-full shadow rounded-lg p-2 bg-gray-100">
              {Content}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ButtonHover;
