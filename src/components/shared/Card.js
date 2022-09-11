import React from "react";
import { splitTitle } from "../../helper/functions";
import { useDispatch } from "react-redux";

const Card = ({ productData }) => {
  const dispatch = useDispatch();
  const { title, quantity, price, image } = productData;

  return (
    <>
      <td className="mt-8 sm:p-8 p-2 flex items-center">
        <img src={image} width="40" />
        <h2 className="mr-3.5">{splitTitle(title)}</h2>
      </td>
      <td>
        <span>{price}</span>
      </td>
      <td>
        <button
          className="border-2 border-gray-300 sm:py-1 sm:px-3 px-2 mt-2 rounded hover:bg-gray-300 border-opacity-80 duration-300"
          onClick={() => dispatch({ type: "INCREASE", payload: productData })}
        >
          +
        </button>
        {quantity > 1 ? (
          <button
            className="border-2 border-gray-300 mr-1 sm:py-1 sm:px-3 px-2 mt-2 rounded hover:bg-gray-300 border-opacity-80 duration-300"
            onClick={() => dispatch({ type: "DECREASE", payload: productData })}
          >
            -
          </button>
        ) : (
          <button
            className="border-2 border-gray-300 mr-1 sm:py-1 sm:px-3 px-1.5 mt-2 rounded hover:bg-gray-300 border-opacity-80 duration-300"
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: productData })
            }
          >
            <i className="fal fa-trash text-sm"></i>
          </button>
        )}
      </td>
      <td className="sm:p-0 p-4">
        <span>{(price * quantity).toFixed(2)}</span>
      </td>
    </>
  );
};

export default Card;
