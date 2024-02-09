import Link from "next/link";
import React from "react";

const Navbar = () => {
  const Links = [
    {
      name: "Anasayfa",
      url: "/",
    },
    {
      name: "Profil",
      url: "/user",
    },
  ];
  return (
    <div className="fixed w-full h-[90px] flex items-center mix-blend-difference bg-slate-400">
      <div className="text-5xl">logo</div>
      <div>
        {Links.map((link, i) => (
          <Link key={i} href={link.url}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
