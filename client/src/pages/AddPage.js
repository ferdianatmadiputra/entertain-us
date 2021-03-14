import { useQuery, gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { Button, TextField, Container, Paper, Box } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import PublishIcon from '@material-ui/icons/Publish'
import ClearIcon from '@material-ui/icons/Clear';

const ADD_MOVIES = gql`
mutation addMovies($input: MovieInput) {
  addMovies (input: $input) {
    title
    overview
    poster_path
    popularity
    tags
  }
}
`

const GET_MOVIES = gql`
query {
  movies {
    _id
    title
    overview
    poster_path
    popularity
    tags
  }
}
`
export default function AddPage () {
  const history = useHistory();
  // const songs = useSelector((state) => state.songs.songs)
  // const dispatch = useDispatch()
  // const [localState, setLocalState] = useState('')

  const [ addMovie, { data: newMovieResult} ] = useMutation(ADD_MOVIES)
  const [formData, setFormData] = useState({
      title: '',
      overview: '',
      poster_path: '',
      popularity: 0,
      tags: ['thriller']})

  const submitAddMovies = (e) => {
      e.preventDefault()
      console.log(formData, 'ini dataform')
      addMovie({
        variables: { input: formData },
        refetchQueries: [{ query: GET_MOVIES }]
      })
      history.push('/')
  }

  function onChangeInput (e, key) {
    let input = e.target.value
    if (key === 'popularity') {
      input = +e.target.value
    }
    console.log(e)
    let newInput = {...formData}
    newInput[key] = input
    setFormData(newInput)
  }

  function backToHome () {
    history.push('/')
  }

  return (
    <>
    <h1 style={{textAlign: 'center'}}>Add New Movie</h1>
    <Container style={{maxWidth: 500}}>
    <form>
      <TextField label="Title"
        color="secondary"
        style={{ margin: 8 }}
        defaultValue={formData.title}
        onChange={(e) => onChangeInput(e, "title")}
        fullWidth variant="outlined" required 
        autoComplete="off"/>
      <TextField label="Overview"
        color="secondary"
        style={{ margin: 8 }}
        defaultValue={formData.title}
        onChange={(e) => onChangeInput(e, "overview")}
        fullWidth variant="outlined" required 
        autoComplete="off"/>
      <TextField label="Poster URL"
        color="secondary"
        style={{ margin: 8 }}
        defaultValue={formData.title}
        onChange={(e) => onChangeInput(e, "poster_path")}
        fullWidth variant="outlined" required 
        autoComplete="off"/>
      <TextField label="Popularity"
        color="secondary"
        style={{ margin: 8 }}
        defaultValue={formData.title}
        onChange={(e) => onChangeInput(e, "popularity")}
        fullWidth variant="outlined" required 
        autoComplete="off"/>
      <Box
        mx="auto">
        <Button
          size="large"
          style={{ margin: 8 }}
          variant="contained"
          color="dark"
          onClick={submitAddMovies}
          startIcon={<PublishIcon />}
        >SUBMIT</Button>
        <Button
          size="large"
          style={{ margin: 8 }}
          variant="outline"
          color="dark"
          onClick={backToHome}
          startIcon={<ClearIcon />}
        >CANCEL</Button>
      </Box>
    </form>
    </Container>
    </>
  )
}