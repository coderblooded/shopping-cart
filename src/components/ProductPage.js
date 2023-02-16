import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import { isInCart, quantityCount } from "../helper/functions";

const ProductPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const product = location.state;
  const state = useSelector((state) => state.cartState);

  return (
    <div
      className={`${styles.productPageContainer} container p-3 pb-12 md:mt-28 mt-10 md:ml-16 mx-auto h-screen flex md:flex-row flex-col`}
    >
      <div className="border-2 border-gray-300 border-opacity-20 rounded-xl p-4 h-96 flex items-center">
        <img src={product.image} className="rounded-xl" />
      </div>
      <div
        id="product-page-title"
        className="md:ml-16 md:text-left text-center mt-8"
      >
        <div className="border-b-2 border-gray-200 pb-4">
          <h3 className="text-3xl helveticaMedium">{product.title}</h3>
          {product.count && (
            <div className="bg-green-100 w-28 flex justify-center items-center rounded-xl p-1.5 mt-6 md:mx-0 mx-auto">
              <i class="fal fa-box text-green-500 mr-2 text-sm"></i>
              <span className="text-green-500 helveticaMedium text-sm">
                Is Available
              </span>
            </div>
          )}
          <p className="md:w-2/3 w-11/12 my-5 text-gray-400 leading-relaxed md:mx-0 mx-auto">
            {product.description}
          </p>
          <span className="text-green-500 text-3xl helveticaBold mt-3 block">
            ${product.price}
          </span>
        </div>
        <div
          id="add-to-cart"
          className="mt-4 flex md:justify-start justify-center"
        >
          {isInCart(state, product.id) ? (
            <div
              className="px-8 rounded-xl flex items-center justify-center mr-4"
              style={{ boxShadow: "rgb(0 0 0 / 14%) 0px 1px 4px" }}
            >
              <button
                onClick={() => {
                  dispatch({ type: "DECREASE", payload: product });
                }}
              >
                <i class="far fa-minus"></i>
              </button>
              <span className="mx-5">{quantityCount(state, product.id)}</span>
              <button
                onClick={() => {
                  dispatch({ type: "INCREASE", payload: product });
                }}
              >
                <i class="far fa-plus"></i>
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => {
                  dispatch({ type: "ADD_ITEM", payload: product });
                }}
                className="helveticaBold bg-green-500 hover:bg-green-600 transition duration-200 text-white rounded-xl py-2.5 px-8 pr-14 flex justify-center items-center"
                style={{ boxShadow: "rgb(0 0 0 / 15%) 2.4px 2.4px 3.2px" }}
              >
                <i className="fal fa-shopping-cart mr-3" />
                Add to cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
