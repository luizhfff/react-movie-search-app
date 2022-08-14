import React, { useState } from 'react'
import './style/App.css';

import SearchMovies from './components/SearchMovies';
import ListMovies from './components/ListMovies';
import Nav from './components/Nav';

const App = () => {
  const [responseData, setResponseData] = useState()

  return (
    <div className="App">
      <Nav />
      <SearchMovies setResponseData={setResponseData}/>
      <ListMovies movies={responseData}/>
    </div>
  );
}

export default App;
