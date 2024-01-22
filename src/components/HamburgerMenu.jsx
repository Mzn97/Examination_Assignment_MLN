import React, { useState } from 'react'
import styles from './HamburgerMenu.module.css'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div>
            <button onClick={toggleMenu} className={styles.menuButton}>
                {/* {lägg in en hamburger ikon/eventuellt göra en CSS animation??} */}
                <span>Hamburgar Meny</span>
            </button>

            <div className={isOpen ? `${styles.menuContainer} ${styles.menuContainerOpen}` : styles.menuContainer}>
                {/* här kan man lägga fler meny länkar, samma som under */}
                <a href="#" className={styles.menuItem}>Shoes</a>
                <a href="#" className={styles.menuItem}>Shirts</a>
                <a href="#" className={styles.menuItem}>Footballs</a>
            </div>
        </div>
    );
}

export default HamburgerMenu