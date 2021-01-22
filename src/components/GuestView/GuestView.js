import { Typography, makeStyles,Grid, Button } from "@material-ui/core";
import logo from '../../images/logo_transparent.png';
import {
    Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    guestViewMainTopic: {
        textAlign: "center",        
        padding: theme.spacing(2),
    },
    subtitle:{
        fontSize: 18,
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    imgs: {
        width: 400
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        flexGrow: 1,
    },
    secondtopic:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    section3:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: 15
    },
    thirdtopic:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 20,
        marginBottom: 35
    },
    topic3:{
        textAlign: "center"
    },
    btnSection:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyItems: "center"
    },
    footer: {
        marginTop: 25
    }
    
  }));

const GuestView = () => {
    const classes= useStyles();
    return (

    <div className={classes.root} container>

        <div className={classes.secondtopic}>
                <Typography className={classes.guestViewMainTopic} variant="h3">
                    Welcome to Online Movie Magazine  
                <Typography variant="subtitle1" className={classes.subtitle}>
                    Find ratings and reviews for the newest movie and TV shows.
                </Typography>         
                </Typography>
                <img className={classes.imgs} src={logo} alt="Logo" />
        </div>

        <div className={classes.section3}>
            <Grid item xs={12}>
            <Typography variant="h5">
                What can you do with this site
            </Typography> 
            <div className={classes.thirdtopic}>
                <Typography variant="subtitle1">
                    01. You can find Movie, Tvseries reviews and rates
                </Typography> 
                <Typography variant="subtitle1">
                    02. You will get know about latest movies
                </Typography> 
                <Typography variant="subtitle1">
                    03. You can find details about hollyhood
                </Typography> 
                <Typography variant="subtitle1">
                    04. You can find latest news about hollyhood
                </Typography> 
                </div>        
            </Grid>

            <Grid item xs={12}>
            <Typography variant="h5">
                How to use this service
            </Typography> 
            <div className={classes.thirdtopic}>
                <Typography variant="subtitle1">
                    01. Register by using your email
                </Typography> 
                <Typography variant="subtitle1">
                    02. Then login and refer posts which created by movieZilla Admin
                </Typography> 
                <Typography variant="subtitle1">
                    03. You can find details about hollyhood03. Do you have any issue with any post in this site Please report about it
                </Typography> 
            </div>        
            </Grid>

        </div>

            <div className={classes.btnSection}>
            <Link to="/signup" className={classes.link}>
                <Button variant="contained" color="primary" disableElevation>
                    Register Now
                </Button>
            </Link>
            </div>
        
    </div>
        
        
    );
}

export default GuestView;