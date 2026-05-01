import styles from './Hero.module.css'

export function Hero(){
    return(
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h2 className={styles.heroTitle}>
                    Bienvenido a Estudio Contable SZ, tu socio confiable para soluciones contables y financieras.
                </h2>
                <p className={styles.heroDesc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere omnis quaerat consequuntur obcaecati incidunt voluptates dolor, voluptatem temporibus ut natus accusantium placeat deserunt possimus dignissimos laboriosam beatae corrupti. Earum, sequi.
                </p>
                <button className={styles.heroBtn}>Conocer Más</button>
            </div>
        </section>
    )
}