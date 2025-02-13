import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black md:py-10 my-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold my-1">FlashCart</h2>
          <p className="text-sm text-gray-700">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <p>
            <FaFacebook className="text-xl hover:text-blue-500 transition" />
          </p>
          <p>
            <FaTwitter className="text-xl hover:text-blue-400 transition" />
          </p>
          <p>
            <FaInstagram className="text-xl hover:text-pink-500 transition" />
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <p className="flex items-center space-x-2 text-black hover:text-gray-700 transition">
            <FaGithub className="text-xl" />
            <span>Developed by Zaz</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
