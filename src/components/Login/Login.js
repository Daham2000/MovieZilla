import { makeStyles, Card, CardContent,Typography, TextField,Button } from "@material-ui/core";
import logo from  "../../images/logo_transparent.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>({
    mainSection:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center'
    },
    img: {
        width: 300
    },
    root: {
        minWidth: 400,
        display: 'flex',
        flexDirection: "column",
        alignItems: "space-between"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 25
    },
    title2: {
        fontSize: 15,
        marginBottom: 15,
        textDecoration: "none"
    },
    textFiled: {
        marginBottom: 15
    },
    button:{
        borderRadius: 15,
        marginBottom: 20,
        width: 150
    },
    forgotpass:{
        marginBottom: 5,
        textDecoration: "none"
    }
}));

const Login = () => {
    const classes = useStyles();

    return(
        <div className={classes.mainSection}>
            <img src={logo} alt="logo" className={classes.img}></img>
            <Card >
                <CardContent className={classes.root}>
                    <Typography
                    Typography className={classes.title} color="textSecondary" gutterBottom>
                        Login to your Account
                    </Typography>

                    <TextField id="Username" className={classes.textFiled} label="User name:" variant="outlined" />
                    <TextField id="Password" type="password" className={classes.textFiled} label="Password:" variant="outlined" />
                    
                    <div>
                        <Button className={classes.button} variant="contained" color="primary" href="#contained-buttons">
                            Login
                        </Button>
                    </div>
                

                    <Link to="/signup" className={classes.forgotpass}> Forget password? </Link> 
                    <Typography
                    Typography className={classes.title2} color="black" gutterBottom>
                        Don’t you have an account Please <Link to="/signup" className={classes.title2}> Register </Link> 
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default Login;