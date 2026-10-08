const steps = [
  {
    title: "Llegada y bienvenida",
    text: "Conoces el espacio, al grupo y las normas antes de comenzar.",
  },
  {
    title: "Empiezan las 24 horas",
    text: "Se deja atrás la voz y comienza la experiencia compartida.",
  },
  {
    title: "Comidas, paseos y actividades",
    text: "Convivencia tranquila, dinámicas de grupo y tiempo para observar.",
  },
  {
    title: "Cierre final",
    text: "Tras las 24 horas, se abre un espacio para volver a hablar y compartir lo vivido.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-shell section-soft">
      <div className="container narrow-copy">
        <p className="section-tag">Cómo funciona</p>
        <h2>Un día diseñado para que el silencio tenga sentido.</h2>
      </div>

      <div className="container timeline">
        {steps.map((step, index) => (
          <article key={step.title} className="timeline-item">
            <div className="timeline-index" aria-hidden="true">
              {index + 1}
            </div>
            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="container">
        <div className="info-callout" role="note">
          Si surge una necesidad importante, siempre habrá una persona responsable y
          formas alternativas de pedir ayuda.
        </div>
      </div>
    </section>
  );
}
