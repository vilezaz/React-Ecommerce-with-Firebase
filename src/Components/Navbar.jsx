import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/Slices/auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartProducts = useSelector((state) => state.cart.cart);
  const fvtProducts = useSelector((state) => state.favourite.favourites);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];

  const rightNavItems = [
    { name: "Favourites", path: "/favourites", icon: FaRegHeart, count: fvtProducts.length },
    { name: "Cart", path: "/cart", icon: LuShoppingCart, count: cartProducts.length }
  ];

  const getNavLinkClass = (isActive) =>
    `relative flex items-center gap-2 hover:text-blue-600 transition-colors duration-300 ${
      isActive ? "text-blue-600 font-semibold" : ""
    }`;

    const handleLogout = () => {
      setIsMenuOpen(false);
      dispatch(logoutUser())
        .unwrap()
        .then(() => {
          toast.success("Logout successful!");
        })
        .catch((error) => {
          toast.error("Logout failed! " + error.message);
        });
    };
    

  return (
    <nav className="px-4 md:px-8 lg:px-28 py-5 shadow-lg fixed w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-lg md:text-2xl font-bold tracking-wide">
          FlashCart
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
            <li key={item.name} className="relative">
              <NavLink
                to={item.path}
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                <item.icon className="text-2xl" />
                {item.count > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                    {item.count}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
          {user ? (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 cursor-pointer text-white px-4 py-1 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink to="/login" className={({ isActive }) => getNavLinkClass(isActive)}>
                <FaUserPlus className="text-2xl" />
              </NavLink>
            </li>
          )}
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
                  {item.count > 0 && (
                    <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                      {item.count}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
            {user ? (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink to="/login" className={({ isActive }) => getNavLinkClass(isActive)}>
                <FaUserPlus className="text-2xl" onClick={() => setIsMenuOpen(false)} />
              </NavLink>
            </li>
          )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
