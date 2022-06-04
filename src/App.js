import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { Provider } from "react-redux";

//Components
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ShopCart from "./components/ShopCart";
import Register from "./components/Register";
import Login from "./components/Login";

//Redux
import store from "./redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/cart" component={ShopCart} />
          <Route path="/products" component={Products} />
          <Redirect from="/*" to="/products" />
        </Switch>
      </Provider>
    </div>
  );
};

export default App;
