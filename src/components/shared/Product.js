import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { splitTitle, quantityCount, isInCart } from "../../helper/functions";

const Product = ({ productData }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);
  return (
    <div className="p-4">
      <div className="shadow-lg rounded flex justify-center items-center py-6">
        <img src={productData.image} className="object-fit w-40 h-56" />
      </div>
      <span className="mt-5 block text-gray-400">{productData.category}</span>
      <h2 className="text-xl">{splitTitle(productData.title)}</h2>
      <span className="text-green-400 text-lg">{productData.price}</span>
      <div>
        <div>
          {isInCart(state, productData.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
              className="border-2 border-gray-300 py-1 px-3 mt-2 rounded hover:bg-gray-300 border-opacity-80 duration-300"
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
              className="bg-green-400 hover:bg-green-500 duration-300 text-white rounded p-2 mt-3"
            >
              اضافه به سبد خرید
            </button>
          )}

          {quantityCount(state, productData.id) > 1 && (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
              className="border-2 border-gray-300 mr-1 py-1 px-3 mt-2 rounded hover:bg-gray-300 border-opacity-80 duration-300"
            >
              -
            </button>
          )}

          {quantityCount(state, productData.id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
              className="border-2 border-gray-300 py-1 px-2.5 mt-2 mr-1 rounded hover:bg-gray-300 border-opacity-80 duration-300"
            >
              <i className="fal fa-trash text-sm"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
