import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import Rating  from '@material-ui/lab/Rating'
import Typography from '@material-ui/core/Typography';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot'
import TurnedInIcon from '@material-ui/icons/TurnedIn'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close'
import ModalForm from '../components/ModalForm'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "#000000",
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    overflowX: "scroll",
    overflowY: "hidden",
    width: '100%',
    padding: 10,
    "&::-webkit-scrollbar": {
      width: 5,
      // display: 'none'
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: '#150C0C',
      borderRadius: 8,
    },
  },
  title: {
    color: "#ffffff",
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  tile: {
    '&:hover': {
      transform: "scale(1.05)",
      transitionDuration: 300,
      zIndex: 100,
      cursor: "pointer"
    },
    width: 300,
    backgroundColor: "#000000"
  },
  detail: {
    padding: 10,
    backgroundColor: "#000000"
  }
}));

export default function SingleLineGridList(props) {
  const classes = useStyles();
  let data = props.data.slice().reverse()
  const [openDetail, setOpenDetail] = React.useState({open: false, id: ''});
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [openModalEdit, setOpenModalEdit] = React.useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
    // nanti dipakai untuk bookmarknya
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const toggleDetail = (idDetail) => {
    setOpenDetail({ open: !openDetail.open, id: idDetail})
  }
  const onClickEdit = (movie) => {
    setOpenModalEdit(true)
  }

  const onClickDelete = () => {

  }


  const handleCloseEdit = () => {
    setOpenModalEdit(false);
  };

  return (
    <div className={classes.root}>
      <ModalForm open={openModalEdit} close={handleCloseEdit} />
      <GridList cellHeight={450} className={classes.gridList}
      cols={0}>
        {data.map((movie) => (
          openDetail.open && openDetail.id === movie._id
          ? 
            <GridListTile key={movie._id} className={classes.tile}
              onClick={() => toggleDetail(movie._id)}>
              {/* <img src={movie.poster_path} alt={movie.title} /> */}
              <Box className={classes.detail}>
                <Typography>{movie.title}</Typography>
                <Typography>{movie.overview}</Typography>
                <br />
                <Typography>Tags: {movie.tags.join(', ')}</Typography>
              </Box>
              <GridListTileBar
                
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <>
                  <IconButton aria-label={`favorite ${movie.title}`}
                  onClick={onClickEdit}>
                    <EditIcon className={classes.title} />
                  </IconButton>
                  <IconButton aria-label={`favorite ${movie.title}`}
                  onClick={onClickDelete}>
                    <DeleteForeverIcon className={classes.title} />
                  </IconButton>
                  </>
                }
              />

            </GridListTile>
          :
          <GridListTile key={movie._id} className={classes.tile}
            onClick={() => toggleDetail(movie._id)}>
            <img src={movie.poster_path} alt={movie.title} />
            <GridListTileBar
              title={movie.title}
              subtitle={
                <>
                <Typography>{movie.popularity}&nbsp;
                  <Rating name="read-only" 
                    precision={0.1}
                    value={movie.popularity / 2}
                    readOnly
                    size="small"
                    />
                </Typography>
                {/* <Typography>{movie.overview}</Typography> */}
                </>
              }
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`favorite ${movie.title}`}
                onClick={handleClick}>
                  <TurnedInNotIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Added to your favorite"
        action={
          <React.Fragment>
            {/* <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button> */}
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}