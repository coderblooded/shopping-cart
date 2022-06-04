import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Redux
import { fetchProducts } from "../redux/products/productsAction";

//Shared
import Product from "./shared/Product";

import Loader from "./Loader";

const Products = () => {
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
          className="bg-gray-100 border-2 border-gray-50 pr-1.5 py-2 rounded sm:w-96 w-64 sm:mr-6 mx-auto"
          placeholder="جستجو..."
          value={search}
          onChange={searchHandler}
        />
      </div>
      <div
        id="products"
        class="container grid lg:grid-cols-4 md:grid-cols-3 gap-12 mt-12 mx-auto"
      >
        {productsState.loading ? (
          <Loader />
        ) : (
          searchedProducts.map((product) => (
            <Product key={product.id} productData={product} />
          ))
        )}
      </div>
    </>
  );
};

export default Products;
