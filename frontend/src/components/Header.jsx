import React, { useState } from "react";
import logo from "../assets/mainimage-removebg-preview.png";
import logoonphone from "../assets/Hyperfy_Logo.svg";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [height, setheight] = useState("");
  const [bgcolor, setbgcolor] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [color, setcolor] = useState("black");

  const location = useLocation();

  return (
    <header>
      <div
        className="text-center absolute top-0 left-0 z-50 w-full  py-3 sm:px-6 md:px-8 px-4 flex items-center justify-between"
        style={
          location.pathname !== "/"
            ? { backgroundColor: "rgb(0,31,84" }
            : { backgroundColor: "" }
        }
      >
        {!menuOpen && (
          <>
            <img src={logo} alt="logo" className="w-[35%] sm:w-[20%] md:w-[18%]  text-white" />
            <BsFillMenuButtonWideFill
              className="text-2xl sm:text-3xl  text-white"
              onClick={toggleMenu}
            />
          </>
        )}
      </div>

      {menuOpen && (
        <div className="fixed top-0 w-full h-screen bg-white/95 z-40">
          <div className="px-4 sm:px-6 md:px-8  flex items-center justify-between py-8">
            <img src={logoonphone} alt="logo" className="w-[40%] sm:w-[30%]" />
            <RxCross2 className="text-2xl sm:text-3xl" onClick={toggleMenu} />
          </div>
          <ul className="mt-0 text-center px-4 sm:px-6 md:px-8  flex flex-col gap-2 sm:gap-5 md:mt-10">
            <Link to={"/"}>
              <li
                className={`font-bold text-xl rounded-lg py-2 bg-black/20 hover:text-blue-600 ${
                  location.pathname === "/" ? "text-green-500" : "text-black"
                }`}
              >
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li
                className={`font-bold text-xl rounded-lg py-2 bg-black/20 hover:text-blue-600 ${
                  location.pathname === "/about"
                    ? "text-green-500"
                    : "text-black"
                }`}
              >
                About
              </li>
            </Link>
            <Link to={"/services"}>
              <li
                className={`font-bold text-xl rounded-lg py-2 bg-black/20 hover:text-blue-600 ${
                  location.pathname === "/services"
                    ? "text-green-500"
                    : "text-black"
                }`}
              >
                Services
              </li>
            </Link>
            <Link to={"/contact"}>
              <li
                className={`font-bold text-xl rounded-lg py-2 bg-black/20 hover:text-blue-600 ${
                  location.pathname === "/contact"
                    ? "text-green-500"
                    : "text-black"
                }`}
              >
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
