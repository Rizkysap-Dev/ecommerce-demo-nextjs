"use client";

import { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar";
import SplashScreen from "../ui/SplashScreen";
import Container from "../Container";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Layout = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <AnimatePresence>
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      </AnimatePresence>
      {!showSplash && (
        <div>
          <div
            className={`fixed top-0 left-0 w-full z-20 bg-white transition-shadow duration-300 ${
              scrolled ? "shadow-md" : ""
            }`}>
            <Navbar />
          </div>
          <Container>{children}</Container>
        </div>
      )}
    </div>
  );
};

export default Layout;
