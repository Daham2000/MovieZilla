import { Typography, makeStyles,Button  } from "@material-ui/core";
import logo from "../../images/logo_transparent.png";

const useStyles = makeStyles((theme) => ({
    footerSection:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        justifyItems: "center"
    },
    _2ndsection:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyItems: 'center',
        marginTop: 20
    },
    _3rdSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
    },
    imgs:{
        width: "170px"
    },
    copyright:{
        
    }

}));

const Footer = () =>{
    const styles= useStyles();

    return(
        <div>
            <Typography className={styles.footerSection} component="div" style={{ backgroundColor: '#29528F', marginTop: '25px' , height: '305px', width:'100%' }} >
                <div className={styles._2ndsection}>
                    <p style={{color: 'white', marginRight: "25px"}}>+94778899555</p>
                    <Button variant="contained" style={{backgroundColor: "#D45E08", color: "white", height: "40px"}}>
                        Call us
                    </Button>
                </div>

                <div className={styles._3rdSection}>
                    <img className={styles.imgs} src={logo} alt="Logo" />
                    <p className={styles.copyright} style={{color: 'white'}}>Copyright all rights reserved 2021</p>
                </div>

            </Typography>
        </div>
    )
}

export default Footer;