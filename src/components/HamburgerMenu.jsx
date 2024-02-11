import React, { useState, useEffect, useRef } from 'react'
import styles from '../style/HamburgerMenu.module.css'

const HamburgerMenu = () => {
    // State för att hantera om menyn är öppen eller stängd
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    // useRef används för att referera till HTML-element. Här används det för att spåra menyns div
    const menuRef = useRef() 

    // Toggle-funktion för att öppna eller stänga menyn
    const toggleMenu = () => {
        setIsNavbarOpen(!isNavbarOpen)
    }

    // useEffect-hook för att lägga till logik som körs efter rendering.
    useEffect(() => {
        // Funktion för att hantera klick utanför menyn
        const handleClickOutsideMenu = (event) => {
            // Kontrollerar om klicket inte är inom menyns div
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                // Stänger menyn om klicket är utanför
                setIsNavbarOpen(false) 
            }
        }

        // Lägger till event listener för att lyssna efter mousedown händelser
        document.addEventListener('mousedown', handleClickOutsideMenu)

        // Städa upp: Tar bort event listener när komponenten inte längre visas
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMenu)
        }
    }, [menuRef]) // Dependency array: useEffect körs om menuRef ändras

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
                <a href="/ProductShoes" className={styles.menuItem}>Shoes</a>
                <a href="/ProductShirts" className={styles.menuItem}>Shirts</a>
                <a href="/ProductFootballs" className={styles.menuItem}>Footballs</a>
                <a href="/About" className={styles.menuItem}>About us</a>
            </div>
        </div>
    )
}

export default HamburgerMenu