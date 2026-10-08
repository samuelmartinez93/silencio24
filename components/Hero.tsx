const infoPills = ["Barcelona", "24 horas", "Plazas limitadas"];

export default function Hero() {
  return (
    <section id="inicio" className="hero section-shell">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">EXPERIENCIA PRESENCIAL · BARCELONA</p>
          <h1>
            24 horas. Cero palabras.
            <span>Una forma distinta de conectar.</span>
          </h1>
          <p className="lead">
            Una experiencia colectiva para convivir sin hablar, salir de la rutina y
            descubrir todo lo que comunicamos cuando las palabras desaparecen.
          </p>

          <div className="info-pills" aria-label="Detalles de la experiencia">
            {infoPills.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>

          <div className="cta-row">
            <a href="#reservas" className="button button-primary">
              Reservar mi plaza
            </a>
            <a href="#experiencia" className="button button-secondary">
              Descubrir la experiencia
            </a>
          </div>
        </div>

        <div className="hero-video-bg" aria-hidden="true" />
      </div>
    </section>
  );
}
