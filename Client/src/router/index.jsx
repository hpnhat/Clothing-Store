import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import Home from "../pages/Home/Home";
import DetailProduct from "../pages/Product/DetailProduct/DetailProduct";
import ListProduct from "../pages/Product/ListProduct";
import Cart from "../pages/Cart/Cart";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BasicLayout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<ListProduct />} />
            <Route path="product/:slug/" element={<DetailProduct />} />
            <Route path="shopping-cart" element={<Cart />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default RouterComponent;
