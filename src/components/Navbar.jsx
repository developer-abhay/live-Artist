import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "../data/data";

const Navbar = () => {
  const [navHidden, setNavHidden] = useState("hidden");
  const showNav = () => {
    if (navHidden == "block") {
      setNavHidden("hidden");
    } else {
      setNavHidden("block");
    }
  };

  return (
    <header className="z-[999] fixed top-0 bg-white h-[80px] w-[100%] shadow-lg">
      <nav className="flex justify-between items-center h-full w-[100%] py-0 px-20 relative">
        <div className="text-[32px]">LiveShow</div>
        <GiHamburgerMenu
          className="text-[28px] cursor-pointer  absolute right-20 top-10 translate-y-[-50%] hidden md:block"
          onClick={showNav}
        />

        <div
          className={`flex w-[60%] justify-evenly custom-trans md:nav-menu-md md:${navHidden}`}
        >
          {navLinks.map(({ to, label }, index) => (
            <Link key={index} to={to} className="nav-item md:nav-item-md">
              {label}
            </Link>
          ))}
        </div>

        <a className="btn md:hidden">Sign In</a>
      </nav>
    </header>
  );
};

export default Navbar;
