import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from '../Posts/Post/Post'
import useStyles from '../Posts/styles'

const AllPosts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container}  style={{width: '80%', display:'flex', justifyContent:'center',}}  container alignItems="stretch" spacing={3}>
      {posts[0].map((post) => (
        <Grid key={post._id} item xs={8} sm={6} md={6} >
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default AllPosts;