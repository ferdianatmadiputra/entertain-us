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
import { useQuery, gql, useMutation } from "@apollo/client";
import { DEL_MOVIES, GET_MOVIES, GET_FAVORITES } from '../graph/index'
import ModalDelete from './ModalDelete'
import { useReactiveVar } from '@apollo/client'
import { favoritesVar } from '../graph/vars'

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
    transform: 'translateZ(0)',
    overflowX: "scroll",
    overflowY: "hidden",
    width: '100%',
    padding: 10,
    "&::-webkit-scrollbar": {
      width: 5,
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
    zIndex: 200,
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
    backgroundColor: "#150C0C"
  },
  detail: {
    padding: 10,
    backgroundColor: "#150C0C"
  }
}));

export default function SingleLineGridList(props) {
  const classes = useStyles();
  let movies = props.data.slice().reverse()
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMsg, setSnackbarMsg] = React.useState('')
  const [openDetail, setOpenDetail] = React.useState({open: false, id: ''});
  const [openModalEdit, setOpenModalEdit] = React.useState(false);
  const [editData, setEditData] = React.useState(false);
  const [ delMovie, { data: delResult} ] = useMutation(DEL_MOVIES)
  const [delData, setDelData] = React.useState({ _id: '' });
  const [openModalDelete, setOpenModalDelete] = React.useState(false);
  const {data, loading, error } = useQuery(GET_FAVORITES)
  const backUpImage = 'https://image.tmdb.org/t/p/w500/5lqJx0uNKrD1cEKgaqF1LBsLAoi.jpg'
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error {error.message}</p>
  }

  console.log(data, 'ini isi data fav')
  const { favorites } = data
  ///////// SNACKBAR HANDLER
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  ////////// DETAIL CARD
  const toggleDetail = (idDetail) => {
    setOpenDetail({ open: !openDetail.open, id: idDetail})
  }

  //////// EDIT HANDLER
  const onClickEdit = (movie) => {
    setEditData(movie)
    setOpenModalEdit(true)
  }
  
  const handleCloseEdit = () => {
    setOpenModalEdit(false);
  };

  ///////// DELETE HANDLER
  const onClickDelete = (movieToDel) => {
    setDelData(movieToDel)
    setOpenModalDelete(true)
  }
  const confirmDelete = () => {
    delMovie({
      variables: { input: delData._id },
      refetchQueries: [{ query: GET_MOVIES }]
    })
    setOpenModalDelete(false)
    setSnackbarMsg(`${delData.title} deleted successfully`)
    setOpenSnackbar(true);
  }
  const handleCloseDelete = () => {
    setOpenModalDelete(false);
  };

  ///////// BOOKMARK HANDLER
  const handleBookmark = (movie) => {
    let isFav = favorites.find((el) => el._id === movie._id)
    console.log(isFav, 'isi isFav')
    if (isFav) {
      favoritesVar(favorites.filter(el => el._id !== movie._id))
      setSnackbarMsg(`${movie.title} removed from your favorites`)
      setOpenSnackbar(true);
    } else {
      favoritesVar([...favorites, movie])
      setSnackbarMsg(`${movie.title} added to your favorites`)
      setOpenSnackbar(true);
    }
  }

  return (
    <div className={classes.root}>
      <ModalDelete
        open={openModalDelete}
        close={handleCloseDelete}
        delData={editData}
        confirmDelete={confirmDelete}
      />
      <ModalForm
        open={openModalEdit}
        close={handleCloseEdit}
        editData={editData}
      />
      <GridList cellHeight={450} className={classes.gridList}
      cols={0}>
        {movies.map((movie) => (
          openDetail.open && openDetail.id === movie._id
          ? 
            <GridListTile key={movie._id} className={classes.tile}
              onClick={() => toggleDetail(movie._id)}>
              <Box className={classes.detail}>
                <Typography variant="h6" paragraph={true}>{movie.title}</Typography>
                <Typography variant="caption" paragraph={true}>{movie.overview}</Typography>
                <br />
                <Typography variant="subtitle1">Tags: {movie.tags.join(', ')}</Typography>
              </Box>
              <GridListTileBar
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  props.type === "series"
                  ? <></>
                  :
                  <>
                  <IconButton aria-label={`favorite ${movie.title}`}
                  onClick={() => onClickEdit(movie)}>
                    <EditIcon className={classes.title} />
                  </IconButton>
                  <IconButton aria-label={`favorite ${movie.title}`}
                  onClick={() => onClickDelete(movie)}>
                    <DeleteForeverIcon className={classes.title} />
                  </IconButton>
                  </>
                }
              />

            </GridListTile>
          :
          <GridListTile key={movie._id} className={classes.tile}>
            <img
            src={movie.poster_path}
            onError={(e)=>{ if (e.target.src !== backUpImage) { e.target.onerror = null; e.target.src=backUpImage; } }}
            alt={movie.title}
            onClick={() => toggleDetail(movie._id)}
            
            />
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
                </>
             }
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                props.type === "series"
                  ? <></>
                  :
                (favorites.find((el) => el._id === movie._id)
                  ?
                  <IconButton aria-label={`favorite ${movie.title}`}
                  onClick={() => handleBookmark(movie)}>
                      <TurnedInIcon className={classes.title} />
                  </IconButton>
                  :
                  <IconButton aria-label={`favorite ${movie.title}`}
                  onClick={() => handleBookmark(movie)}>
                      <TurnedInNotIcon className={classes.title} />
                  </IconButton>)
              }
            />
          </GridListTile>
        ))}
      </GridList>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        ContentProps={{
          style: {
            backgroundColor: '#150C0C',
            color:'#e83b42'
          },
        }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMsg}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}