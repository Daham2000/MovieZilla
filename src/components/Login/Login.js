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
import { useDispatch } from "react-redux";
import { login } from "../../action/users";
import { useState } from "react";
import { toast } from "react-toastify";
import React, { useEffect } from 'react';

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
    marginBottom: 15,
  },
  button: {
    borderRadius: 15,
    marginBottom: 20,
    width: 150,
  },
  forgotpass: {
    marginBottom: 5,
    textDecoration: "none",
  },
}));

const Login = () => {
  const classes = useStyles();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (userData.email==="" | userData.password==="") {
      toast.info( "Please fill out all fields", {position: toast.POSITION.BOTTOM_RIGHT});
    }else{
      dispatch(login(userData));
    }
    e.preventDefault();
  };

  useEffect(() => {
    document.title = "Login with MovieZilla";
  });

  return (
    <div className={classes.mainSection}>
      <img src={logo} alt="logo" className={classes.img}></img>
      <Card>
        <CardContent className={classes.root}>
          <Typography
            Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Login to your Account
          </Typography>
          <form
            autoComplete="on"
            noValidate
            className={`${classes.root}`}
            onSubmit={handleSubmit}
          >
            <TextField
              id="Email"
              className={classes.textFiled}
              label="Email:"
              variant="outlined"
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
            <TextField
              id="Password"
              type="password"
              className={classes.textFiled}
              label="Password:"
              variant="outlined"
              value={userData.password}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
            />
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
          </form>

          <Link to="/signup" className={classes.forgotpass}>
            {" "}
            Forget password?{" "}
          </Link>
          <Typography
            Typography
            className={classes.title2}
            color="black"
            gutterBottom
          >
            Don’t you have an account Please{" "}
            <Link to="/signup" className={classes.title2}>
              {" "}
              Register{" "}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default Login;
