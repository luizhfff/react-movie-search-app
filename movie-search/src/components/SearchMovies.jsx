import React from 'react'
import axios from 'axios'

const SearchMovies = ({setResponseData}) => {

  const requestApi = (value) => {
    axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${value}&page=1&plot=full`)
    .then(data=>{
      setResponseData(data?.data?.Search)
    })
    .catch(error=>console.error(error))
  }

  return (
    <>
      <div id='title'>Search Movie: </div>
      <label htmlFor='user-input'>
        Title:
        <input id='user-input' onChange={(e)=>requestApi(e.target.value)}></input>
      </label>
    </>
  )
}

export default SearchMovies