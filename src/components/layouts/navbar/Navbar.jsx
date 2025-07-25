"use client";

import React, { useState } from "react";
import Container from "../../Container";
import Link from "next/link";
import UnderlineHover from "@/components/ui/UnderlineHover";
import ListLink from "./ui/ListLink";
import { linkNavbar, linkNavbarImg } from "@/constants";
import { motion } from "framer-motion";
import LogoAnimation from "./ui/LogoAnimation";
import SearchNavbar from "./ui/SearchNavbar";
import { AnimatePresence } from "framer-motion";
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import UnderlineButton from "@/components/ui/UnderlineButton";
import { RiArrowLeftLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchMobileOpen, setSearchMobileOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);


  return (
    <div className="w-full">
      <Container>
        <div className="flex items-center justify-between py-4 relative ">
          {/* Logo & Mobile Buttons */}
          <AnimatePresence initial={false}>
            <motion.div
              key="search-mobile-bg"
              initial={false}
              animate={{ opacity: searchMobileOpen ? 1 : 0, pointerEvents: searchMobileOpen ? 'auto' : 'none' }}
              exit={{ opacity: 0, pointerEvents: 'none' }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="fixed inset-0 z-50 md:hidden bg-white px-4 pt-6 "
              style={{ minHeight: '64px' }}
            >
              <AnimatePresence>
                {searchMobileOpen && (
                  <motion.div
                    key="search-mobile-input"
                    initial={{ opacity: 0, y: -24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -24, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 380, damping: 38, mass: 0.7, delay: 0.05 }}
                    className="w-full"
                  >
                    <div className="relative w-full">
                      <motion.input
                        type="text"
                        autoFocus
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        exit={{ opacity: 0, }}
                        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.7, delay: 0.1 }}
                        className="w-full placeholder:text-slate-700 text-slate-800 text-base rounded-xl pl-4 pr-10 py-3 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all duration-300"
                        placeholder="Search for products"
                      />
                      <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-200 bg-gray-50 transition-colors duration-200 border-gray-200 focus:outline-none"
                        aria-label="Close search"
                        type="button"
                        onClick={() => setSearchMobileOpen(false)}
                        tabIndex={-1}
                      >
                        <RiCloseLine size={22} className="text-gray-500" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            {!searchMobileOpen && (
              <AnimatePresence initial={false}>
                {!(menuOpen && mobileShopOpen) && (
                  <motion.div
                    key="logo-mobile"
                    initial={{ opacity: 0, y: -20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 40, mass: 0.7 }}
                    className="flex items-center md:hidden w-full justify-between"
                  >
                    {/* logo */}
                      <LogoAnimation href={"/"}>Qunix</LogoAnimation>
                    <div className="flex md:hidden items-center gap-2">
                      <button
                        className="flex justify-center items-center w-8 h-8"
                        aria-label="Search"
                        type="button"
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileShopOpen(false);
                          setSearchMobileOpen(true);
                        }}
                      >
                        <LuSearch size={20} />
                      </button>
                      <button
                        className="flex justify-center items-center w-8 h-8"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu">
                        <motion.span
                          key={menuOpen ? "close" : "menu"}
                          initial={{ rotate: menuOpen ? -90 : 90, scale: 0.7, opacity: 0 }}
                          animate={{ rotate: 0, scale: 1, opacity: 1 }}
                          exit={{ rotate: menuOpen ? 90 : -90, scale: 0.7, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex">
                          {menuOpen ? <RiCloseLine size={24} /> : <RiMenu4Fill size={20} />}
                        </motion.span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </AnimatePresence>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <LogoAnimation href={"/"}>Qunix</LogoAnimation>
          </div>
          <nav className="hidden md:flex justify-start items-center">
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

          {/* Desktop Search */}
          <div className="hidden md:block">
            <SearchNavbar />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && !mobileShopOpen && (
            <motion.nav
              key="mobile-main-menu"
              initial={{ opacity: 0, x: 80, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 80, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="md:hidden absolute top-full left-0 h-screen w-full bg-white shadow-lg z-50"
            >
              <Container>
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '100%', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="mx-auto h-[1px] w-full rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 my-2"
                  style={{ maxWidth: '90%' }}
                />
              </Container>
              <ul className="flex flex-col items-center py-4 space-y-4 ">
                <li>
                  <UnderlineButton 
                    Button
                    onClick={() => setMobileShopOpen(true)}
                  >
                    Shop
                  </UnderlineButton>
                </li>
                <li>
                  <UnderlineButton href="/about">About</UnderlineButton>
                </li>
                <li>
                  <UnderlineButton href="/about">Contact</UnderlineButton>
                </li>
              </ul>
            </motion.nav>
          )}
          {menuOpen && mobileShopOpen && (
            <motion.div
              key="mobile-shop-category"
              initial={{ opacity: 0, y: -40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="md:hidden fixed top-0 left-0 h-screen w-full bg-white shadow-lg z-50 min-h-[300px] flex flex-col"
              style={{ paddingTop: 0 }}
            >
              <div className="flex items-center px-4 py-3 mt-4 border-b border-gray-200" style={{ minHeight: '64px' }}>
                <button
                  className="rounded-lg p-1 hover:bg-gray-100 transition flex items-center gap-1"
                  onClick={() => setMobileShopOpen(false)}
                  aria-label="Back to menu"
                >
                  <RiArrowLeftLine size={20} />
                  <span className="font-bold text-lg">Categories</span>
                </button>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ type: "spring", stiffness: 220, damping: 24, delay: 0.08 }}
                className="p-4 flex-1 overflow-y-auto"
              >
                <ListLink items={linkNavbar} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default Navbar;
