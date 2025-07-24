import React from "react";
import Link from "next/link";

const ListLink = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.title}>
          <h3 className="text-lg font-semibold mb-2 px-2 tracking-wider ">
            {item.title}
          </h3>
          <ul className="flex flex-col w-full">
            {item.textLink.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-sm text-gray-600 p-2 hover:bg-gray-200 rounded-lg">
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default ListLink;
