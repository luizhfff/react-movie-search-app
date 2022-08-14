import React from 'react'
import DisplaySessionTime from './DisplaySessionTime'

const Nav = () => {
  return (
    <div id='navbar'>
      <img alt='logo' id='navbar-logo' src='./reel.jpg'/>
      <DisplaySessionTime />
    </div>
  )
}

export default Nav