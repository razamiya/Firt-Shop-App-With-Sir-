import React from "react";
import { BiChevronRight, BiHome, BiStar } from "react-icons/bi";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import product1 from "../../src/images/categorys//category-1.jpg";
import ProductItem from "../components/ProductItem";

const SingleProduct = () => {
  return (
    <div onLoad={() => window.scrollTo(0, 0)}>
      <div className="container py-4 flex items-center gap-3">
        <Link to="/shop" className="text-primary text-base">
          <BiHome />
        </Link>
        <span className=" text-sm text-gray-400">
          <BiChevronRight />
        </span>
        <p className="text-gray-600 font-medium">Single Product</p>
      </div>

      {/* single product wrapper  */}
      <div className="container grid grid-cols-2 gap-6 ">
        {/* product image  */}
        <div>
          <img src={product1} alt="" className="w-full" />
          <div className="grid grid-cols-5 gap-4 mt-4 ">
            <img
              src={product1}
              alt=""
              className="w-full border-2 border-primary cursor-pointer"
            />
            <img
              src={product1}
              alt=""
              className="w-full  cursor-pointer  border"
            />
            <img
              src={product1}
              alt=""
              className="w-full  cursor-pointer  border"
            />
            <img
              src={product1}
              alt=""
              className="w-full  cursor-pointer  border"
            />
            <img
              src={product1}
              alt=""
              className="w-full  cursor-pointer  border"
            />
          </div>
        </div>
        {/* product image end */}

        {/* product content  */}
        <div>
          <div>
            <a href="/">
              <h2 className="uppercase font-medium text-3xl mb-2 text-gray-800 hover:text-primary transition">
                MEN'S ADIDAS COURTSMASH
              </h2>
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
              <p className="text-sm text-gray-500 ml-3">50 Reviews</p>
            </div>
            <div className="space-y-2">
              <p className="my-1 font-semibold space-x-2">
                <span>Availability:</span>
                <span className="text-green-600">In Stock</span>
              </p>

              <p className=" space-x-2">
                <span className="font-semibold text-gray-800">Brand:</span>
                <span className="text-gray-600">Bata</span>
              </p>

              <p className=" space-x-2">
                <span className="font-semibold text-gray-800">Category:</span>
                <span className="text-gray-600">Clothing</span>
              </p>

              <p className=" space-x-2">
                <span className="font-semibold text-gray-800">SKU:</span>
                <span className="text-gray-600">BE45VGRT</span>
              </p>
            </div>
            <div className="flex items-baseline my-3 space-x-2 font-roboto">
              <p className="text-2xl text-primary font-bold ">$4500.00 </p>
              <p className="text-base text-gray-600 line-through font-medium">
                $5000.00 0
              </p>
            </div>
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              exercitationem quaerat excepturi labore blanditiis
            </p>
            {/* Quantity */}
            <div className="mt-4">
              <h2 className="text-sm text-gray-800 bt-1 uppercase font-medium">
                Quantity
              </h2>
              <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max mt-2">
                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                  -
                </div>
                <div className="h-8 w-8 text-base flex items-center justify-center">
                  5
                </div>
                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                  +
                </div>
              </div>
            </div>
            {/* Quantity end */}

            {/* Cart Button  */}
            <div className="flex gap-6 border-b border-gray-200 pb-5 pb-6">
              <Link
                to=""
                className="bg-primary border border-primary text-white py-2 px-6 font-medium rounded-md hover:bg-transparent hover:text-primary transition mt-5 flex gap-3 items-center justify-center"
              >
                <FaShoppingCart />
                ADD TO CART
              </Link>
              <Link
                to=""
                className=" border border-primary text-primary py-2 px-6 font-medium rounded-md hover:bg-primary hover:text-white transition mt-5 flex gap-3 items-center justify-center"
              >
                <FaHeart />
                WISHLIST
              </Link>
            </div>
            {/* Cart Button end */}

            {/* Social Sheare  */}
            <div className="flex gap-3 mt-4">
              <a
                href="/#"
                className="text-gray-800  bg-white text-xl p2 hover:text-primary h-8 w-8 rounded-full transition flex items-center justify-center"
              >
                <BsFacebook />
              </a>
              <a
                href="/#"
                className="text-gray-800  bg-white text-xl p2 hover:text-primary h-8 w-8 rounded-full transition flex items-center justify-center"
              >
                <BsTwitter />
              </a>
              <a
                href="/#"
                className="text-gray-800  bg-white text-xl p2 hover:text-primary h-8 w-8 rounded-full transition flex items-center justify-center"
              >
                <BsInstagram />
              </a>
            </div>
            {/* Social Sheare end */}
          </div>
        </div>
        {/* product content end */}
      </div>

      {/* Product Details  */}
      <div className="container ">
        <div className=" pt-6 w-3/5 ">
          <div className="text-gray-600 space-y-3">
            <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
              Product Details
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              soluta quo expedita repellat quaerat sequi tempore neque
              perspiciatis eos a possimus perferendis voluptatibus laborum minus
              tempora, deleniti architecto! Libero, laboriosam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              soluta quo expedita repellat quaerat sequi tempore neque
              perspiciatis eos a possimus perferendis voluptatibus laborum minus
              tempora, deleniti architecto! Libero, laboriosam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              soluta quo expedita repellat quaerat sequi tempore neque
              perspiciatis eos a possimus perferendis voluptatibus laborum minus
              tempora, deleniti architecto! Libero, laboriosam.
            </p>
          </div>
        </div>
      </div>
      {/* Product Details end */}

      {/* Related Products   */}
      <div className="container py-4 my-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          Related Products
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
      {/* Related Products */}
      {/* single product wrapper end */}
    </div>
  );
};

export default SingleProduct;
