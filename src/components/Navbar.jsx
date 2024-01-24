import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/Home" className="navbar-item">Home</Link>
            <Link to="/about" className="navbar-item">About us</Link>
            <Link to="/products" className="navbar-item">Products</Link>
            <HamburgerMenu />
            {/* Lägg till fler länkar efter behov */}
        </nav>
    )
}

export default Navbar;

//Lägg Css till en --> module.css