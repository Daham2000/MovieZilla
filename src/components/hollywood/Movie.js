import React,{useEffect,useState} from 'react';
import {getTvSeries} from '../../action/users';
import { useDispatch } from "react-redux";
import {Grow,Container,makeStyles} from "@material-ui/core";

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
  
export default function Hollywood() {

    const classes = makeStyles();
    const dispatch = useDispatch();
    const [currentId] = useState(null);
    
    useEffect(() => {
        dispatch(getTvSeries());
    }, [currentId, dispatch]);

    return (
    <div>
        <Grow in>
            <Container className={classes.mainContainer}>
                  <p className={classes.actionDiv}>All Hollywood News and Movies</p>
            </Container>
        </Grow>
    </div>
    )

}
