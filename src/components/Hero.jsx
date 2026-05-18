import styles from './Hero.module.css'

export function Hero(){
    return(
        <section className={styles.hero} id="inicio">
            <div className={styles.heroContent}>
                <div className={styles.heroBadge}>estudio contable jurídico</div>
                <h2 className={styles.heroTitle}>
                    Soluciones contables para empresas y profesionales
                </h2>
                <p className={styles.heroDesc}>
                    Asesoramiento contable, impositivo y financiero
                    para empresas y profesionales.
                </p>
                <button className={styles.heroBtn}>Conocer Más</button>
            </div>
        </section>
    )
}