import React from 'react'
import {
    Link
  } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <button><Link to='/'>Home</Link></button>
      <button><Link to='/dragons'>Dragons</Link></button>
      <button><Link to='/missions'>Missions</Link></button>
    </div>
  )
}

export default NavBar
