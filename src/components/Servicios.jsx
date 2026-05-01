// components/Servicios.jsx
import syles from './Servicios.module.css'

const servicios = [
  {
    titulo: "Contabilidad General",
    descripcion: "Registro y seguimiento de todas tus operaciones contables con precisión y orden.",
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    titulo: "Liquidación de Impuestos",
    descripcion: "Gestión de IVA, Ganancias, Bienes Personales y todos los tributos nacionales y provinciales.",
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    titulo: "Liquidación de Sueldos",
    descripcion: "Liquidaciones mensuales, aguinaldos, vacaciones y cargas sociales al día.",
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    titulo: "Asesoramiento Fiscal",
    descripcion: "Planificación tributaria para optimizar la carga impositiva de tu empresa legalmente.",
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    titulo: "Auditoría Contable",
    descripcion: "Revisión exhaustiva de estados financieros para garantizar transparencia y confiabilidad.",
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    titulo: "Constitución de Empresas",
    descripcion: "Apertura de sociedades, trámites ante organismos y asesoramiento jurídico-contable.",
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
];

export function Servicios() {
  return (
    <section className={syles.serviciosSection} id="servicios">
      <span className={syles.badgeServicios}>Nuestros Servicios</span>
      <h2>Todo lo que tu empresa<br />necesita, en un solo lugar</h2>
      <p className={syles.svSub}>
        Brindamos soluciones contables y fiscales integrales para que puedas
        enfocarte en hacer crecer tu negocio.
      </p>

      <div className={syles.svGrid}>
        {servicios.map((s) => (
          <div className={syles.svCard} key={s.titulo}>
            <div className={syles.svIconWrap}>{s.icono}</div>
            <p className={syles.svCardTitle}>{s.titulo}</p>
            <p className={syles.svCardDesc}>{s.descripcion}</p>
            <div className={syles.svAccentBar} />
          </div>
        ))}
      </div>
    </section>
  );
}