import React, {useState} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';


const Post = ({ post, setCurrentId }) => {
  const [deletepost, setDeletepost] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likeCount);
  const [btnDisable, setBtnDisable] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

const onBtnClick = e => {
  dispatch(likePost(post._id));
  setLikeCount(post.likeCount + 1);
  setBtnDisable(true);
}

const onDeletePost = e => {
  dispatch(deletePost(post._id))
  setDeletepost(true);
}

  return (
    <>
    {
     !deletepost ? 
    <Card className={classes.card} style={{marginBottom:'50px'}}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
      <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag}`)}</Typography>
       
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={btnDisable} onClick={onBtnClick}>
          <ThumbUpAltIcon fontSize="small" /> Like {likeCount } 
        </Button>
        <Button size="small" color="primary" onClick={onDeletePost}><DeleteIcon fontSize="small" />Delete</Button>
      </CardActions>
    </Card>     
     : 
     null

    }
    </>
  );
};

export default Post;