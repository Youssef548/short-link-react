import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import "./Menu.css";
const Menu = () => {
  const [active, setActive] = useState("features");
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleLinkClick = (link) => {
    setActive(link);
  };

  return (
    <div>
      <button
        className="hamburger md:hidden"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <RxHamburgerMenu size={20} />
      </button>

      <ul
        className={`navigation flex flex-col md:flex-row gap-3 ${
          isNavExpanded ? "show" : "hide"
        }`}
      >
        <li>
          <a
            href="#features"
            className={`p-2 md:p-4 lg:p-6 ${
              active === "features" ? "text-black" : "text-gray-500"
            } hover:text-black duration-300 text-sm md:text-base lg:text-lg`}
            onClick={() => handleLinkClick("features")}
          >
            {" "}
            Features
          </a>
        </li>
        <li>
          <a
            href="#pricing"
            className={`p-2 md:p-4 lg:p-6 ${
              active === "pricing" ? "text-black" : "text-gray-500"
            } hover:text-black duration-300 text-sm md:text-base lg:text-lg`}
            onClick={() => handleLinkClick("pricing")}
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#resources"
            className={`p-2 md:p-4 lg:p-6 ${
              active === "resources" ? "text-black" : "text-gray-500"
            } hover:text-black duration-300 text-sm md:text-base lg:text-lg`}
            onClick={() => handleLinkClick("resources")}
          >
            Resources
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
