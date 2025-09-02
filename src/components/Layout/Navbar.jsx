import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import styles from "../../styles/styles";

const Navbar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((item, index) => (
          <div key={index} className="flex">
            <a
              href={item.url}
              className={`pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer ${
                active === index + 1 ? "text-blue-400" : "text-black"
              }`}
            >
              {item.title}
            </a>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
