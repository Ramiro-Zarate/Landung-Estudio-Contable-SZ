import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.header}>
            <a href="" className={styles.headerLink}>
                <h1>
                    <img className={styles.logo} src="../src/assets/logo.png" alt="" />
                    Estudio Contable SZ
                </h1>
            </a>
            <nav className={styles.headerNav}>
                <a href="#inicio">Inicio</a>
                <a href="#sobre-nosotros">Sobre Nosotros</a>
                <a href="#servicios">Servicios</a>
                <a href="#contacto">Contacto</a>
            </nav>
            <button>
                Solicitar Consulta
            </button>
        </header>
    )
}