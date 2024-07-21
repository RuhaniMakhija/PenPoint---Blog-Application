import React from "react";
import classes from "./header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className={classes.leftSection}>
        <nav>
          <ul>
            <li>{"Home"}</li>
            <li>{"About"}</li>
            <li>{"Contact"}</li>
          </ul>
        </nav>
      </div>
      <Image />
      <div className={classes.rightSection}>
        <Image />
        <Image />
        <Image />
      </div>
    </div>
  );
};

export default Header;
