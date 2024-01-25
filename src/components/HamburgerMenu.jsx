import React, { useState, useEffect, useRef } from 'react'
import styles from '../style/HamburgerMenu.module.css'

const HamburgerMenu = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
    // Skapa en ref för att hänvisa till menyn
    const menuRef = useRef() 

    const toggleMenu = () => {
        setIsNavbarOpen(!isNavbarOpen)
    }

    // Kollar om menyn finns, kontrollera vart användaren klickar, stäng menyn om klick sker utanför menyn.
    useEffect(() => {
        const handleClickOutsideMenu = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                // Stäng menyn om klicket sker utanför (Det blir false)
                setIsNavbarOpen(false) 
            }
        }

        // Lägg till event listener som hanterar klicket utanför menyn
        document.addEventListener('mousedown', handleClickOutsideMenu)

        // Städa upp event listener, tar bort handleClickOutsideMenu event listener från document
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMenu)
        }
    }, [menuRef])

    return (
        <div ref={menuRef}>
            <div className={styles.hamburgerMenuContainer} ref={menuRef}>
                <button onClick={toggleMenu} className={styles.menuButton}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
                </button>
            </div>

            <div className={isNavbarOpen ? `${styles.menuContainer} ${styles.menuContainerOpen}` : styles.menuContainer}>
                {/* här kan man lägga fler meny länkar, samma som under, lägga in efter navbar vid liten skärm? */}
                <a href="/ProductShoes" className={styles.menuItem}>Shoes</a>
                <a href="/ProductShirts" className={styles.menuItem}>Shirts</a>
                <a href="/ProductFootballs" className={styles.menuItem}>Footballs</a>
            </div>
        </div>
    )
}

export default HamburgerMenu