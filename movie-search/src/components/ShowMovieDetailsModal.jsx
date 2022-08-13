import React from 'react'

const ShowMovieDetailsModal = ({ isModalOpen, setIsModalOpen }) => {

  return (
    <>
      <button id="modal-button" onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <div id="myModal" class={isModalOpen ? 'modal-open' : 'modal-closed'}>
        <div class="modal-content">
          <span class="close" onClick={() => setIsModalOpen(false)}>&times;</span>
          <p>Content</p>
        </div>
      </div>
    </>
  )
}

export default ShowMovieDetailsModal