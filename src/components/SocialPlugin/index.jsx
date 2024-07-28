import {
  FACEBOOK_BLACK,
  INSTAGRAM_BLACK,
  LINKEDIN_BLACK,
  YOUTUBE_BLACK,
  YOUTUBE_LOGO,
} from "@/constants/images";
import classes from "./socialPlugin.module.css";
import Image from "next/image";

const SocialPlugin = () => {
  return (
    <>
      <div className={classes.outerMostContainer}>
        <div className={classes.upperContainer}>
          <p>{"SOCIAL MEDIA"}</p>
        </div>
        <div className={classes.lowerContainer}>
          <div className={classes.item}>
            <Image
              src={YOUTUBE_BLACK}
              height={50}
              width={50}
              alt={"youtube_logo"}
              className={classes.socialMediaLogo}
            />
          </div>
          <div className={classes.item}>
            <Image
              src={INSTAGRAM_BLACK}
              height={50}
              width={50}
              alt={"youtube_logo"}
              className={classes.socialMediaLogo}
            />
          </div>
          <div className={classes.item}>
            <Image
              src={LINKEDIN_BLACK}
              height={50}
              width={50}
              alt={"youtube_logo"}
              className={classes.socialMediaLogo}
            />
          </div>
          <div className={classes.item}>
            <Image
              src={FACEBOOK_BLACK}
              height={50}
              width={50}
              alt={"youtube_logo"}
              className={classes.socialMediaLogo}
            />
          </div>
          <div className={classes.item}>
            <Image
              src={YOUTUBE_BLACK}
              height={50}
              width={50}
              alt={"youtube_logo"}
              className={classes.socialMediaLogo}
            />
          </div>

          <div className={classes.item}>
            <Image
              src={YOUTUBE_LOGO}
              height={50}
              width={50}
              alt={"youtube_logo"}
              className={classes.socialMediaLogo}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialPlugin;
