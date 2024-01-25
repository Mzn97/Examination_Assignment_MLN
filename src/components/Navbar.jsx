import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
            <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shirt-sport" width="56" height="56" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
                <path d="M10.5 11h2.5l-1.5 5" />
            </svg>

            </div>
                <Link to="/home" className="navbar-text">MLNK</Link>
                <Link to="/Home" className="navbar-item">Home</Link>
                <Link to="/about" className="navbar-item">About us</Link>
                <Link to="/products" className="navbar-item">Products</Link>
                <HamburgerMenu />
                {/* Lägg till fler länkar efter behov */}
            </nav>
        </div>
    )
}

export default Navbar;

//Lägg den här Css till en --> module.css