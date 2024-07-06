import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
const BasicLayout = () => {
  return (
    <div className="relative animsition ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BasicLayout;
