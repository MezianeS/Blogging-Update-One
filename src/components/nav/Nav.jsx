import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div className="container navbar__container">
        <ul className="navbar__list">
            <li className="navbar__items">Home</li>
            <li className="navbar__items">About</li>
            <li className="navbar__items">Contact</li>
            <li className="navbar__items">Articles</li>
            <li className='navbar__items'>Logout</li>
        </ul>
    </div>
  )
}

export default Nav