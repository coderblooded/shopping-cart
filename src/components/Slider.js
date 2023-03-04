import React from "react";
import { Link } from "react-router-dom";
import slider from "../images/slider.jpg";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <div
      className={styles.slider}
      style={{ backgroundImage: `url(${slider})` }}
    >
      <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center">
        <div
          id="slider-title"
          className="lg:pt-48 xl:pl-44 pt-16 lg:pl-16 relative z-20 lg:text-left text-center"
        >
          <h3 className="text-white sm:text-5xl text-4xl helveticaBlack tracking-wider leading-snug">
            World's Biggest
            <h3 className="helveticaBlack text-blue-400">
              Shop Of Collections
            </h3>
          </h3>
          <div className="xl:w-1/2 lg:w-3/4 mt-10 sm:w-5/12 w-11/12 py-5 sm:px-5 px-3 bg-gray-500 bg-opacity-20 rounded lg:mx-0 mx-auto">
            <p className="text-gray-300 leading-relaxed">
              From now on you can buy everything good from our website and then
              enjoy with everything you have you can order when ever you want so
              just buy products of course.
            </p>
          </div>
        </div>

        <div
          id="see-products"
          className="shadow-2xl rounded-lg bg-white bg-opacity-70 relative z-10 p-6 lg:w-4/12 w-11/12 lg:mr-14 lg:mt-0 mt-8"
        >
          <h3 className="xl:text-4xl lg:text-3xl helveticaMedium text-gray-700">
            YOU CAN SELECT THE CATEGORY YOU WANT
          </h3>
          <div className="sm:w-full w-64 flex sm:flex-nowrap flex-wrap justify-center items-center mt-6 mx-auto">
            <Link
              to="/category/electronics"
              className="sm:mx-0 mx-4 sm:my-0 bg-white w-20 h-20 rounded-xl shadow flex justify-center items-center"
            >
              <i className="fal fa-laptop text-3xl fond-bold text-blue-400"></i>
            </Link>
            <Link
              to="/category/jewelery"
              className="sm:ml-4 sm:mx-0 sm:my-0 my-4 bg-white w-20 h-20 rounded-xl shadow flex justify-center items-center"
            >
              <i className="fal fa-gem text-3xl fond-bold text-green-500"></i>
            </Link>
            <Link
              to="/category/men's clothing"
              className="sm:ml-4 sm:mx-0 mx-4 sm:my-0 bg-white w-20 h-20 rounded-xl shadow flex justify-center items-center"
            >
              <i class="fal fa-tshirt text-3xl fond-bold text-yellow-500"></i>
            </Link>
            <Link
              to="/category/women's clothing"
              className="sm:ml-4 bg-white w-20 h-20 rounded-xl shadow flex justify-center items-center"
            >
              <i className="fal fa-venus text-3xl fond-bold text-purple-600"></i>
            </Link>
          </div>
          <button className="xl:float-right block mx-auto bg-green-500 hover:bg-green-600 duration-200 sm:py-4 py-2.5 sm:px-16 px-10 text-white mt-8">
            See Products
          </button>
        </div>
      </div>

      <div
        id="slider-search-bar"
        className={`${styles.sliderSearchBar} bottom-8 flex items-center md:justify-between justify-center sm:mt-24 mt-20 bg-white rounded-full relative lg:w-3/5 md:w-4/5 sm:w-11/12 sm:py-4 z-10 w-72 mx-auto
        `}
      >
        <div className="w-full flex">
          <i className="fas fa-magnifying-glass text-green-500 ml-5"></i>
          <input
            type="text"
            placeholder="Search which products you want to choose..."
            className={`${styles.searchBar1} ml-5 w-full `}
          />
          <input
            type="text"
            placeholder="Search..."
            className={`${styles.searchBar2} ml-5 w-full hidden`}
          />
        </div>
        <button
          style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
          className="hover:bg-green-600 duration-300 bg-green-400 text-white rounded-full sm:px-12 px-8 py-2 md:mr-7"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Slider;
