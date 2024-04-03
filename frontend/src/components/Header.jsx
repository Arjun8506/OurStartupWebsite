import React, { useState, useEffect } from "react";
import logo from "../assets/mainimage-removebg-preview.png";
import logoonphone from "../assets/Hyperfy_Logo.svg";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const location = useLocation();
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div
        className="text-center absolute top-0 left-0 z-50 w-full  py-3 sm:py-2 sm:px-6 md:px-8 md:py-1 px-4 flex items-center justify-between lg:px-10"
        style={
          location.pathname !== "/"
            ? { backgroundColor: "rgb(0,31,84)" }
            : { backgroundColor: "" }
        }
      >
        <img
          src={logo}
          alt="logo"
          className="w-[15%] sm:w-[18%] md:w-[15%] lg:w-[13%]  text-white"
        />
        {windowWidth >= 1024 ? (
          <ul className="flex items-center gap-4">
            <Link to={"/"}>
              <li
                className={` text-base py-1 px-5 rounded-full bg-white hover:text-blue-600 ${
                  location.pathname === "/" ? "text-green-500" : "text-black"
                }`}
              >
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li
                className={` text-base py-1 px-5 rounded-full bg-white hover:text-blue-600 ${
                  location.pathname === "/about" ? "text-green-500" : "text-black"
                }`}
              >
                About
              </li>
            </Link>
            <Link to={"/services"}>
              <li
                className={` text-base py-1 px-5 rounded-full bg-white hover:text-blue-600 ${
                  location.pathname === "/services" ? "text-green-500" : "text-black"
                }`}
              >
                Services
              </li>
            </Link>
            <Link to={"/contact"}>
              <li
                className={` text-base py-1 px-5 rounded-full bg-white hover:text-blue-600 ${
                  location.pathname === "/contact" ? "text-green-500" : "text-black"
                }`}
              >
                Contact
              </li>
            </Link>
          </ul>
        ) : (
          !menuOpen && (
            <BsFillMenuButtonWideFill
              className="text-2xl sm:text-3xl  text-white cursor-pointer"
              onClick={toggleMenu}
            />
          )
        )}
      </div>
      {menuOpen && (
        <div className="fixed top-0 w-full h-screen bg-white/95 z-50">
          <div className="px-4 sm:px-6 md:px-8  flex items-center justify-between py-8">
            <img
              src={logoonphone}
              alt="logo"
              className="w-[40%] sm:w-[30%] md:w-[25%] lg:w-[20%]"
            />
            <RxCross2
              className="text-2xl sm:text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <ul className="mt-0 text-center px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col gap-2 sm:gap-5 md:mt-10">
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
                  location.pathname === "/about" ? "text-green-500" : "text-black"
                }`}
              >
                About
              </li>
            </Link>
            <Link to={"/services"}>
              <li
                className={`font-bold text-xl rounded-lg py-2 bg-black/20 hover:text-blue-600 ${
                  location.pathname === "/services" ? "text-green-500" : "text-black"
                }`}
              >
                Services
              </li>
            </Link>
            <Link to={"/contact"}>
              <li
                className={`font-bold text-xl rounded-lg py-2 bg-black/20 hover:text-blue-600 ${
                  location.pathname === "/contact" ? "text-green-500" : "text-black"
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
