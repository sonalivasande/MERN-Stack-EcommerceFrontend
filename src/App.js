import "./App.css";
import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./component/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/MenProduct/MenProducts";
import Register from "./component/Signup";
import MenProductList from "./pages/MenProduct/MenProductList";
import WomenProductList from "./pages/WomenProduct/WomenProductList";
import ElectronicsProductList from "./pages/ElectronicsProduct/ElectronicsProductList";
import Cart from "./pages/Cart/Cart"

function App() {
  return (
    // <div className="App">
    //  <Home/>
    // </div>
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact path="/shop" element={<Products />}></Route> */}
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/menshop" element={<MenProductList />}></Route>
          <Route exact path="/womenshop" element={<WomenProductList />}></Route>
          <Route exact path="/electronics" element={<ElectronicsProductList />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          {/* <Route exact path="/productdetails/:id" element={<ProductDetails />}></Route> */}
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
