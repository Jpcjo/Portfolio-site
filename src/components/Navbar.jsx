import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // Check screen size and hide/show the navbar
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMenuShown(true);
      } else {
        setIsMenuShown(false);
      }
    };

    // Add a resize event listener
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener
      window.removeEventListener("resize", handleResize);
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
        //currentScrollY > lastScrollY  is checking whether is scrolling down.
        // If yes, hide the navbar
        //If currentScrollY is greater than lastScrollY, user is scrolling down.
        //If currentScrollY is less than lastScrollY, user is scrolling up.
        //If the current scroll position is greater (i.e., lower on the page) than the last scroll position, it means the user is scrolling downward.
        setIsHidden(true);
      } else {
        // Scrolling up, show the navbar
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };
    //After making this comparison, lastScrollY is updated to match currentScrollY at the end of the handleScroll function, so it now stores the previous scroll position for the next scroll event.

    window.addEventListener("scroll", handleScroll);
    // to invoke handleScroll function

    return () => {
      // Clean up the event listener
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
        className="align-element py-4 flex flex-col
                   sm:flex-row justify-between sm:gap-x-16 sm:items-center sm:py-6 md:px-20"
        // align-element is repeated style. see index.css
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

        {isMenuShown ? (
          <div className="hamburger-menu">
            <button
              onClick={toggleMenu}
              className="hover:scale-110 duration-300 border border-gray-400 rounded-lg p-1"
            >
              <RxHamburgerMenu className="w-8 h-8" />
            </button>
            {isMenuOpen && (
              <ul className="menu-items">{/* Your menu items go here */}</ul>
            )}
          </div>
        ) : (
          <div className="hidden lg:block">
            <div className="flex gap-x-3 ">
              {links.map((link) => {
                const { id, href, text } = link;
                const color =
                  text === "home" ? "text-violet-600" : "text-black";
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
