import React from "react";
import { Link } from "react-router-dom";
import { BiHome, BiChevronRight, BiGridAlt, BiListUl } from "react-icons/bi";
import ProductItem from "../../components/ProductItem";

const Shop = () => {
  return (
    <>
      <div className="container py-4 flex items-center gap-3">
        <Link to="/" className="text-primary text-base">
          <BiHome />
        </Link>
        <span className=" text-sm text-gray-400">
          <BiChevronRight />
        </span>
        <p className="text-gray-600 font-medium">Shop</p>
      </div>

      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        {/* site bar area  */}
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
          <div className="divide-y divide-gray-200 space-y-5">
            {/* Category Filter area */}
            <div>
              <h3 className="text-xl text-gray-800 font-medium mb-3 uppercase">
                All Category
              </h3>

              <div className="py-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cart-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cart-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Women
                  </label>
                  <div className="text-gray-600 ml-auto text-sm">(15)</div>
                </div>
              </div>

              <div className="py-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cart-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cart-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Men
                  </label>
                  <div className="text-gray-600 ml-auto text-sm">(5)</div>
                </div>
              </div>
            </div>
            {/* Category Filter area end */}

            {/* Brand Filter aret */}
            <div className="divide-y divide-gray-200 space-y-5 pt-3">
              <div>
                <h3 className="text-xl text-gray-800 font-medium mb-3 uppercase">
                  All Brand
                </h3>

                <div className="py-1">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="cart-1"
                      className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label
                      htmlFor="cart-1"
                      className="text-gray-600 ml-3 cursor-pointer"
                    >
                      Women
                    </label>
                    <div className="text-gray-600 ml-auto text-sm">(15)</div>
                  </div>
                </div>

                <div className="py-1">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="cart-1"
                      className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label
                      htmlFor="cart-1"
                      className="text-gray-600 ml-3 cursor-pointer"
                    >
                      Men
                    </label>
                    <div className="text-gray-600 ml-auto text-sm">(5)</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Brand Filter aret end */}

            {/* Pricing Filter aret */}
            <div className="divide-y divide-gray-200 space-y-5 pt-3">
              <div>
                <h3 className="text-xl text-gray-800 font-medium mb-3 uppercase">
                  Price
                </h3>
                <div className="flex items-center mt-4">
                  <input
                    type="text"
                    className="w-full border-gray-300 focus:border-primary focus:ring-0 text-gray-600 shadow-sm rounded text-sm "
                    placeholder="Min"
                  />
                  <span className="mx-3 text-gray-500">-</span>
                  <input
                    type="text"
                    className="w-full border-gray-300 focus:border-primary focus:ring-0 text-gray-600 shadow-sm rounded text-sm "
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
            {/* Pricing Filter aret end */}

            {/* Size Filter aret */}
            <div className="divide-y divide-gray-200 space-y-5 pt-3">
              <div>
                <h3 className="text-xl text-gray-800 font-medium mb-3 uppercase">
                  Size
                </h3>
              </div>
            </div>
            {/* Size Filter aret end */}

            {/* Color Filter aret */}
            <div className="divide-y divide-gray-200 space-y-5 pt-3">
              <div>
                <h3 className="text-xl text-gray-800 font-medium mb-3 uppercase">
                  Color
                </h3>
              </div>
            </div>
            {/* Color Filter aret end */}
          </div>
        </div>
        {/* site bar area end */}

        {/* Product area  */}
        <div className="col-span-3 ">
          {/* Shorting area  */}
          <div className="flex items-center mb-4">
            <select
              name="select"
              id=""
              className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
            >
              <option>Default Shorting</option>
              <option>Default Shorting</option>
              <option>Default Shorting</option>
            </select>
            <div className="flex gap-2 ml-auto">
              <div className="border border-primary w-10 h-9 flex items-center  justify-center text-white bg-primary cursor-pointer rounded  ">
                <BiGridAlt />
              </div>
              <div className="border border-primary w-10 h-9 flex items-center  justify-center text-primary cursor-pointer rounded  ">
                <BiListUl />
              </div>
            </div>
          </div>
          {/* Shorting area end */}
          <div className="grid grid-cols-3 gap-6">
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
        {/* Product area end */}
      </div>
    </>
  );
};

export default Shop;
