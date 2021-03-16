import { useQuery, gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { Button, Card, Container, Paper } from '@material-ui/core'

export default function FavoritePage () {

  const GET_MOVIES = gql`
  query {
    movies{
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
  `
  const ADD_MOVIES = gql`
  mutation addSeries($input: SeriesInput) {
    addSeries (movies: $input) {
      _id,
      title,
      overview,
      tags
  	}
  }
  `
  const { loading, error, data } = useQuery(GET_MOVIES)
  const [ addMovie, { data: newMovieResult} ] = useMutation(ADD_MOVIES)
  const [formData, setFormData] = useState({a: '', b: ''})

  const submitAddMovies = (e) => {
    e.preventDefault()
    console.log('test')
    addMovie({
      variables: { input: formData },
      refetchQueries: [{ query: GET_MOVIES }]
    })
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  if (loading){
    return <p>Loading....</p>
  }
  return (
    <>
    <h1>YOUR FAVORITE</h1>
    <Container>

    {
      data.movies.map(datum => (
        <Paper variant="outlined" elevation={3}>
          <div>{datum.title}</div>
          <div>{datum.overview}</div>
          <div>{datum.popularity}</div>
        </Paper>
      ))
    }
    </Container>
    <Button color="primary" onClick={submitAddMovies}>SUBMIT</Button>
    </>
  )
}