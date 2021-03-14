import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, IconButton, Slide } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import BookmarksIcon from '@material-ui/icons/Bookmarks'
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

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
    color: "#000000"
  },
  navItem: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
}));

export default function Navbar () {
  const classes = useStyles();
  const trigger = useScrollTrigger()
  return (
  <Slide appear={false} direction="down" in={!trigger}>
    <div className={classes.root}>
      <AppBar position="static" color={classes.header}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            EntertainMe
          </Typography>
          <Button color="inherit">
            <NavLink to="/fav"
              className={classes.navItem}
              activeStyle={{color: '#dd2c00'}}
            >
              <BookmarksIcon />
              <span>
              &nbsp;Your Favorites
              </span>
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/add"
                className={classes.navItem}
                activeStyle={{color: '#dd2c00'}}
              >
                <AddToPhotosIcon />
                <span>
                &nbsp;Add Movie
                </span>
              </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  </Slide>
  )
}