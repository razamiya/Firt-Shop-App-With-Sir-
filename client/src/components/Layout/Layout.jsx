import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import NavMain from "../NavMain/NavMain";

const Layout = () => {
  return (
    <>
      <Header />
      <NavMain />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
