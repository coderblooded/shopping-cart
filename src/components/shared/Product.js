import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { splitTitle, quantityCount, isInCart } from "../../helper/functions";

const Product = ({ productData }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state.cartState);
  return (
    <div
      className="p-4 bg-white rounded-2xl relative border-2 border-opacity-50"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;",
      }}
    >
      <div className="rounded flex justify-center items-center py-6 border-b-2 mb-5">
        <img src={productData.image} className="object-fit w-64 h-64" />
      </div>
      <div className="ml-2">
        <h2 className="text-2xl text-gray-900 helveticaBold">
          {splitTitle(productData.title)}
        </h2>
        <span className="mt-1 block text-gray-400">
          {productData.category} | rate: {productData.rating.rate}
        </span>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-700 helveticaMedium text-3xl  block">
            ${productData.price}
          </span>
          <button
            onClick={() => {
              history.push(`/products/${productData.id}`, {
                title: productData.title,
                id: productData.id,
                price: productData.price,
                description: productData.description,
                image: productData.image,
                count: productData.rating.count,
              });
            }}
            className="hover:bg-blue-400 hover:text-white duration-300 border-2 border-blue-400 text-blue-400 py-1.5 px-4 rounded-xl"
          >
            View Details
          </button>
        </div>
        <div>
          <div className="flex justify-center mt-14 w-full ">
            {quantityCount(state, productData.id) > 1 && (
              <button
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: productData })
                }
                className="transition border-2 border-gray-300 py-1 rounded hover:bg-gray-300 border-opacity-80 duration-300 w-full"
              >
                -
              </button>
            )}

            {quantityCount(state, productData.id) === 1 && (
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: productData })
                }
                className="transition border-2 border-gray-300 py-1 rounded hover:bg-gray-300 border-opacity-80 duration-300 w-full"
              >
                <i className="fal fa-trash text-sm"></i>
              </button>
            )}

            {quantityCount(state, productData.id) >= 1 && (
              <span className="border-2 border-gray-100 p-2 bg-gray-50">
                {quantityCount(state, productData.id)}
              </span>
            )}
            {isInCart(state, productData.id) ? (
              <button
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: productData })
                }
                className="transition border-2 border-gray-300 py-1 hover:bg-gray-300 border-opacity-80 duration-300 w-full"
              >
                +
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({ type: "ADD_ITEM", payload: productData })
                }
                className="transition absolute bottom-0 left-0 w-full bg-green-400 hover:bg-green-500 duration-300 text-white rounded p-2 mt-3 block mx-auto"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
