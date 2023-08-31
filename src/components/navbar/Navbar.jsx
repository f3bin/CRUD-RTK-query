import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <ul>
          <li><Link to="/active">Active Users</Link></li>
          <li><Link to="/non-active">Non-Active Users</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
