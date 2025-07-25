import React from "react";
import ButtonHover from "@/components/ui/ButtonHover";
import Link from "next/link";
import { linkNavbarImg } from "@/constants";
import { motion } from "framer-motion";
import UnderlineButton from "@/components/ui/UnderlineButton";
import { LuSearch } from "react-icons/lu";

const SearchNavbar = ({ className, Mobile }) => {
  return (
    <div>
      {Mobile ? (
        <div className="w-full px-8 pb-5 pt-2">
          <div className="relative">
            <input
              type="text"
              className="w-full placeholder:text-slate-400 text-slate-700 text-sm rounded-md pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none bg-gray-200 focus:shadow"
              placeholder="Search for products, brands and more"
            />
            <button
              className="absolute right-1 top-[3px] rounded-lg bg-slate-100 p-1.5 border border-transparent text-center text-sm transition-all focus:bg-slate-200 hover:shadow  active:bg-slate-200 hover:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
              type="button">
              <LuSearch />
            </button>
          </div>
          <div className="grid grid-cols-7 space-x-1 px-2 pt-2">
            <div className="mt-2 col-span-3">
              <div>
                <div>
                  <h3 className="font-extrabold font-playfair tracking-wider text-gray-800">
                    Trending
                  </h3>
                  <div className="grid grid-cols-3 gap-1 mt-2 pr-5">
                    <Link href={"/shop/"}>
                      <span className="text-xs font-light px-2 py-1 rounded-sm hover:shadow transition bg-gray-200 border">
                        Men casual
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col space-y-4 mr-16">
                {linkNavbarImg.map((item, index) => (
                  <Link
                    key={index}
                    href={"/shop/"}
                    className="flex justify-start items-center rounded-lg cursor-pointer hover:bg-gray-200 h-26">
                    <div className="h-full w-18 p-1 overflow-hidden rounded-lg cursor-pointer">
                      <img
                        className="h-full w-full object-cover object-center rounded-lg"
                        src={item.src}
                        alt={item.alt}
                      />
                    </div>
                    <div className="p-2 h-full flex flex-col justify-between ml-2 pb-10">
                      <h3 className="text-sm font-playfair font-semibold text-gray-800">
                        {item.alt}
                      </h3>
                      <h4 className="font-light text-xs text-gray-600">
                        Lorem ipsum dolor sit amet.
                      </h4>
                    </div>
                  </Link>
                ))}
                <div className="flex justify-center items-center">
                  <UnderlineButton
                    className={"text-gray-700 text-sm "}
                    href={"/shop/all"}>
                    View All
                  </UnderlineButton>
                </div>
              </div>
            </div>
            <div className="mt-2 col-span-4">
              <h3 className="font-extrabold font-playfair tracking-wider text-gray-800">
                Most View
              </h3>
              <div className="grid grid-cols-3 gap-6 mt-2 pr-5">
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
            </div>
          </div>
        </div>
      ) : (
        <ButtonHover
          className={className}
          href="/about"
          Content={
            <div className="w-full px-8 pb-5 pt-2">
              <div className="relative">
                <input
                  type="text"
                  className="w-full placeholder:text-slate-400 text-slate-700 text-sm rounded-md pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none bg-gray-200 focus:shadow"
                  placeholder="Search for products, brands and more"
                />
                <button
                  className="absolute right-1 top-[3px] rounded-lg bg-slate-100 p-1.5 border border-transparent text-center text-sm transition-all focus:bg-slate-200 hover:shadow  active:bg-slate-200 hover:bg-slate-200 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                  type="button">
                  <LuSearch />
                </button>
              </div>
              <div className="grid grid-cols-7 space-x-1 px-2 pt-2">
                <div className="mt-2 col-span-3">
                  <div>
                    <div>
                      <h3 className="font-extrabold font-playfair tracking-wider text-gray-800">
                        Trending
                      </h3>
                      <div className="grid grid-cols-3 gap-1 mt-2 pr-5">
                        <Link href={"/shop/"}>
                          <span className="text-xs font-light px-2 py-1 rounded-sm hover:shadow transition bg-gray-200 border">
                            Men casual
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col space-y-4 mr-16">
                    {linkNavbarImg.map((item, index) => (
                      <Link
                        key={index}
                        href={"/shop/"}
                        className="flex justify-start items-center rounded-lg cursor-pointer hover:bg-gray-200 h-26">
                        <div className="h-full w-18 p-1 overflow-hidden rounded-lg cursor-pointer">
                          <img
                            className="h-full w-full object-cover object-center rounded-lg"
                            src={item.src}
                            alt={item.alt}
                          />
                        </div>
                        <div className="p-2 h-full flex flex-col justify-between ml-2 pb-10">
                          <h3 className="text-sm font-playfair font-semibold text-gray-800">
                            {item.alt}
                          </h3>
                          <h4 className="font-light text-xs text-gray-600">
                            Lorem ipsum dolor sit amet.
                          </h4>
                        </div>
                      </Link>
                    ))}
                    <div className="flex justify-center items-center">
                      <UnderlineButton
                        className={"text-gray-700 text-sm "}
                        href={"/shop/all"}>
                        View All
                      </UnderlineButton>
                    </div>
                  </div>
                </div>
                <div className="mt-2 col-span-4">
                  <h3 className="font-extrabold font-playfair tracking-wider text-gray-800">
                    Most View
                  </h3>
                  <div className="grid grid-cols-3 gap-6 mt-2 pr-5">
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
                </div>
              </div>
            </div>
          }>
          Search
        </ButtonHover>
      )}
    </div>
  );
};

export default SearchNavbar;
