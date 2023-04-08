import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        {/* All Category Start */}
        <div className="px-8 py-4 flex items-center bg-primary cursor-pointer text-white relative group">
          <span className="text-white">
            <FaBars />
          </span>
          <span className="capitalize text-white ml-2 ">All Categories</span>
          <div className="absolute w-full left-0 top-full  bg-white shadow-md divide-y divide-gray-300 divide-dashed opacity-0  group-hover:opacity-100  transition duration-300 invisible group-hover:visible">
            <a
              href="/"
              className=" flex items-center py-3 px-6 hover:bg-gray-100 transition "
            >
              <FaBars className="w-5 h-5 object-contain text-gray-800" />
              <span className="ml-6 text-gray-600 text-sm">Shose</span>
            </a>
            <a
              href="/"
              className=" flex items-center py-3 px-6 hover:bg-gray-100 transition "
            >
              <FaBars className="w-5 h-5 object-contain text-gray-800" />
              <span className="ml-6 text-gray-600 text-sm">Shose</span>
            </a>
            <a
              href="/"
              className=" flex items-center py-3 px-6 hover:bg-gray-100 transition "
            >
              <FaBars className="w-5 h-5 object-contain text-gray-800" />
              <span className="ml-6 text-gray-600 text-sm">Shose</span>
            </a>
            <a
              href="/"
              className=" flex items-center py-3 px-6 hover:bg-gray-100 transition "
            >
              <FaBars className="w-5 h-5 object-contain text-gray-800" />
              <span className="ml-6 text-gray-600 text-sm">Shose</span>
            </a>
          </div>
        </div>

        {/* Nav Menu Area */}
        <div className="flex items-center justify-between flex-grow pl-12">
          <div className="flex items-center space-x-6 capitalize">
            <NavLink
              to="/"
              className="text-gray-200 hover:text-white transition"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className="text-gray-200 hover:text-white transition"
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-200 hover:text-white transition"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-200 hover:text-white transition"
            >
              Contact
            </NavLink>
            <NavLink
              to="/admin"
              className="text-gray-200 hover:text-white transition"
            >
              Admin
            </NavLink>
          </div>
          <div className="flex items-center capitalize">
            <NavLink
              to="/login"
              className="text-gray-200 hover:text-white transition"
            >
              Login /
            </NavLink>
            <nbsp />;
            <NavLink
              to="/register"
              className="text-gray-200 hover:text-white transition"
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMain;
