const audienceYes = [
  "Te apetece probar una experiencia diferente.",
  "Quieres desconectar de la rutina.",
  "Te interesa observar cómo te comunicas.",
  "Estás dispuesto a respetar una regla común.",
];

const audienceNo = [
  "Buscas una terapia o tratamiento.",
  "Esperas un retiro religioso.",
  "No te apetecen las actividades grupales.",
  "No puedes comprometerte con las 24 horas.",
];

export default function Audience() {
  return (
    <section className="section-shell">
      <div className="container narrow-copy">
        <p className="section-tag">Para quién es</p>
        <h2>No necesitas saber estar en silencio. Solo tener curiosidad.</h2>
      </div>

      <div className="container audience-grid">
        <article className="audience-card audience-card-yes">
          <h3>Es para ti si…</h3>
          <ul>
            {audienceYes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="audience-card audience-card-no">
          <h3>Quizá no sea para ti si…</h3>
          <ul>
            {audienceNo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
