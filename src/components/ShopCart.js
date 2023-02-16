import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./ShopCart.module.css";

//Components
import Card from "./shared/Card";

const ShopCart = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div
      className={`${styles.cartContainer} container mt-12 flex lg:flex-row flex-col lg:justify-around mx-auto`}
    >
      {state.itemsCounter > 0 && (
        <div className="border-2 border-green-200 border-opacity-85 py-8 px-5 lg:w-96 lg:mx-0 lg:mt-0 w-11/12 mt-12 mx-auto rounded h-96">
          <h2 className="text-2xl">Total</h2>
          <div className="mt-4">
            <div className="flex justify-between border-b-2 border-gray-200 pb-2">
              <span>Product Counts</span>
              <span className="text-green-500">{state.itemsCounter}</span>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 pb-2 mt-4">
              <span>Total</span>
              <span className="text-green-500">${state.total}</span>
            </div>

            <button
              onClick={() => dispatch({ type: "CHECKOUT" })}
              className="mt-12 bg-green-400 hover:bg-green-500 duration-300 text-white p-2 text-white block w-full mx-auto rounded"
            >
              Pay
            </button>
            <button
              onClick={() => dispatch({ type: "CLEAR" })}
              className="mt-3 bg-red-400 hover:bg-red-500 duration-300 text-white p-2 text-white block w-full mx-auto rounded"
            >
              Delete all products
            </button>
          </div>
        </div>
      )}

      {state.itemsCounter === 0 && !state.checkout && (
        <div className="border-2 border-green-200 border-opacity-85 py-8 px-5 lg:w-96 lg:mx-0 lg:mt-0 w-10/12 mt-12 mx-auto rounded">
          <h3 className="text-2xl">Do you want to buy something?</h3>
          <Link to="/products" className="text-green-500 underline mt-1 block">
            Get back to products
          </Link>
        </div>
      )}

      {state.checkout && (
        <div className="border-2 border-green-200 border-opacity-85 py-8 px-5 lg:w-96 lg:mx-0 lg:mt-0 w-10/12 mt-12 mx-auto rounded">
          <h3 className="text-2xl">Payment paid successfully!</h3>
          <Link to="/products" className="text-green-500 underline mt-1 block">
            Buy more
          </Link>
        </div>
      )}

      <table className="table-auto lg:w-6/12 w-11/12 lg:ml-5 lg:mt-0 lg:mx-0 mx-auto mt-12">
        <thead className="border-b-2 border-gray-200 border-opacity-85">
          <tr>
            <td className="p-4">Product</td>
            <td className="p-4">Price</td>
            <td className="p-4">Count</td>
            <td className="p-4">Total</td>
          </tr>
        </thead>
        <tbody>
          {state.selectedItems.map((item) => (
            <tr>
              <Card key={item.id} productData={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShopCart;
