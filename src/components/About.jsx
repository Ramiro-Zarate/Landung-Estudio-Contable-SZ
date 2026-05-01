// components/About.jsx
import styles from './About.module.css'


const valores = [
  {
    titulo: "Confianza",
    descripcion: "Tu información es tratada con la máxima discreción y responsabilidad.",
    icono: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    titulo: "Puntualidad",
    descripcion: "Cumplimos cada vencimiento y entregamos siempre a tiempo, sin sorpresas.",
    icono: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    titulo: "Claridad",
    descripcion: "Explicamos todo en lenguaje simple para que siempre sepas cómo estás.",
    icono: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  },
  {
    titulo: "Compromiso",
    descripcion: "Nos involucramos con tu proyecto como si fuera el nuestro propio.",
    icono: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
];

const stats = [
  { num: "+20", label: "Años de experiencia" },
  { num: "+150", label: "Clientes activos" },
  { num: "100%", label: "Cumplimiento fiscal" },
  { num: "3", label: "Profesionales del equipo" },
];

export function About() {
  return (
    <section className={styles.abSection} id="sobre-nosotros">
      <span className={styles.abBadge}>Quiénes somos</span>

      <h2 className={styles.abHeading}>
        Contadores que entienden<br />
        tu <em>negocio</em>, no solo tus números
      </h2>

      <p className={styles.abIntro}>
        Somos un estudio contable con más de 20 años de experiencia acompañando
        a empresas y profesionales. Creemos que una buena contabilidad no es solo
        cumplir con las obligaciones fiscales — es la base para tomar mejores
        decisiones y crecer con confianza.
      </p>

      <div className={styles.abValores}>
        {valores.map((v) => (
          <div className={styles.abValor} key={v.titulo}>
            <div className={styles.abValorIcon}>{v.icono}</div>
            <p className={styles.abValorTitle}>{v.titulo}</p>
            <p className={styles.abValorDesc}>{v.descripcion}</p>
          </div>
        ))}
      </div>

      <div className={styles.abDivider} />

      <div className={styles.abStats}>
        {stats.map((s) => (
          <div className={styles.abStat} key={s.label}>
            <div className={styles.abStatNum}>{s.num}</div>
            <div className={styles.abStatLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}