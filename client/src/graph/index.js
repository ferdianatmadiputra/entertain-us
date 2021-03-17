import { gql } from "@apollo/client"

export const GET_ALL = gql`
query {
  movies {
    _id
    title
    overview
    poster_path
    popularity
    tags
  }
  series {
    _id
    title
    overview
    poster_path
    popularity
    tags
  }
}
`

export const ADD_MOVIES = gql`
  mutation addMovies($input: MovieInput) {
    addMovies (input: $input) {
      _id,
      title,
      overview,
      poster_path
      popularity
      tags
    }
  }
`
  
export const GET_MOVIES = gql`
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

export const PUT_MOVIES = gql`
  mutation updateMovies($input: MovieUpdate) {
    updateMovies (input: $input) {
      updateCount
    }
  }
`

export const DEL_MOVIES = gql`
  mutation delMovies($input: ID!) {
    delMovies (input: $input) {
      msg
    }
  } 
`

export const GET_FAVORITES = gql`
  query getFavorites {
    favorites @client
  }
`