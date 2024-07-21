import React, { useState, ReactNode, FC } from "react";
import { Header } from "../views/components/common";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SideMenu } from "../views/components/common";
import RightSideBar from "../views/components/myClass/components/rightSideBar";
import clsx from "clsx";

const Layout = ({ children, rightSideBar, style }) => {
  const [expand, setexpand] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width:1224px)");

  return (
    <>
      <main className="main-wrapper">
        <div className="page-wrapper" style={style}>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout1;
