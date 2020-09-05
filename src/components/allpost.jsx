import React, { useState } from "react";
import { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Post from "./post";
const AllPost = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: "left",
        color: "black",
      },
    })
  );
  const classes = useStyles();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []);
  return (
    <React.Fragment>
      <section className="all-post-section">
        <div className={classes.root}>
          <Grid container spacing={3}>
            {post.map((data) => (
              <Post
                key={data.id}
                classes={classes}
                post={data}
                format={true}
                showButton={true}
                showComment={false}
              />
            ))}
          </Grid>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AllPost;
