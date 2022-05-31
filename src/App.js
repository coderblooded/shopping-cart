import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

//Contexts
import ProductContextProvider from "./contexts/ProductContextProvider";
import CardContextProvider from "./contexts/CartContextProvider";

//Components
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ShopCart from "./components/ShopCart";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <CardContextProvider>
        <ProductContextProvider>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/cart" component={ShopCart} />
            <Route path="/products" component={Products} />
            <Redirect from="/*" to="/products" />
          </Switch>
        </ProductContextProvider>
      </CardContextProvider>
    </div>
  );
};

export default App;
