import { useQuery, gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { CircularProgress, Box, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import CardFilm from '../components/CardFilm'
import { GET_ALL } from '../graph/index'
import { makeStyles } from '@material-ui/core/styles';
import MovieGridList from '../components/MovieGridList'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
const useStyles = makeStyles(() => ({
  horizontalscroll: {
    display: "flex",
    flexDirection: 'row',
    overflowY: "scroll",
    overflowX: "hidden",
    padding: 20,
    "&::-webkit-scrollbar": {
      display: 'none'
    },
    // "&::-webkit-scrollbar-track": {
    //   boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
    // },
    // "&::-webkit-scrollbar-thumb": {
    //   backgroundColor: "#E50914",
    //   borderRadius: 50,
    // },
  }
}));


export default function Home () {
  const classes = useStyles();
  const history = useHistory();

  const { loading, error, data } = useQuery(GET_ALL)

  useEffect(() => {
    console.log(data)
  }, [data])

  if (loading){
    return <CircularProgress />
  } else if (error) {
    return <p>error...</p>
  }
  return (
    <>
    <h1 style={{textAlign: 'center'}}>ENTERTAINME</h1>
    <Typography variant="h4" component="h2">
      MOVIES
    </Typography>
    <div className={classes.horizontalscroll}>
    {
      data.movies.map(datum => (
        <CardFilm key={datum._id} datum={datum} />
      ))
    }
    </div>
    <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">MOVIES</ListSubheader>
        </GridListTile>
        {data.movies.map((datum) => (
          <MovieGridList key={datum._id} datum ={datum} />
        ))}
    </GridList>
    <Typography variant="h4" component="h2">
        SERIES
    </Typography>
    <Box display="flex" flexDirection="row" p={1} >
    {
      data.series.map(datum => (
        <CardFilm key={datum._id} datum={datum} />
      ))
    }
    </Box>
    </>
  )
}