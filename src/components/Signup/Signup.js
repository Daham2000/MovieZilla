import { makeStyles, Card, CardContent,Typography, TextField,Button } from "@material-ui/core";
import logo from  "../../images/logo_transparent.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
        marginBottom: 20
    }
}));

const Signup = () =>{
    const styles= useStyles();

    return (
        <div className={styles.mainSection}>
            <img src={logo} alt="logo" className={styles.img}></img>
            <Card >
                <CardContent className={styles.root}>
                    <Typography
                    Typography className={styles.title} color="textSecondary" gutterBottom>
                        Create your account
                    </Typography>

                    <TextField id="name" className={styles.textFiled} label="Your name:" variant="outlined" />
                    <TextField id="email" className={styles.textFiled} label="Email:" variant="outlined" />
                    <TextField id="Password" type="password" className={styles.textFiled} label="Password:" variant="outlined" />
                    <TextField id="PasswordRepeat" type="password" className={styles.textFiled} label="Password repeat:" variant="outlined" />
                    
                    <Button className={styles.button} variant="contained" color="primary" href="#contained-buttons">
                        Create your MovieZilla Account
                    </Button>

                    <Typography
                    Typography className={styles.title2} color="black" gutterBottom>
                        Do you already have an account? <Link to="/login" className={styles.title2}> Login </Link> 
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Signup;