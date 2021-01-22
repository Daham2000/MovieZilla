import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import logo from '../../images/logo_transparent.png';

import MenuIcon from '@material-ui/icons/Menu';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Raleway'
  },
  link:{
    textDecoration: "none",
    color: "white"
  },
  appbarbtn: {
    marginLeft: 15
  },
  root: {
    flexGrow: 1,
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
  sectionDrawer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'flex-start'
  },
  imgs:{
    width:150
  }

}));

const App_bar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            MovieZilla
          </Typography>
          <Button color="inherit">Login</Button>

          <Link to="/signup" className={classes.link}>
            <Button className={classes.appbarbtn} color="inherit" type="button">
              Signup
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

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
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />

            <List>
              <ListItem button component={Link} to="/">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItem>
              <ListItem button component={Link} to="/">
                <ListItemIcon>
                  <MovieIcon />
                </ListItemIcon>
                <ListItemText>Movies</ListItemText>
              </ListItem>
              <ListItem button component={Link} to="/">
                <ListItemIcon>
                  <TvIcon />
                </ListItemIcon>
                <ListItemText>Tv series</ListItemText>
              </ListItem>
              <ListItem button component={Link} to="/">
                <ListItemIcon>
                  <MovieIcon />
                </ListItemIcon>
                <ListItemText>Hoillyhood Movies</ListItemText>
              </ListItem>
            </List>

            <Divider />

            <div className={classes.sectionDrawer}>
              <img alt="Logo" src={logo} className={classes.imgs}></img>
            </div>
          </Drawer>
      </div>
  );
};

export default App_bar;
