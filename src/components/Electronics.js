import React, { useEffect } from "react";
import Title from "./shared/Title";
import Card from "./shared/Card";
import { useDispatch, useSelector } from "react-redux";
import Product from "./shared/Product";
import Loader from "./Loader";
import { fetchProducts } from "../redux/products/productsAction";
import Products from "./shared/Products";

const Electronics = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);
  const electronics = productsState.products.filter(
    (product) => product.category === "electronics"
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <Title
        title="Electronics"
        paragraph="Not thoughts all exercise blessing, indulgence way everything joy alteration boisterous the attachment."
      />
      <Products loading={productsState.loading} products={electronics} />
    </div>
  );
};

export default Electronics;
