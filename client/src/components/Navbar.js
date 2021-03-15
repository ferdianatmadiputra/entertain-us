import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, IconButton, Slide } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import BookmarksIcon from '@material-ui/icons/Bookmarks'
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import TheatersIcon from '@material-ui/icons/Theaters'
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    color: "#e83b42",
    backgroundColor: "#150C0Cad"
  },
  navItem: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  font: {
    fontSize: 12
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.header}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/"
                className={classes.navItem}
                activeStyle={{color: '#e83b42'}}
              >
                <TheatersIcon />
                <span className={classes.font}>
                &nbsp;ENTERTAIN US
                </span>
              </NavLink>
          </Typography>

          <Button color="inherit">
            <NavLink to="/fav"
              className={classes.navItem}
              activeStyle={{color: '#dd2c00'}}
            >
              <span className={classes.font}>
              Your Favorites
              &nbsp;
              </span>
              <BookmarksIcon />
            </NavLink>
          </Button>

        </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}