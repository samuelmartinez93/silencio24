"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { TiltCard } from "./TiltCard";

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
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      const nextTheme = theme === "light" ? false : true;
      setIsDark(nextTheme);
    };

    updateTheme();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "data-theme") {
          updateTheme();
          break;
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

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
              <TiltCard key={item.title} className="feature-block">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </TiltCard>
            ))}
          </div>
        </div>

        <div className="benefits-visual">
          <div className="artwork-frame">
            <Image
              src="/images/infinite.webp"
              alt="Dos anillos luminosos entrelazados sobre un fondo violeta oscuro"
              width={800}
              height={900}
              className={`artwork-layer ${isDark ? "artwork-visible" : "artwork-hidden"}`}
            />
            <Image
              src="/images/infinitelight.webp"
              alt="Dos anillos luminosos entrelazados sobre un fondo claro"
              width={800}
              height={900}
              className={`artwork-layer ${isDark ? "artwork-hidden" : "artwork-visible"}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
