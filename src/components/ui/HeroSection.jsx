"use client";

import React from "react";
import { motion } from "framer-motion";
import UnderlineButton from "../ui/UnderlineButton";

const headingText = "QUNIX.";

const HeroSection = () => {
  return (
    <div className="relative w-[100%] overflow-hidden h-[690px] rounded-lg">
      <div
        className="absolute inset-0 bg-cover bg-center w-full"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1747823179083-e1b436263415?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}>
        <div className="flex flex-col justify-start items-start h-[70%] w-[35%] pl-14 mt-[160px]">
          <div className="flex justify-start items-center h-13 overflow-hidden mb-3">
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
                  className="text-6xl p-0 text-center font-playfair font-semibold text-gray-950 pr-5">
                  {char}
                </motion.h1>
              );
            })}
          </div>
          <motion.h1
            animate={{
              x: "0%",
              opacity: 1,
            }}
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="text-2xl font-playfair text-justify font-medium text-gray-800 tracking-tighter">
            -- Fashion is the silent language that lets your soul shine, Casual
            fashion, effortlessly cool.
          </motion.h1>
          <div className="mt-5 pl-1">
            <UnderlineButton
              className={"text-sm font-light text-gray-700"}
              href={"/shop"}>
              <motion.h5
                animate={{
                  y: "0%",
                  opacity: 1,
                }}
                initial={{
                  y: "100%",
                  opacity: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}>
                Shop All
              </motion.h5>
            </UnderlineButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
