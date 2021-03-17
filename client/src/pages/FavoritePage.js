import { Typography } from '@material-ui/core'
import MovieGridList from '../components/MovieGridList'
import { makeStyles } from '@material-ui/core/styles';
import { useReactiveVar, useQuery } from '@apollo/client'
import { favoritesVar } from '../graph/vars'
import { GET_FAVORITES } from '../graph/index'

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'center',
    margin:10
  }
}));
export default function FavoritePage () {
  const classes = useStyles();
  const { data, loading, error } = useQuery(GET_FAVORITES)

  // const favorites = useReactiveVar(favoritesVar)

  if (loading){
    return <p>Loading....</p>
  }
  if (error) {
    return <p>Error {error.message}</p>
  }
  const { favorites } = data 

  if (favorites.length === 0) {
    return (
      <>
      <Typography variant="h5" className={classes.title} component="h2">
        YOUR FAVORITES
      </Typography>
      <Typography variant="h5" className={classes.title} component="h2">
        IS EMPTY...
      </Typography>
    </>
    )
  }
  return (
    <>
      <Typography variant="h5" className={classes.title} component="h2">
        YOUR FAVORITES
      </Typography>
      <MovieGridList display="flex" data={favorites} type="favorite" />
    </>
  )
}