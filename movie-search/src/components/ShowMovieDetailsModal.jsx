import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShowMovieDetailsModal = ({ movies, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false) 
  const [movieDetails, setMovieDetails] = useState()
  const [currentIndex, setCurrentIndex] = useState(index)

  useEffect(() => {
    requestDetails()
    // eslint-disable-next-line
  }, [currentIndex])

  const requestDetails = () => {
    axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${movies[currentIndex].imdbID}&plot=full`)
      .then(data => {
        setMovieDetails(data?.data)
      })
      .catch(error => console.error(error))
  }

  return (
    <>
      <button id="modal-button" onClick={() => { requestDetails(); setIsModalOpen(true) }}>Details</button>
      <div id="myModal" className={isModalOpen ? 'modal-open' : 'modal-closed'}>
        <div className="modal-content">
          <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
          {currentIndex > 0 && <button id='modal-content-button' onClick={() => setCurrentIndex(currentIndex - 1)}>Previous</button>}
          {currentIndex < movies.length - 1 && <button id='modal-content-button' onClick={() => setCurrentIndex(currentIndex + 1)}>Next</button>}
          {movieDetails &&
            <div id='modal-content-section'>
              <div id='movie-poster'>
                <img alt='poster' src={movieDetails.Poster} width={'300px'} />
              </div>
              <div id='movie-details'>
                <p id='movie-title'>Title: {movieDetails.Title}</p>
                <div id='movie-details-columns'>
                  <div id='movie-details-column-left'>
                    <p>Year: {movieDetails.Year}</p>
                    <p>imdb ID: {movieDetails.imdbID}</p>
                    <p>Rated: {movieDetails.Rated}</p>
                    <p>Type: {movieDetails.Type}</p>
                  </div>
                  <div id='movie-details-column-right'>
                    <p>Genre: {movieDetails.Genre}</p>
                    <p>Runtime: {movieDetails.Runtime}</p>
                    <p>Director: {movieDetails.Director}</p>
                    <p>imdb Rating: {movieDetails.imdbRating}</p>
                  </div>
                </div>
                <p>Actors: {movieDetails.Actors}</p>
                <p>Plot: {movieDetails.Plot}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default ShowMovieDetailsModal