import React from "react";
import { Link } from "react-router-dom";
import { BiHeart, BiShow, BiSearch, BiStar } from "react-icons/bi";

import product1 from "../images/categorys/category-1.jpg";

const ProductItem = () => {
  return (
    <>
      {/* single product */}
      <Link to={"/myslug"}>
        <div className="bg-white rounded shadow overflow-hidden group  ">
          {/* product image */}

          <div className="relative hover:cursor-pointer ">
            <img src={product1} alt="" className="w-full " />

            <div className=" opacity-0 group-hover:opacity-100 transition ">
              <div className=" absolute inset-0  bg-black bg-opacity-40 flex items-start justify-end gap-2 p-3">
                <Link
                  to={"/shop"}
                  className="  text-white text-lg h-9 w-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <BiSearch />
                </Link>
                <Link
                  to={"/wishView"}
                  className="  text-white text-lg h-9 w-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                >
                  <BiHeart />
                </Link>
              </div>
              <Link
                to="/quickList"
                className="absolute left-0 bottom-0 bg-slate-800 text-white text-xl flex gap-2 items-center justify-center w-full py-1.5 "
              >
                <BiShow className="text-white text-xl flex items-center justify-center " />
                <a href="/" className="text-white text-lg  ">
                  Quick View
                </a>
              </Link>
            </div>
          </div>

          {/* product image end */}

          {/* Product Contect  */}
          <div className="pt-4 pb-3 px-4">
            <a href="/">
              <Link to={"/mytest"}>
                <h1 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  GUYER Chair
                </h1>
              </Link>
              <p className="text-gray-600 font-roboto font-medium text-sm">
                Queen Headboard
              </p>
              <div className="flex items-baseline my-1 space-x-2 font-roboto">
                <p className="text-xl text-primary font-bold ">$45.00</p>
                <p className="text-sm text-gray-600 line-through">$16.00</p>
              </div>
            </a>
            <div className="flex items-center">
              <div className="flex gap-1 text-xl my-3 text-yellow-400 ">
                <span>
                  <BiStar />
                </span>
                <span>
                  <BiStar />
                </span>
                <span>
                  <BiStar />
                </span>
                <span>
                  <BiStar />
                </span>
                <span>
                  <BiStar />
                </span>
              </div>
              <p className="text-xs text-gray-500 ml-3">(150)</p>
            </div>
          </div>

          <a
            href="#"
            className="w-full block bg-primary border border-primary text-center text-xl text-white py-2 hover:bg-transparent hover:text-primary transition rounded-full"
          >
            Add To Card
          </a>
          {/* Product Contect end */}
        </div>
        {/* single product end  */}
      </Link>
    </>
  );
};

export default ProductItem;
