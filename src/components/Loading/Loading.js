import React from 'react'
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
makeStyles((theme) => ({
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    }
  }));
export default function Loading() {
    return (
        <div>
            <div style={{width: "100%", height: "100%"}}></div>
            <CircularProgress />
        </div>
    )
}
