import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import Navbar from "./Navbar";
import { navItems } from "../../static/data";
import styles from "../../styles/styles";

const Header = ({ activeHeading }) => {
  const [active, setActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <div
        className={`${
          active ? "shadow-sm fixed top-0 left-0 z-10" : ""
        } transition hidden 800px:flex justify-around items-center w-full bg-[#f0f9ff] h-[100px]`}
      >
        <div className="text-3xl font-bold text-blue-600">Portfolio</div>
        <div className={`${styles.noramlFlex}`}>
          <Navbar active={activeHeading} />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex 800px:hidden items-center justify-between w-full h-[70px] px-4 bg-[#f0f9ff] shadow-sm fixed top-0 left-0 z-10">
        <div className="text-2xl font-bold text-blue-600">Portfolio</div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <BiMenuAltLeft size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="800px:hidden fixed top-[70px] left-0 w-full bg-white shadow-md z-20">
          <ul className="flex flex-col items-start px-4 py-2 space-y-2 text-gray-700 font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-2 ${
                    activeHeading === index + 1 ? "text-blue-400" : "text-black"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
