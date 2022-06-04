import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const state = useSelector((state) => state.cartState);
  return (
    <div>
      <div id="navbar" className="relative bg-green-600 h-16 flex items-center">
        <div className="container flex justify-center mx-auto items-center">
          <Link to="/" id="logo" className="lg:order-1 order-2 lg:mx-0 mx-auto">
            <img src={logo} alt="Logo" />
          </Link>
          <div
            id="mobile-menu-icon"
            className="lg:order-2 order-1 block lg:hidden mr-4"
            onClick={() => setIsShowMenu(!isShowMenu)}
          >
            <i className="fas fa-bars text-white text-2xl"></i>
          </div>
          <div
            id="menu"
            className="lg:order-3 lg:flex hidden justify-center items-center list-none mx-auto text-white text-xl"
          >
            <li className="mx-1 hover:bg-green-400 hover:bg-opacity-30 duration-300 p-2 px-4 rounded">
              <Link to="/">خانه</Link>
            </li>
            <li className="mx-1 hover:bg-green-400 hover:bg-opacity-30 duration-300 p-2 px-4 rounded">
              <Link to="/products">فروشگاه</Link>
            </li>
            <li className="mx-1 hover:bg-green-400 hover:bg-opacity-30 duration-300 p-2 px-4 rounded">
              <a href="#">درباره ما</a>
            </li>
            <li className="mx-1 hover:bg-green-400 hover:bg-opacity-30 duration-300 p-2 px-4 rounded">
              <a href="#">تماس با ما</a>
            </li>
          </div>
          <div
            id="account"
            className="order-3 lg:order-4 sm:ml-0 ml-7 relative flex text-white text-lg "
          >
            <a
              href="#"
              className="lg:inline-block hidden ml-6 border-l-2 border-green-100 border-opacity-20 pl-4 hover:text-gray-300 duration-300"
            >
              <i className="fal fa-user ml-2 text-xl"></i>
              <Link to="/login">ورود / ثبت نام</Link>
            </a>
            <Link to="/cart" className="hover:text-gray-300 duration-300">
              <i className="fal fa-shopping-bag text-xl"></i>
              <span
                id="count"
                className="absolute top-0 transform -translate-x-3.5 bg-white rounded-full text-green-500 w-3.5 h-3.5 flex items-center justify-center text-sm"
              >
                {state.itemsCounter}
              </span>
              <span className="lg:inline-block hidden mr-4">
                ({state.total}) تومان
              </span>
            </Link>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={
            isShowMenu
              ? "flex flex-col justify-center items-center absolute top-16 left-0 bg-green-400 bg-opacity-80 w-full list-none p-4 text-white text-2xl"
              : "hidden "
          }
        >
          <li className="hover:bg-green-500 hover:bg-opacity-60 duration-300 w-32 rounded flex justify-center">
            <Link to="/">خانه</Link>
          </li>
          <li className="hover:bg-green-500 hover:bg-opacity-60 duration-300 w-32 rounded flex justify-center mt-3">
            <Link to="/products">فروشگاه</Link>
          </li>
          <li className="hover:bg-green-500 hover:bg-opacity-60 duration-300 w-32 rounded flex justify-center mt-3">
            <a href="#">درباره ما</a>
          </li>
          <li className="hover:bg-green-500 hover:bg-opacity-60 duration-300 w-32 rounded flex justify-center mt-3">
            <a href="#">تماس با ما</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
