import { useState } from "react";
import classes from "./featuredPosts.module.css";
const FeaturedPosts = () => {
  const dummyObj = [
    {
      id: 1,
      heading: "Discover the Secrets to Successful Content Creation",
      postedBy: "Sora Blogging Tips",
      date: "March 17, 2016",
      content:
        " It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had youhim humoured jointure ask expenses learning. Blush on in jokes sense do do. Brother hundred he assured reac…",
    },
    {
      id: 2,
      heading: "Discover the Secrets to Successful Content Creation (2)",
      postedBy: "Sora Blogging Tips (2)",
      date: "March 17, 2016 (2)",
      content:
        " It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had youhim humoured jointure ask expenses learning. Blush on in jokes sense do do. Brother hundred he assured reac… (2)",
    },
    {
      id: 3,
      heading: "Discover the Secrets to Successful Content Creation (3)",
      postedBy: "Sora Blogging Tips (3)",
      date: "March 17, 2016 (3)",
      content:
        " It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had youhim humoured jointure ask expenses learning. Blush on in jokes sense do do. Brother hundred he assured reac…(3)",
    },
  ];

  const [targetIndexPost, setTargetIndexPost] = useState(0);

  const handleChangePost = (e) => {
    const clickedElement = e.target;
    const parentElement = clickedElement.parentNode;
    const childrenArray = Array.from(parentElement.children);
    const index = childrenArray.indexOf(clickedElement);
    setTargetIndexPost(index);
  };
  return (
    <div className={classes.featuredContainer}>
      <div className={classes.featuredPostContainer} onClick={handleChangePost}>
        <p>Post 1</p>
        <p>Post 2</p>
        <p>Post 3</p>
      </div>
      <div className={classes.innerConatiner}>
        <h1 className={classes.mainHeading}>
          {/* Discover the Secrets to Successful Content Creation */}

          {dummyObj[targetIndexPost]?.heading}
        </h1>
        <p className={classes.postedBy}>
          {dummyObj[targetIndexPost]?.postedBy}{" "}
          {dummyObj[targetIndexPost]?.date}
        </p>
        <p>{dummyObj[targetIndexPost]?.content}</p>
      </div>
    </div>
  );
};

export default FeaturedPosts;
