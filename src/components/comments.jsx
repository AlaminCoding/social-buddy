import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import commenters from "../commenters";
import SingleComment from "./singlecomment";
import { Typography } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
const Comments = (props) => {
  const [commentAvatar, setCommentAvatar] = useState(commenters);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${props.post.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        data.map((data, index) => (data.img = commentAvatar[index].img));
        setComments(data);
      });
  }, [props.post.id, commentAvatar]);
  console.log(comments);
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6}>
        <Paper className={props.classes.paper}>
          <Typography variant="h5">Comments</Typography>
          {comments.map((data) => (
            <SingleComment avatar={data} />
          ))}
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default Comments;
