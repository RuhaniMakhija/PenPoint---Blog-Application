import classes from "./featuredPosts.module.css";
const FeaturedPosts = () => {
  return (
    <div className={classes.featuredContainer}>
      <div className={classes.featuredPostContainer}>
        <p>Post 1</p>
        <p>Post 2</p>
        <p>Post 3</p>
      </div>
      <div className={classes.innerConatiner}>
        <h1 className={classes.mainHeading}>
          Discover the Secrets to Successful Content Creation
        </h1>
        <p className={classes.postedBy}>Sora Blogging TipsMarch 17, 2016</p>
        <p>
          It bachelor cheerful of mistaken. Tore has sons put upon wife use bred
          seen. Its dissimilar invitation ten has discretion unreserved. Had you
          him humoured jointure ask expenses learning. Blush on in jokes sense
          do do. Brother hundred he assured reac…
        </p>
      </div>
    </div>
  );
};

export default FeaturedPosts;
