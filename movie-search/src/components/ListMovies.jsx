import React from 'react'
import ShowMovieDetailsModal from '../components/ShowMovieDetailsModal'

const ListMovies = ({ movies }) => {
  return (
    <div id='movie-list'>
      {movies && movies.map((movie, index) => (
        <div id='movie' key={index}>{movie?.Title} <ShowMovieDetailsModal index={index} movies={movies} /> </div>
      ))}
    </div>
  )
}

export default ListMovies