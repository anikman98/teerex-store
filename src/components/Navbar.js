// import React from 'react'

import { Link } from "react-router-dom"
import '../css/Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
          <h1>TeeRex</h1>
          <div className="navbar-menu">
              <Link to="/" className="navbar-menu-link">Products</Link>
              <Link to="/cart" className="navbar-menu-link">
                  Cart
                  <div className="cart-badge">
                      <span>0</span>    
                  </div>
              </Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar