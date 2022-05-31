import React, { useContext } from "react";

//Contexts
import { CartContext } from "../../contexts/CartContextProvider";

const Card = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  const { title, quantity, price, image } = productData;

  return (
    <>
      <td className="p-8 flex items-center">
        <img src={image} width="40" />
        <h2 className="mr-3.5">{title}</h2>
      </td>
      <td>
        <span>{price}</span>
      </td>
      <td>
        <button
          className="border-2 border-gray-300 mr-1 py-1 px-3 mt-2 rounded hover:bg-gray-300 border-opacity-80 duration-300"
          onClick={() => dispatch({ type: "INCREASE", payload: productData })}
        >
          +
        </button>
        {quantity > 1 ? (
          <button
            className="border-2 border-gray-300 mr-1 py-1 px-3 mt-2 rounded hover:bg-gray-300 border-opacity-80 duration-300"
            onClick={() => dispatch({ type: "DECREASE", payload: productData })}
          >
            -
          </button>
        ) : (
          <button
            className="border-2 border-gray-300 mr-1 py-1 px-3 mt-2 rounded hover:bg-gray-300 border-opacity-80 duration-300"
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: productData })
            }
          >
            <i className="fal fa-trash"></i>
          </button>
        )}
      </td>
      <td>
        <span>{price * quantity}</span>
      </td>
    </>
  );
};

export default Card;
