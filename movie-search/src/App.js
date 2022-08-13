import React, { useState } from 'react'

// Style Imports
import './style/App.css';
import './style/showMovieDetailsModal.css'

// Component Imports
import ShowMovieDetailsModal from './components/ShowMovieDetailsModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="App">
      <ShowMovieDetailsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default App;
