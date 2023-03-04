import React from "react";
import Loader from "../Loader";
import Product from "./Product";

const Products = ({ loading, products }) => {
  return (
    <div
      id="products"
      className="container grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-12 mt-12 sm:mx-auto p-4"
    >
      {loading ? (
        <Loader />
      ) : (
        products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Products;
