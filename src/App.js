import React, { useEffect, useState } from "react";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";

//Components
import Navbar from "./components/Navbar";
import AllProducts from "./components/AllProducts";
import ShopCart from "./components/ShopCart";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductPage from "./components/ProductPage";

//Redux
import store from "./redux/store";
import HomePage from "./components/HomePage";
import Category from "./components/Category";

const App = () => {
  const [color, changeColor] = useState("bg-gray-100");
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname == `/products/\?(.*)` ||
      location.pathname == "/products"
    ) {
      console.log("changed");
      changeColor("bg-white");
    }
  }, [location]);

  return (
    <div className={`${color}`}>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route path="/products/:id" component={ProductPage} />
          <Route path="/products" component={AllProducts} />
          <Route path="/category/:category" component={Category} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/cart" component={ShopCart} />
          <Route path="/" component={HomePage} />
          <Redirect from="/*" to="/products" />
        </Switch>
      </Provider>
    </div>
  );
};

export default App;
