import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Body } from "../components/body/Body";
import { Contact } from "../components/contact/Contact";
import Navbar from "../components/navbar/Navbar";
import { CardDetail } from "../ui/card-detail/CardDetail";
import { Footer } from "../components/footer/Footer";
import ShowProducts from "../components/show-products/ShowProducts";
import { Provider } from "react-redux";
import { store } from "../store/store";

export const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Body} />
          <Route exact path="/contacto" component={Contact} />
          <Route exact path="/card-detail/:id" component={CardDetail} />
          <Route exact path="/carrito" component={ShowProducts} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </Provider>
  );
};
