import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header/Header";
const BasicLayout = () => {
  return (
    <div className="relative">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default BasicLayout;
