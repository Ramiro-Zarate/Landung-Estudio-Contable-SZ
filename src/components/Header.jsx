import { useState } from 'react'
import styles from './Header.module.css'

export function Header(){
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)
    const closeMenu = () => setMenuOpen(false)

    return(
        <header className={styles.header}>
            <a href="#inicio" className={styles.headerLink}>
                <h1>
                    <img className={styles.logo} src="./logo_estudio.webp" alt="" />
                    Estudio Contable SZ
                </h1>
            </a>
            <nav className={`${styles.headerNav} ${menuOpen ? styles.navOpen : ''}`}>
                <a href="#inicio" onClick={closeMenu}>Inicio</a>
                <a href="#sobre-nosotros" onClick={closeMenu}>Sobre Nosotros</a>
                <a href="#servicios" onClick={closeMenu}>Servicios</a>
                <a href="#contacto" onClick={closeMenu}>Contacto</a>
                <button className={styles.mobileBtn} onClick={closeMenu}>Solicitar Consulta</button>
            </nav>
            <button className={styles.headerBtn}>Solicitar Consulta</button>
            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menú">
                <span className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ''}`}></span>
                <span className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ''}`}></span>
                <span className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ''}`}></span>
            </button>
        </header>
    )
}