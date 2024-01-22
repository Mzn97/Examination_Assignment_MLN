import React, { useState } from 'react'
import styles from './HamburgerMenu.module.css'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div>
            <button onClick={toggleMenu} className="menu-button">
                {/* SVG-ikonen här */}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
            </button>

            <div className={isOpen ? `${styles.menuContainer} ${styles.menuContainerOpen}` : styles.menuContainer}>
                {/* här kan man lägga fler meny länkar, samma som under, lägga in efter navbar vid liten skärm? */}
                <a href="#" className={styles.menuItem}>Shoes</a>
                <a href="#" className={styles.menuItem}>Shirts</a>
                <a href="#" className={styles.menuItem}>Footballs</a>
            </div>
        </div>
    );
}

export default HamburgerMenu