import classes from "./post.module.css";
const Post = () => {
  return (
    <div className={classes.postContainer}>
      <div></div>
      <div className={classes.postDetails}>
        <div className={classes.learnBtnContainer}>
          <button className={classes.learnBtn}>Learn</button>
        </div>
        <h2 className={classes.postHeading}>
          What It Feels Like to No Longer Worry About Money
        </h2>
        <p className={classes.postedBy}>
          <span>Sora Blogging Tips - </span>
          <span>March 17, 2016</span>
        </p>
        <p className={classes.postContent}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, …
        </p>
        <div className={classes.readMoreContainer}>
          <button className={classes.readMoreBtn}>READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
