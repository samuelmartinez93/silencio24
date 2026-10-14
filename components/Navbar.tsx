"use client";

import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Reservas", href: "#reservas" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a href="#inicio" className="brand brand-lockup" aria-label="SILENCIO 24 Inicio">
          <span className="brand-mark" aria-hidden="true">
            <Image src="/images/s24logo.webp" alt="" width={30} height={30} priority />
          </span>
          <span className="brand-wordmark">SILENCIO 24</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <div
          id="primary-navigation"
          className={`nav-content${isMenuOpen ? " is-open" : ""}`}
        >
          <nav className="main-nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <ThemeToggle />

            <a
              href="#reservas"
              className="button button-primary nav-cta"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservar mi plaza
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
