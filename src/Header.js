import React from "react";
import logo from "./assests/logo.svg";
function Header() {
  return (
    <div className="flex justify-between px-4 py-4 w-full ">
      <div>
        <img src={logo} className="w-10 h-10" />
      </div>
      <div className="flex justify-between items-center">
        <ul className="flex justify-between items-center w-full space-x-4">
          <li className="text-sm font-bold hover:opacity-70 cursor-pointer">
            About
          </li>
          <li className="text-sm font-bold hover:opacity-70 cursor-pointer">
           <a href="#skills">  Skills</a>
          </li>
          <li className="text-sm font-bold hover:opacity-70 cursor-pointer">
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/19rWtaIV_kCHZmPbLKOq4ToR-r5GFFiYW/view?usp=sharing"
          download
          target="_blank"
        >
          <button className="border-2 p-2 rounded-lg lg:px-4 border-green-500 font-bold text-sm">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
