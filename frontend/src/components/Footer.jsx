import React from "react";
import { Link } from "react-router-dom";
import { IoArrowRedoCircle } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full min-h-fit lg:min-h-fit  px-4  text-white bg-[rgb(0,31,84)] flex flex-col justify-between sm:px-6 md:px-8">
      <h1 className="text-2xl uppercase py-8 lg:text-4xl lg:font-bold">Hyperfy Web Development</h1>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-xl uppercase lg:font-bold">→ Services</h1>
          <div>
            <ul className="capitalize text-sm text-white/90 lg:text-base">
              <li>• Website Development</li>
              <li>• SEO</li>
              <li>• UI/UX design</li>
            </ul>
          </div>
          <Link
            to={"/services"}
            className="text-sm underline text-blue-400 flex items-center gap-1"
          >
            <IoArrowRedoCircle />
            Know More
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl uppercase lg:font-bold">→ Social Links</h1>
          <div>
            <ul className="capitalize text-sm text-white/90  lg:text-base">
              <Link to={"/"} className="hover:text-green-300 hover:underline">
              <li className="flex items-center gap-2"><FaSquareInstagram className="text-red-500 text-xl" /> Instagram</li>
              </Link>
              <Link to={"/"} className="hover:text-green-300 hover:underline">
              <li className="flex items-center gap-2"><FaLinkedin className="text-blue-800 text-xl" /> LinkedIn</li>
              </Link>
              <Link to={"/"} className="hover:text-green-300 hover:underline">
              <li className="flex items-center gap-2"><FaFacebookSquare className="text-blue-500 text-xl" /> Facebook</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl uppercase lg:font-bold">→ Contact Us</h1>
          <div>
            <ul className="capitalize text-sm mb-2 text-white/90  lg:text-base">
              <li>• arjunnagar801098@gmail.com</li>
              <li>• himanshusingh31012004@gmail.com</li>
              <li>• prakashgour@gmail.com</li>
            </ul>
            <ul className="capitalize text-sm text-white/90  lg:text-base">
              <li>• +91 85068 01098</li>
              <li>• +91 78277 37703</li>
              <li>• +91 73889 10781</li>
            </ul>
            <Link
              to={"/contact"}
              className="text-sm underline text-blue-400 flex items-center gap-1"
            >
              <IoArrowRedoCircle />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <h1 className="mt-6 text-xs text-center lg:text-sm">
        © All rights reserved || HYPERFY CO.
      </h1>
    </div>
  );
};

export default Footer;
