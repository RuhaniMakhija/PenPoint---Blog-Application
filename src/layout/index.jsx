import React, { useState, ReactNode, FC } from "react";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { SideMenu } from "../views/components/common";
// import RightSideBar from "../views/components/myClass/components/rightSideBar";
// import clsx from "clsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedPosts from "@/components/FeaturedPosts";
import SocialPlugin from "@/components/SocialPlugin";
import MostPopular from "@/components/MostPopular";
import RandomPosts from "@/components/RandomPosts";
import SubscribeUs from "@/components/SubscribeUs";
import Tags from "@/components/TagsComponent";

const Layout = ({ children, rightSideBar, style }) => {
  const [expand, setexpand] = useState(true);

  return (
    <>
      <main className="main-wrapper">
        <Header />
        <div
          className="page-wrapper"
          style={{
            display: "flex",
            gap: "5%",
            margin: "5vh 0 5vh 5vw",
          }}
        >
          <div style={{ width: "60vw" }}>{children}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "50px",
              maxWidth: "25vw",
            }}
          >
            <SocialPlugin />
            <MostPopular />
            <RandomPosts />
            <SubscribeUs />
            <Tags />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
