import axios from "axios";

const BASE_URI = "https://fakestoreapi.com";
const getProducts = async () => {
  const products = await axios.get(`${BASE_URI}/products`);
  return products.data;
};

export { getProducts };
