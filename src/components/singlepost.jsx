import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Post from "./post";
import Comments from "./comments";
const SinglePost = () => {
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
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        return setPost(data);
      });
  }, [id]);
  return (
    <React.Fragment>
      <section className="single-post-section">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Post
              classes={classes}
              post={post}
              format={false}
              showButton={false}
            />
            <Comments classes={classes} post={post} />
          </Grid>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SinglePost;
