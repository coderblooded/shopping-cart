import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Products from "./shared/Products";
import { fetchProducts } from "../redux/products/productsAction";

const Category = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);
  const { category } = useParams();
  const productsFilteredForCategories = productsState.products.filter(
    (product) => product.category === category
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <Products
        loading={productsState.loading}
        products={productsFilteredForCategories}
      />
    </div>
  );
};

export default Category;
