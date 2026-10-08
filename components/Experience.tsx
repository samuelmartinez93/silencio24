const experienceCards = [
  {
    title: "24 horas",
    text: "Una pausa completa de la comunicación oral.",
    icon: "◌",
  },
  {
    title: "Grupo reducido",
    text: "Una experiencia cercana, compartida y acompañada.",
    icon: "◎",
  },
  {
    title: "Comunicación alternativa",
    text: "Gestos, miradas, escritura y atención a los pequeños detalles.",
    icon: "✦",
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="section-shell section-soft">
      <div className="container narrow-copy">
        <p className="section-tag">La experiencia</p>
        <h2>La única regla: no hablar.</h2>
        <p>
          Durante 24 horas compartirás comidas, actividades, descanso y momentos
          cotidianos con un grupo de personas que acepta el mismo reto. Cuando sea
          necesario, podréis comunicaros mediante gestos, escritura, dibujos o
          señales acordadas.
        </p>
      </div>

      <div className="container cards-grid three-up">
        {experienceCards.map((card) => (
          <article key={card.title} className="info-card">
            <div className="card-icon" aria-hidden="true">
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
