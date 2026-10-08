import Image from "next/image";

const benefits = [
  {
    title: "Convivir de otra manera",
    text: "Compartirás momentos cotidianos sin depender de una conversación constante.",
  },
  {
    title: "Descubrir nuevas señales",
    text: "Gestos, miradas, ritmos y pequeños detalles pasan a tener más importancia.",
  },
  {
    title: "Salir de la rutina",
    text: "Durante un día, cambiarás el ritmo habitual por una experiencia distinta y memorable.",
  },
];

export default function Benefits() {
  return (
    <section className="section-shell">
      <div className="container benefits-layout">
        <div className="benefits-copy">
          <p className="section-tag">Qué vas a vivir</p>
          <h2>Menos ruido. Más presencia.</h2>
          <p className="intro">
            Un día para cambiar la velocidad habitual y prestar atención a aquello que
            normalmente pasa desapercibido.
          </p>

          <div className="stacked-list">
            {benefits.map((item) => (
              <article key={item.title} className="feature-block">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="benefits-visual" aria-label="Placeholder visual abstracto de la experiencia">
          <div className="artwork-frame">
            {/* TODO: Reemplazar por una imagen editorial real o una composición editorial del evento. */}
            <Image
              src="/images/hero-abstract.svg"
              alt="Visual abstracta inspirada en silencio y conexión"
              width={800}
              height={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
