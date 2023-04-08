import React from "react";
import { FaHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className=" py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        {/* Logo  */}
        <a href="/" className="w-32">
          <h1 className="text-3xl font-bold font-poppins">
            <span className="text-primary">Raza</span>
            <span className="text-gray-800">Vai</span>
          </h1>
        </a>
        {/* Search Bar */}
        <div className="flex w-full max-w-xl relative">
          <span className="absolute left-4 top-3 text-lg text-gray-400">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            className="w-full border border-primary border-r-0 pl-12 py-3 pr-3  rounded-l-md focus:outline-none "
            placeholder="Search...."
          />
          <button className="bg-primary border border-primary rounded-r-md px-8 text-white hover:bg-transparent hover:text-primary transition">
            Search
          </button>
        </div>
        {/* Card, Wish List, User Icon  */}
        <div className="flex items-center justify-center space-x-7">
          <a href="/" className="text-gray-700 text-center  relative">
            <div className="text-2xl">
              <FaHeart />
            </div>

            <span className="absolute h-5 w-5 bg-primary -top-2 right-2 rounded-full flex items-center justify-center align-middle text-white text-xs ">
              8
            </span>
            <div className="text-xs leading-3 my-1.5">Wish List</div>
          </a>
          <a href="/" className="text-gray-700 text-center  relative">
            <div className="text-2xl">
              <FaShoppingCart />
            </div>

            <span className="absolute h-5 w-5 bg-primary -top-2 -right-3 rounded-full flex items-center justify-center align-middle text-white text-xs ">
              3
            </span>
            <div className="text-xs leading-3 my-1.5">Card</div>
          </a>
          <a href="/" className="text-gray-700 text-center  relative">
            <div className="text-2xl">
              <FaUserAlt />
            </div>
            <div className="text-xs leading-3 my-1.5">Acount</div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
