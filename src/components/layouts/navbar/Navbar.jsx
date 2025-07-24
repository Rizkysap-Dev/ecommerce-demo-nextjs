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
    <div className="relative">
      <Container>
        <div className="flex items-center justify-between py-5 relative">
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
              {/* <div>
                            <ButtonHover href="/about"   Content={
                                    <div className='w-full px-8 py-5'>
                                        <input className='w-full py-1 px-3 border border-gray-700 rounded-lg' type="text" placeholder="search" />
                                        <div className='grid grid-cols-2 space-x-1 pt-3'>
                                            <div className='mt-2'>
                                                <h3 className='text-gray-900 '>Trending</h3>
                                                <div className='flex justify-start items-center space-x-2 mt-2'>
                                                    <Link className='text-[10px] font-light py-1 px-3 rounded-sm hover:shadow bg-gray-300' href={'/shop/'}>Men's Jeans</Link>
                                                </div>
                                            </div>
                                    
                                        </div>
                                    </div>
                                } 
                            >Search</ButtonHover>
                        </div> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
