import React, {useState} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';

import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyles from '../Posts/Post/styles';


const Feature = () => {
    const dispatch = useDispatch();
  const classes = useStyles();


  return (

    <Card className={classes.card} style={{marginBottom:'50px', width: '60%', height: '25%'}}>
      <CardMedia className={classes.media} image="https://www.bobbooks.co.uk/media/cache/photo_book_page_700/upload/e5/6b/e56b573d0cd16d7b03083d8fbc582ef219c274a7.jpeg" title="" />
      <div className={classes.overlay}>
        <Typography style={{fontSize:'12px'}} variant="h6">Briana</Typography>
      </div> 
      <div className={classes.details}>
        <Typography  style={{fontSize:'9px', marginTop:'-68px'}} variant="body2" color="textSecondary" component="h2">#camera, #photos, #beauty</Typography>
      </div>
      <Typography className={classes.title} style={{marginTop:'-108px', fontSize:'15px'}} className={classes.title} gutterBottom variant="h5" component="h2">Photography in a Day</Typography>
      <CardContent>
        <Typography style={{marginTop:'-58px', fontSize:'12px'}} variant="body2" color="textSecondary" component="p">Photography has inspired <br></br> many to feel beautiful and changed their lives</Typography>
      </CardContent>
    </Card>     
     
  );
};

export default Feature;