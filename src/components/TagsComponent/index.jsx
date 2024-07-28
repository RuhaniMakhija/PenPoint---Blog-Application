import classes from "./tags.module.css";

const Tags = () => {
  return (
    <>
      <div className={classes.outerMostContainer}>
        <div className={classes.upperContainer}>
          <p>{"Tags"}</p>
        </div>
        <div className={classes.lowerContainer}>
          <div className={classes.tagContainer}>
            {[1, 2, 3, 4].map((item) => (
              <div className={classes.singleTag}>
                <p>{"Tag Name"}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
