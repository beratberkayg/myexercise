import Link from "next/link";
import React from "react";

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
    <div className="fixed w-full  ">
      <div className="lg:w-[70%] h-[90px] mx-auto flex items-center justify-between md:px-10  ">
        <div className="text-5xl font-thin">BBG</div>
        <div className="flex text-xl gap-3 md:gap-10">
          {Links.map((link, i) => (
            <Link className="link" key={i} href={link.url}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
