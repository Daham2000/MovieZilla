import React, { useEffect,useState } from "react";
import {Grow,Container} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import {getPosts} from '../../action/users';
makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  actionDiv: {
    textAlign: 'center',
    marginBottom: 2
  },
}));
export default function Home() {
  const classes=makeStyles();
  const dispatch = useDispatch();
  const [currentId] = useState(null);
  
  useEffect(() => {
      dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
    <Grow in>
            <Container className={classes.mainContainer}>
                  <p className={classes.actionDiv}>Latest Posts</p>
            </Container>
        </Grow>
    </div>
  );
}
