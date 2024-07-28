import React, { useState, ReactNode, FC } from "react";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { SideMenu } from "../views/components/common";
// import RightSideBar from "../views/components/myClass/components/rightSideBar";
// import clsx from "clsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children, rightSideBar, style }) => {
  const [expand, setexpand] = useState(true);

  return (
    <>
      <main className="main-wrapper">
        <Header />
        <div className="page-wrapper" style={style}>
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
