import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grow } from "@material-ui/core";
import GuestView from "./components/GuestView/GuestView";
import Footer from "./components/Footer/footer";

import ReactDOM from "react-dom";

import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import MoviecIcon from '@material-ui/icons/MovieCreation';

import {BrowserRouter, 
  Switch,
  Route,
  Link } from "react-router-dom";

import SignUp from "./components/Signup/Signup";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Raleway'
  },
  appbarbtn: {
    marginLeft: 15
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  link:{
    textDecoration: "none",
    color: "white"
  }

}));


function App() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Welcome to MovieZilla"
  }, [])

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
     
    <div className={classes.root}>

    <BrowserRouter>

      <AppBar position="static">
        <Toolbar>
          <IconButton
          onClick={handleDrawerOpen}
           edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            MovieZilla
          </Typography>
          <Button 
            color="inherit">Login</Button>


        <Link to="/signup" className={classes.link}>
          <Button 
            className={classes.appbarbtn} 
            color="inherit"
            type="button">
              Signup
          </Button>
        </Link>
            
         
        </Toolbar>
      </AppBar>

    <Grow in>
    <Switch>
          <Route exact path="/">
            <GuestView />
            <Footer/>
          </Route>
          <Route path="/signup">
            <SignUp />
            <Footer/>
          </Route>  
      </Switch>
    </Grow>

      

    </BrowserRouter>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Home', 'Movies', 'Tv series', 'Hollyhood News'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{
                index===0 ? <HomeIcon /> : index===1 ? <MovieIcon /> : 
              index===2 ? <TvIcon /> : <MoviecIcon/> }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Latest News', 'Popular in last month', 'Box office Movies'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

    </div>

  );
}
ReactDOM.render(App, document.getElementById('root'));
export default App;


