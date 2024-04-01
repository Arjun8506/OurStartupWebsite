import React from "react";
import { Link } from "react-router-dom";
import { IoArrowRedoCircle } from "react-icons/io5";

const Footer = () => {
  

  return (
    <div className="w-full min-h-[100vh] px-4  text-white bg-[rgb(0,31,84)] flex flex-col justify-between">
      <h1 className="text-2xl uppercase py-8">Hyperfy Web Development</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl uppercase">→ Services</h1>
          <div>
            <ul className="capitalize text-sm text-white/90">
              <li>• Website Development</li>
              <li>• SEO</li>
              <li>• UI/UX design</li>
            </ul>
          </div>
          <Link to={"/services"} className="text-sm underline text-blue-400 flex items-center gap-1"><IoArrowRedoCircle />Know More</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl uppercase">→ Social Links</h1>
          <div>
            <ul className="capitalize text-sm text-white/90">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl uppercase">→ Contact Us</h1>
          <div>
            <ul className="capitalize text-sm mb-2 text-white/90">
              <li>• arjunnagar801098@gmail.com</li>
              <li>• himanshusingh31012004@gmail.com</li>
              <li>• prakashgour@gmail.com</li>
            </ul>
            <ul className="capitalize text-sm text-white/90">
              <li>• +91 85068 01098</li>
              <li>• +91 78277 37703</li>
              <li>• +91 73889 10781</li>
            </ul>
            <Link to={"/contact"} className="text-sm underline text-blue-400 flex items-center gap-1"><IoArrowRedoCircle />Contact Us</Link>
          </div>
        </div>
      </div>
      <h1 className="mb-4 text-xs text-center">© All rights reserved || HYPERFY CO.</h1>
    </div>
  );
};

export default Footer;
