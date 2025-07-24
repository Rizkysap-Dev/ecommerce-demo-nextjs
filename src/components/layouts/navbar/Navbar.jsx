"use client";

import React from "react";
import Container from "../../Container";
import Link from "next/link";
import UnderlineHover from "@/components/ui/UnderlineHover";
import ButtonHover from "@/components/ui/ButtonHover";
import ListLink from "./ui/ListLink";
import { linkNavbar, linkNavbarImg } from "@/constants";
import { motion } from "framer-motion";
import LogoAnimation from "./ui/LogoAnimation";
import SearchNavbar from "./ui/SearchNavbar";

const Navbar = () => {
  return (
    <div className="w-full">
      <Container>
        <div className="flex items-center justify-between py-4 relative">
          <LogoAnimation href={"/"}>Qunix</LogoAnimation>
          <nav className="flex justify-start items-center">
            <ul className="flex justify-center items-center space-x-4">
              <li>
                <UnderlineHover
                  href="/shop"
                  Content={
                    <div className="py-2 mt-2 px-2 grid grid-cols-6 space-x-8">
                      <ListLink items={linkNavbar} />
                      {linkNavbarImg.map((item, index) => (
                        <Link
                          key={index}
                          href={"/shop/"}
                          className="flex justify-center items-center h-64 overflow-hidden rounded-lg cursor-pointer">
                          <motion.img
                            transition={{ duration: 0.3, delay: 0.2 }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className="h-full w-full object-cover object-center rounded-lg"
                            src={item.src}
                            alt={item.alt}
                          />
                        </Link>
                      ))}
                    </div>
                  }>
                  Shop
                </UnderlineHover>
              </li>
              <li>
                <UnderlineHover href="/about">About</UnderlineHover>
              </li>
              <li>
                <UnderlineHover href="/about">Contact</UnderlineHover>
              </li>
            </ul>
          </nav>
          <div>
            <div>
              <SearchNavbar />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
