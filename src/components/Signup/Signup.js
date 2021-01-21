import { makeStyles,Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainSection:{
        display: 'flex'
    }
}));

const Signup = () =>{
    const styles= useStyles();

    return (
        <div className={styles.mainSection}>
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </div>
    )
}

export default Signup;