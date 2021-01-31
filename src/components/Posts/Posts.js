import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import Post from "../Post/Post";
import Loading from "../Loading/Loading";
import useStyles from "./styles.js";

const Posts = ({ setcurrentId }) => {
  const posts = useSelector((state) => state.post);
  const classes = useStyles();

  console.log(posts);

  return !posts.length ? (
    <Loading />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.reverse().map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setcurrentId={setcurrentId}></Post>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
