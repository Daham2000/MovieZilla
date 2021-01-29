import React,{useState} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import moment from "moment";
import {useDispatch} from 'react-redux';

import useStyles from "./styles.js";
import { likePost,unlikePost } from "../../action/users";
import UserStore from '../../stores/UserStore';

const Post = ({post, setcurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [liked, setLike] = useState(true); 

    const handleLike  = (e) => {
        if(liked===true){
            dispatch(likePost(post._id,UserStore.email));
        }else{
            dispatch(unlikePost(post._id));
        }
        setLike(!liked);
    }
    
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography varient="h6">{post.creator}</Typography>
                <Typography varient="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.details}>
                <Typography varient="body2" color="textSecondary">{post.tags.map((tag) => `# ${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} varient="h2" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography varient="bady2" color="textSecondary" component="p">{post.description}</Typography>
                <br></br>
                <Typography varient="h6" color="textSecondary" component="p">Box Office:{post.boxOffice}</Typography>
                <a href={post.trailerLink} target="blank" className={classes.link}>
                    <Typography varient="h6" color="textSecondary" component="p">Trailer Link: <br></br>{post.trailerLink}</Typography>
                </a>
                <a href={post.downloadLink} target="blank" className={classes.link}>
                    <Typography varient="h6" color="textSecondary" component="p">Download Link: <br></br>{post.downloadLink}</Typography>
                </a>     
            </CardContent>
            <CardActions className={classes.cardActions}>
            {
                liked ?
                <Button size="small" color="primary" onClick={handleLike} liked={liked}>
                    <ThumbUpAltIcon fontSize="small"/> 
                    &nbsp;  Like &nbsp;
                    {post.likeCount}
                </Button>
                :
                <Button size="small" color="red" onClick={handleLike} liked={liked}>
                    <ThumbUpAltIcon fontSize="small"/> 
                    &nbsp;  Liked &nbsp;
                    {post.likeCount}
                </Button>
            }
                

            </CardActions>
        </Card>
    );
}

export default Post;