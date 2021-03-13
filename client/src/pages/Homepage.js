import { useQuery, gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

export default function Home () {
  // const songs = useSelector((state) => state.songs.songs)
  // const dispatch = useDispatch()
  // const [localState, setLocalState] = useState('')
  const GET_MOVIES = gql`
  query {
    movies{
      title
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

  // useEffect(() => {
  //   dispatch(fetchSongs())
  // }, [dispatch])

  return (
    <>
    <div>{JSON.stringify(data)}</div>
    <button type="button" onClick={submitAddMovies}>SUBMIT</button>
    </>
  )
}