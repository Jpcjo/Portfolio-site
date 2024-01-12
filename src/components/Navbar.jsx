import React, { useState, useEffect, useRef } from "react";
import { links } from "../data";
import { SiAltiumdesigner } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Add a click event listener to the document to close the menu when clicking outside
    const handleClickOutside = (event) => {
      const menu = document.getElementById("dropdown-menu");

      if (menu && !menu.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add the click event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  let hoverTimeout;

  const handleLogoMouseEnter = () => {
    hoverTimeout = setTimeout(() => {
      setHovered(true);
    }, 200);
  };

  const handleLogoMouseLeave = () => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      setHovered(false);
    }, 200);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const scrollThreshold = 300;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-slate-50 opacity-95 fixed z-[20] shadow-sm transition-transform duration-500 ease-in-out ${
        isHidden ? " -translate-y-full" : "translate-y-0"
      }  min-w-full `}
    >
      <div
        className="align-element py-4 flex  
                    flex-row justify-between sm:gap-x-16 sm:items-center sm:py-6 md:px-20"
      >
        <div
          className="hover:translate-x-5 hover:scale-105 duration-300"
          onMouseEnter={handleLogoMouseEnter}
          onMouseLeave={handleLogoMouseLeave}
        >
          <a
            href="#home"
            className="hover:translate-x-5 hover:scale-105 duration-300"
          >
            <h2 className="text-3xl font-bold">
              <SiAltiumdesigner className="h-8 w-8 inline-block" />
              {hovered ? "GoBack" : "FWU"}
              <span className="text-violet-600 hover:text-slate-400 duration-300">
                {hovered ? "Home." : "Design."}
              </span>
            </h2>
          </a>
        </div>

        <div className="hamburger-menu relative lg:hidden" id="dropdown-menu">
          <button
            onClick={toggleMenu}
            className="hover:scale-110 duration-300 border border-gray-400 rounded-lg p-1"
          >
            <RxHamburgerMenu className="w-8 h-8" />
          </button>
          {isMenuOpen && (
            <ul
              className="menu-items absolute bg-white top-9 right-0 mt-2 
                           shadow-lg rounded-xl overflow-hidden w-[140px] p-3 border-1"
              onClick={() => closeMenu()}
            >
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="block p-2 rounded-lg text-black hover:bg-gray-200 hover:duration-300 "
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="hidden lg:block">
          <div className="flex gap-x-3 ">
            {links.map((link) => {
              const { id, href, text } = link;
              const color = text === "home" ? "text-violet-600" : "text-black";
              const hoverColor =
                text === "home"
                  ? "hover:text-black hover:font-bold"
                  : " hover:text-violet-500";
              return (
                <a
                  key={id}
                  href={href}
                  className={`capitalize text-lg tracking-wide font-medium ${color}
                           ${hoverColor} hover:underline hover:scale-110 duration-300`}
                >
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
