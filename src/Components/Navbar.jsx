import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];

  const rightNavItems = [
    { name: "Favourites", path: "/favourites", icon: FaRegHeart },
    { name: "Cart", path: "/cart", icon: LuShoppingCart },
    { name: "Login", path: "/login", icon: FaUserPlus },
  ];

  const getNavLinkClass = (isActive) =>
    `flex items-center gap-2 hover:text-blue-600 transition-colors duration-300 ${
      isActive ? "text-blue-600 font-semibold" : ""
    }`;

  return (
    <nav className="px-4 md:px-8 lg:px-28 py-5 shadow-lg fixed w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-lg md:text-2xl font-bold tracking-wide">
          Ecommerce
        </h1>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <IoMdClose className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>

        <div className="hidden md:flex md:items-center md:justify-center flex-grow">
          <ul className="flex space-x-8 text-lg">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => getNavLinkClass(isActive)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <ul className="hidden md:flex items-center space-x-6 text-lg">
          {rightNavItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                <item.icon className="text-xl" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden absolute top-full left-0 right-0 bg-white shadow-lg`}
        >
          <ul className="flex flex-col w-full p-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => getNavLinkClass(isActive)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            {rightNavItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => getNavLinkClass(isActive)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="text-xl" />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;