import { useQuery, gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { CircularProgress, Box, Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { GET_ALL } from '../graph/index'
import { makeStyles } from '@material-ui/core/styles';
import MovieGridList from '../components/MovieGridList'
import ModalForm from '../components/ModalForm'
import AddBoxIcon from '@material-ui/icons/AddBox'

const useStyles = makeStyles(() => ({
  gridList: {
    width: "100%",
    height: 450,
    // overflowX: "scroll",
    // overflowY: "hidden",
  },
  gridContainer: {
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'space-between',
    overflow: 'hidden',
    padding: 20
  },
  title: {
    textAlign: 'center',
    margin:10
  }
}));


export default function Home () {
  const classes = useStyles();
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);
  const { loading, error, data } = useQuery(GET_ALL)

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  if (loading){
    return (
      <Box display='flex' flex='1' justifyContent='space-around'>
      <CircularProgress size={100} />
      </Box>)
  } else if (error) {
    return <p>error...</p>
  }
  return (
    <>
      <ModalForm open={openModal} close={handleClose} />
      <div className={classes.gridContainer}>
        <Typography variant="h5" className={classes.title} component="h2">
          MOVIES
        </Typography>
        <Button variant="text" color="primary" size="small" onClick={handleClickOpen}>
          <AddBoxIcon fontSize="small"/>&nbsp;Add New
        </Button>
      </div>

      <MovieGridList display="flex" data={data.movies} />

      <div className={classes.gridContainer}>
        <Typography variant="h5" className={classes.title} component="h2">
          SERIES
        </Typography>
        <></>
      </div>
      <MovieGridList display="flex" data={data.series} />
    </>
  )
}