import { FACEBOOK_BLACK } from "@/constants/images";
import classes from "./subscribeUs.module.css";
import Image from "next/image";

const SubscribeUs = () => {
  return (
    <>
      <div className={classes.outerMostContainer}>
        <div className={classes.upperContainer}>
          <p>{"SUBSCRIBE US"}</p>
        </div>
        <div className={classes.lowerContainer}>
          <iframe
            width="auto"
            height="auto"
            src="https://www.youtube.com/embed/S_zNSLIQRbE?autoplay=1&mute=1"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default SubscribeUs;
