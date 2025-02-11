import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-10 py-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">Ecommerce</h1>
        <ul className="flex space-x-8 text-lg">
          <li>
            <NavLink
              to={"/"}
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Home
            </NavLink>
          </li>
          {["Products", "Favourites", "Cart", "Login"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
