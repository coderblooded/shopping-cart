import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Redux
import { fetchProducts } from "../redux/products/productsAction";

import Products from "./shared/Products";

const AllProducts = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedProducts = productsState.products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div id="search" className="w-full bg-green-300 py-3 flex">
        <input
          type="text"
          name="search"
          className="bg-gray-100 border-2 border-gray-50 pr-1.5 py-2 rounded sm:w-96 w-64 mx-auto pl-3"
          placeholder="Search..."
          و
          value={search}
          onChange={searchHandler}
        />
      </div>
      <Products loading={productsState.loading} products={searchedProducts} />
    </>
  );
};

export default AllProducts;
