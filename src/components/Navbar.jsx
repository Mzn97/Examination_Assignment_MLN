import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
    
    return (
        
        <div className="navbar-container">
            <nav className="navbar">
                <div className='testnav'>
                
                <Link to="/" className="navbar-text">MLNK</Link>
                <Link to="/about" className="navbar-item">About us</Link>
                <Link to="/products" className="navbar-item">Products</Link>
                
                <div className="navbar-container cart-container">
                    <Link to="/ShoppingCart" className="navbar-cart">
                    <span className="navbar-item">Shopping Cart</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="30" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M17 17h-11v-14h-2" />
                            <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                    </Link>
                </div>
                </div>
                <HamburgerMenu />

            </nav>
        </div>
    )
}

export default Navbar;
