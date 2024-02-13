import Link from "next/link";
import React from "react";
import Theme from "./Theme";

const Navbar = () => {
  const Links = [
    {
      name: "Anasayfa",
      url: "/home",
    },
    {
      name: "Hakkımda",
      url: "/user",
    },
  ];
  return (
    <div id="nav" className="fixed w-full nav  ">
      <div className="lg:w-[70%] h-[90px] mx-auto flex items-center justify-between md:px-10  ">
        <div id="logo" className="text-5xl font-thin">
          BBG
        </div>
        <Theme />
        <ul className="flex text-xl gap-3 md:gap-10">
          {Links.map((link, i) => (
            <Link key={i} className="link" href={link.url}>
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
