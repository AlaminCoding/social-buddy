import React from "react";
import { Typography } from "@material-ui/core";
const SingleComment = (props) => {
  const { avatar } = props;
  return (
    <React.Fragment>
      <div className="single-comment">
        <img src={avatar.img} alt="commenters photos" />
        <div>
          <Typography variant="subtitle2">Name: {avatar.name}</Typography>
          <Typography variant="subtitle2">Email: {avatar.email}</Typography>
          <Typography variant="body1">{avatar.body}</Typography>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleComment;
