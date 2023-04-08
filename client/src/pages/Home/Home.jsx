import React from "react";
import { Link } from "react-router-dom";
import bgHomeimg from "../../images/bg/banner-1.jpg";
import offer2 from "../../images/bg/offer-2.jpg";
import delivery from "../../images/icon/delivery-van.svg";
import moneyBack from "../../images/icon/money-back.svg";
import serviceHours from "../../images/icon/service-hours.svg";
import category1 from "../../images/categorys/category-1.jpg";
import ProductItem from "../../components/ProductItem";

const Home = () => {
  return (
    <>
      {/* slider section  */}
      <section
        className="bg-cover bg-no-repeat bg-center py-36"
        style={{ backgroundImage: `url(${bgHomeimg})` }}
      >
        <div className="container  ">
          <h1 className="text-6xl font-medium mb-4 capitalize text-gray-800">
            Best Collection For <br /> Home Decoration
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Vulputate rhoncus pellentesqu
          </p>
          <div>
            <Link
              to="/shop"
              className="bg-primary border border-primary text-white py-3 px-8 font-medium rounded-md hover:bg-transparent hover:text-primary transition-all mt-5 inline-block"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      {/* slider section end */}

      {/* Feature area start  */}
      <div className="container py-16">
        <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center ">
          {/* Single Feature  */}
          <div className="flex border border-primary rounded-sm py-6 px-3 justify-center items-center gap-5">
            <img
              src={delivery}
              alt="Delivery icon"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">Free shipping</h4>
              <p className="text-gray-500 text-sm">Orders over $200</p>
            </div>
          </div>
          {/* Single Feature  */}
          <div className="flex border border-primary rounded-sm py-6 px-3 justify-center items-center gap-5">
            <img
              src={moneyBack}
              alt="Delivery icon"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">Money Returns</h4>
              <p className="text-gray-500 text-sm">30 Days money return</p>
            </div>
          </div>
          {/* Single Feature  */}
          <div className="flex border border-primary rounded-sm py-6 px-3 justify-center items-center gap-5">
            <img
              src={serviceHours}
              alt="Delivery icon"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>
      {/* Feature area end  */}

      {/* Category start */}
      <div className="container">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          SHOP BY CATEGORY
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {/* single category */}
          <div className="relative rounded-sm overflow-hidden group">
            <img src={category1} alt="" className="w-full" />
            <a
              href="/"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-2xl font-medium font-roboto group-hover:bg-opacity-60 transition"
            >
              Bedroom
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img src={category1} alt="" className="w-full" />
            <a
              href="/"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-2xl font-medium font-roboto group-hover:bg-opacity-50 transition"
            >
              Bedroom
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img src={category1} alt="" className="w-full" />
            <a
              href="/"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-2xl font-medium font-roboto group-hover:bg-opacity-50 transition"
            >
              Bedroom
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img src={category1} alt="" className="w-full" />
            <a
              href="/"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-2xl font-medium font-roboto group-hover:bg-opacity-50 transition"
            >
              Bedroom
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img src={category1} alt="" className="w-full" />
            <a
              href="/"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-2xl font-medium font-roboto group-hover:bg-opacity-60 transition"
            >
              Bedroom
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img src={category1} alt="" className="w-full" />
            <a
              href="/"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-2xl font-medium font-roboto group-hover:bg-opacity-60 transition"
            >
              Bedroom
            </a>
          </div>
        </div>
      </div>
      {/* Category end */}

      {/* Product wrpper  */}
      <div className="container py-14">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          TOP NEW ARRIVAL
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
      {/* Product wrpper end  */}

      {/* Offer section start  */}
      <div className="container my-14">
        <img src={offer2} alt="" />
      </div>
      {/* Offer section End  */}

      {/* RECOMENDED FOR YOU   */}
      <div className="container py-4">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          RECOMENDED FOR YOU
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
      {/* RECOMENDED FOR YOU End  */}
    </>
  );
};

export default Home;
