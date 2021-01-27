import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import logo from "../../images/logo_transparent.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../action/users";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const useStyles = makeStyles((theme) => ({
  mainSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
  },
  img: {
    width: 300,
  },
  root: {
    minWidth: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 25,
  },
  title2: {
    fontSize: 15,
    marginBottom: 15,
    textDecoration: "none",
  },
  textFiled: {
    marginBottom: 18,
  },
  birthdayFiled: {
    marginBottom: 22,
  },
  button: {
    borderRadius: 15,
    marginBottom: 20,
  },
}));

const Signup = () => {
  const styles = useStyles();
  const [userData, setUserdata] = useState({
    username: "",
    Email: "",
    password: "",
    password2: "",
    birthDay: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.username==="" | userData.Email==="" | userData.password==="" | userData.password2==="" | userData.birthDay==="") {
      toast.info( "Please fill out all fields", {position: toast.POSITION.BOTTOM_RIGHT});
    }else{
      if (userData.password!==userData.password2) {
        toast.info( "Password didn't match", {position: toast.POSITION.BOTTOM_RIGHT});
      }else{
        dispatch(signup(userData));
      }
    }
  };

  useEffect(() => {
    document.title = "Signup with MovieZilla";
  });

  return (
    <div className={styles.mainSection}>
      <img src={logo} alt="logo" className={styles.img}></img>
      <Card>
        <CardContent className={styles.root}>
          <Typography
            Typography
            className={styles.title}
            color="textSecondary"
            gutterBottom
          >
            Create your account
          </Typography>

          <form
            autoComplete="on"
            className={`${styles.root}`}
            noValidate
            onSubmit={handleSubmit}
          >
            <TextField
              id="name"
              className={styles.textFiled}
              label="Your name:"
              variant="outlined"
              value={userData.username}
              onChange={(e) =>
                setUserdata({ ...userData, username: e.target.value })
              }
            />
            <TextField
              id="email"
              className={styles.textFiled}
              label="Email:"
              variant="outlined"
              value={userData.Email}
              onChange={(e) =>
                setUserdata({ ...userData, Email: e.target.value })
              }
            />
            <TextField
              id="date"
              label="Birthday"
              type="date"
              value={userData.birthDay}
              className={styles.birthdayFiled}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) =>
                setUserdata({ ...userData, birthDay: e.target.value})
              }
            />

            <TextField
              id="Password"
              type="password"
              className={styles.textFiled}
              label="Password:"
              variant="outlined"
              value={userData.password}
              onChange={(e) =>
                setUserdata({ ...userData, password: e.target.value })
              }
            />
            <TextField
              id="PasswordRepeat"
              type="password"
              className={styles.textFiled}
              label="Password repeat:"
              variant="outlined"
              value={userData.password2}
              onChange={(e) =>
                setUserdata({ ...userData, password2: e.target.value})  
              }
            />

            <Button
              className={styles.button}
              variant="contained"
              color="primary"
              type="submit"
            >
              Create your MovieZilla Account
            </Button>
          </form>

          <Typography className={styles.title2} color="black" gutterBottom>
            Do you already have an account?{" "}
            <Link to="/login" className={styles.title2}>
              {" "}
              Login{" "}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
