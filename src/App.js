import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GuestView from "./components/GuestView/GuestView";
import Footer from "./components/Footer/footer";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./components/Signup/Signup";
import AppBar from "./components/App_bar/app_bar";
import Login from "./components/Login/Login";
import UserStore from "./stores/UserStore";
import { observer } from "mobx-react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import UserAppBar from "./components/Loged_AppBar/UserAppBar";
import { useDispatch } from "react-redux";
import { getPosts } from "./action/users";
import { Grow, Grid, Container } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Home from "./components/Home/Home";
import Movie from "./components/Movies/Movie";
import Tvseries from "./components/Tvseries/Tvseries";
import Cookies from "js-cookie";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  link: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    textDecoration: "none",
  },
}));

function App() {
  const classes = useStyles();
  const [currentId, setcurrentId] = useState(null);

  useEffect(() => {
    document.title = "Welcome to MovieZilla - Movie Reviews and rates";
    readCookies();
  }, []);

  const readCookies = () =>{
    const user = Cookies.get('user');
    if(user){
      UserStore.isLoggedin=true;
      UserStore.email = user;
    }
  };

  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();

  const handleContinue = (e) => {
    setHidden(!hidden);
    dispatch(getPosts());
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  if (UserStore.loading === true) {
    return (
      <div>
        <LinearProgress color="secondary" />
      </div>
    );
  } else {
    if (UserStore.isLoggedin === true) {
      Cookies.set('user', UserStore.email, { expires: 1 });

      return (
        <div>
          <BrowserRouter>
            <div hidden={hidden}>
              <Redirect
                to="/home"
                className={classes.link}
                onClick={handleContinue}
              >
                <p hidden={hidden}> &nbsp; Hello, {UserStore.userName}</p>
                <p hidden={hidden}>Your login operation is successful</p>
                <p hidden={hidden}>Please Press Continue</p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleContinue}
                >
                  Continue
                </Button>
              </Redirect>
            </div>

            <Switch>
              <Route exact path="/home">
                <UserAppBar />
                <Home />
                <Grow in>
                  <Container>
                    <Grid
                      className={classes.mainContainer}
                      container
                      justify="space-between"
                      alignItems="stretch"
                      spacing={4}
                    >
                      <Grid item xs={12} sm={10}>
                        <Posts setcurrentId={setcurrentId} />
                      </Grid>
                    </Grid>
                  </Container>
                </Grow>
                <Footer />
              </Route>

              <Route exact path="/movies">
                <UserAppBar />
                <Movie />
                <Grow in>
                  <Container>
                    <Grid
                      className={classes.mainContainer}
                      container
                      justify="space-between"
                      alignItems="stretch"
                      spacing={4}
                    >
                      <Grid item xs={12} sm={10}>
                        <Posts setcurrentId={setcurrentId} />
                      </Grid>
                    </Grid>
                  </Container>
                </Grow>
                <Footer />
              </Route>

              <Route exact path="/tvseries">
                <UserAppBar />
                <Tvseries />
                <Grow in>
                  <Container>
                    <Grid
                      className={classes.mainContainer}
                      container
                      justify="space-between"
                      alignItems="stretch"
                      spacing={4}
                    >
                      <Grid item xs={12} sm={10}>
                        <Posts setcurrentId={setcurrentId} />
                      </Grid>
                    </Grid>
                  </Container>
                </Grow>
                <Footer />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      );
    }else {
      return (
        <div className={classes.root}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <AppBar />
                <GuestView />
                <Footer />
              </Route>
              <Route exact path="/signup">
                <AppBar />
                <SignUp />
                <Footer />
              </Route>
              <Route exact path="/login">
                <AppBar />
                <Login />
                <Footer />
              </Route>
              <Route exact path="/*">
                <Redirect to="/login"></Redirect>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }
}

ReactDOM.render(App, document.getElementById("root"));
export default observer(App);
