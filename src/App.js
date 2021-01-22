import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GuestView from "./components/GuestView/GuestView";
import Footer from "./components/Footer/footer";
import ReactDOM from "react-dom";
import {BrowserRouter, 
  Switch,
  Route } from "react-router-dom";
import SignUp from "./components/Signup/Signup";
import AppBar from './components/App_bar/app_bar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  }
}));

function App() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Welcome to MovieZilla"
  }, [])

  return (
    <div className={classes.root}>

    <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <AppBar />
            <GuestView />
            <Footer/>
          </Route>
          <Route exact path="/signup">
            <AppBar />
            <SignUp />
            <Footer/>
          </Route>  
      </Switch>

    </BrowserRouter>

    </div>
  );
}

ReactDOM.render(App, document.getElementById('root'));
export default App;


