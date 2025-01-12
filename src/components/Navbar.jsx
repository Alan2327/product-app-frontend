import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar.css' // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
        <h4 style={{color:'wheat'}}>Product App</h4>
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/add-product" className="navbar-link">Add Product</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
