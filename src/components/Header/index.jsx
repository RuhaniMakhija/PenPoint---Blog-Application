import React from "react";
import classes from "./header.module.css";
import Image from "next/image";
import {
  FACEBOOK_LOGO,
  INSTAGRAM_LOGO,
  YOUTUBE_LOGO,
} from "@/constants/images";

const Header = () => {
  return (
    <div className={classes.outerMostContainer}>
      <div className={classes.leftSection}>
        <nav>
          <ul className={classes.list}>
            <li>{"Home"}</li>
            <li>{"About"}</li>
            <li>{"Contact"}</li>
          </ul>
        </nav>
      </div>
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/tech-jupyter.appspot.com/o/techjupyter_logo_1.png?alt=media&token=816f07b5-49f6-485c-81d6-fbe894d5d017"
        }
        alt={"techjupyter-logo"}
        height={60}
        width={200}
        className={classes.logo}
      />
      <div className={classes.rightSection}>
        <Image
          src={INSTAGRAM_LOGO}
          height={30}
          width={30}
          alt={"instagram_logo"}
          className={classes.socialMediaLogo}
        />
        <Image
          src={FACEBOOK_LOGO}
          height={30}
          width={30}
          alt={"facebook_logo"}
          className={classes.socialMediaLogo}
        />
        <Image
          src={YOUTUBE_LOGO}
          height={30}
          width={30}
          alt={"youtube_logo"}
          className={classes.socialMediaLogo}
        />
      </div>
    </div>
  );
};

export default Header;
