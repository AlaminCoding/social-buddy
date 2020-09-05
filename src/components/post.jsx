import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const Post = (props) => {
  const { classes, post, format, showButton } = props;

  const formatBody = () => {
    let bodyText = post.body;
    if (format === true) {
      return bodyText.substr(0, 150) + " ...";
    } else {
      return bodyText;
    }
  };

  return (
    <React.Fragment>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6">{post.title}</Typography>
          <hr />
          <Typography variant="body1">{formatBody()}</Typography>

          {showButton && (
            <React.Fragment>
              <hr />
              <Link to={"/post/" + post.id} style={{ textDecoration: "none" }}>
                <Button variant="contained" color="secondary">
                  Read More
                </Button>
              </Link>
            </React.Fragment>
          )}
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default Post;
