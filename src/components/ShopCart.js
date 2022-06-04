import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Components
import Card from "./shared/Card";

const ShopCart = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div className="mt-12 flex lg:flex-row items-start flex-col justify-center w-100">
      <table className="table-auto lg:w-6/12 w-11/12 lg:ml-5 lg:mx-0 mx-auto">
        <thead className="border-b-2 border-gray-200 border-opacity-85">
          <tr>
            <td className="p-4">محصول</td>
            <td className="p-4">قیمت</td>
            <td className="p-4">تعداد</td>
            <td className="p-4">جمع جزء</td>
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

      {state.itemsCounter > 0 && (
        <div className="border-2 border-green-200 border-opacity-85 py-8 px-5 lg:w-96 lg:mx-0 lg:mt-0 w-11/12 mt-12 mx-auto rounded">
          <h2 className="text-2xl">جمع کل سبد خرید</h2>
          <div className="mt-4">
            <div className="flex justify-between border-b-2 border-gray-200 pb-2">
              <span>تعداد کالاها</span>
              <span className="text-green-500">{state.itemsCounter}</span>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 pb-2 mt-4">
              <span>مجموع</span>
              <span className="text-green-500">{state.total} تومان</span>
            </div>

            <button
              onClick={() => dispatch({ type: "CHECKOUT" })}
              className="mt-12 bg-green-400 hover:bg-green-500 duration-300 text-white p-2 text-white block w-full mx-auto rounded"
            >
              تسویه حساب
            </button>
            <button
              onClick={() => dispatch({ type: "CLEAR" })}
              className="mt-3 bg-red-400 hover:bg-red-500 duration-300 text-white p-2 text-white block w-full mx-auto rounded"
            >
              حذف همه ی کالاها
            </button>
          </div>
        </div>
      )}

      {state.itemsCounter === 0 && !state.checkout && (
        <div className="border-2 border-green-200 border-opacity-85 py-8 px-5 lg:w-96 lg:mx-0 lg:mt-0 w-10/12 mt-12 mx-auto rounded">
          <h3 className="text-2xl">میخوای چیزی بخری؟</h3>
          <Link to="/products" className="text-green-500 underline mt-1 block">
            برگرد به محصولات
          </Link>
        </div>
      )}

      {state.checkout && (
        <div className="border-2 border-green-200 border-opacity-85 py-8 px-5 lg:w-96 lg:mx-0 lg:mt-0 w-10/12 mt-12 mx-auto rounded">
          <h3 className="text-2xl">تسویه حساب با موفقیت انجام شد!</h3>
          <Link to="/products" className="text-green-500 underline mt-1 block">
            بیشتر بخر
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
