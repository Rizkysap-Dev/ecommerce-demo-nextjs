"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

const UnderlineButton = ({ href, children, className, Button, onClick }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group h-fit w-fit">
        {Button ? (
          <button onClick={onClick} className="relative">
        <span className={className}>{children}</span>
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-1 -left-[1px] -right-[1px] h-[2px] origin-left rounded-full bg-gray-800 transition-transform duration-300 ease-out"
        />
      </button>
        ): <Link href={href} className="relative">
        <span className={className}>{children}</span>
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-1 -left-[1px] -right-[1px] h-[2px] origin-left rounded-full bg-gray-800 transition-transform duration-300 ease-out"
        />
      </Link>}
      
    </div>
  );
};

export default UnderlineButton;
