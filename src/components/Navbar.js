import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useSelector } from "react-redux";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const state = useSelector((state) => state.cartState);
  return (
    <div>
      <div
        id="navbar"
        className={`${styles.navbar} relative bg-transparent h-16 flex items-center`}
      >
        <div className="container flex justify-center mx-auto items-center">
          <Link to="/" id="logo" className="lg:order-1 order-2 lg:mx-0 mx-auto">
            <h2 className="text-gray-900 text-2xl helveticaMedium">
              Siboria
              <span className="text-yellow-500 text-2xl ml-0.5 font-bold">
                .
              </span>
            </h2>
          </Link>
          <div
            id="mobile-menu-icon"
            className="lg:order-2 order-1 block lg:hidden sm:ml-4 ml-8"
            onClick={() => setIsShowMenu(!isShowMenu)}
          >
            <i className="fas fa-bars  text-2xl"></i>
          </div>
          <div
            id="menu"
            className="lg:order-3 lg:flex hidden justify-center items-center list-none mx-auto text-white text-xl"
          >
            <li className=" mx-1 text-gray-400 duration-300 p-2 px-4 rounded helveticaBlack">
              <Link to="/" className={`${styles.navLink} text-sm`}>
                Home
              </Link>
            </li>
            <li className=" mx-1 text-gray-400 duration-300 p-2 px-4 rounded helveticaBlack">
              <Link to="/products" className={`${styles.navLink} text-sm`}>
                Products
              </Link>
            </li>
            <li className=" mx-1 text-gray-400 duration-300 p-2 px-4 rounded helveticaBlack">
              <a href="#" className={`${styles.navLink} text-sm`}>
                About us
              </a>
            </li>
            <li className=" mx-1 text-gray-400 duration-300 p-2 px-4 rounded helveticaBlack">
              <a href="#" className={`${styles.navLink} text-sm`}>
                Contact us
              </a>
            </li>
          </div>
          <div
            id="account"
            className="order-3 lg:order-4 sm:mr-4 mr-8 relative flex text-white text-lg "
          >
            <a
              href="#"
              className="lg:inline-block text-base text-gray-500 hidden mr-6 border-l-2 border-green-100 border-opacity-20 pl-4 hover:text-gray-300 duration-300"
            >
              <i className="fal fa-user mr-2 font-bold text-gray-500"></i>
              <Link to="/login">Login / Sign up</Link>
            </a>
            <Link
              to="/cart"
              className="hover:text-gray-300 duration-300 text-gray-800 text-base"
            >
              <i className="fal fa-shopping-bag font-bold text-gray-500"></i>
              <span
                id="count"
                className="absolute px-2 bg-green-300 text-white top-0 transform sm:-translate-x-3 -translate-x-4 -translate-y-1 rounded-full sm:w-4 h-4.5 sm:h-4.5 flex items-center justify-center text-xs "
              >
                {state.itemsCounter}
              </span>
              <span className="lg:inline-block hidden mr-4 text-gray-500">
                <span className="mx-1 text-sm">({state.total})</span>$
              </span>
            </Link>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={
            isShowMenu
              ? "visible flex flex-col justify-center items-center absolute top-16 bg-green-400 w-full list-none p-4 text-white text-2xl z-30"
              : "hidden"
          }
        >
          <li className="hover:bg-green-500 hover:bg-opacity-60 duration-300 w-32 rounded flex justify-center">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-green-500 hover:bg-opacity-60 duration-300 w-32 rounded flex justify-center mt-3">
            <Link to="/products">Products</Link>
          </li>
          <li className="hover:bg-green-500 hover:bg-opacity-60 duration-300 w-32 rounded flex justify-center mt-3">
            <a href="#">About Us</a>
          </li>
          <li className="hover:bg-green-500 hover:bg-opacity-60 duration-300 w-32 rounded flex justify-center mt-3">
            <a href="#">Contact Us</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
