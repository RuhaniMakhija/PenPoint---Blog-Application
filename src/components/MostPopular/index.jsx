import { FACEBOOK_BLACK } from "@/constants/images";
import classes from "./mostPopular.module.css";
import Image from "next/image";

const MostPopular = () => {
  return (
    <>
      <div className={classes.outerMostContainer}>
        <div className={classes.upperContainer}>
          <p>{"MOST POPULAR"}</p>
        </div>
        <div className={classes.lowerContainer}>
          <div className={classes.singlePost}>
            <Image
              src={FACEBOOK_BLACK}
              alt="post-image"
              height={80}
              width={60}
            />

            <div className={classes.textContainer}>
              <p className={classes.headingText}>
                {"Sample Title One For TechJupyter"}
              </p>
              <p className={classes.dateText}>{"June 19, 2024"}</p>
            </div>
          </div>
          <div className={classes.singlePost}>
            <Image
              src={FACEBOOK_BLACK}
              alt="post-image"
              height={80}
              width={60}
            />

            <div className={classes.textContainer}>
              <p className={classes.headingText}>
                {"Sample Title One For TechJupyter"}
              </p>
              <p className={classes.dateText}>{"June 19, 2024"}</p>
            </div>
          </div>
          <div className={classes.singlePost}>
            <Image
              src={FACEBOOK_BLACK}
              alt="post-image"
              height={80}
              width={60}
            />

            <div className={classes.textContainer}>
              <p className={classes.headingText}>
                {"Sample Title One For TechJupyter"}
              </p>
              <p className={classes.dateText}>{"June 19, 2024"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostPopular;
