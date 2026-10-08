import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Reservas", href: "#reservas" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a href="#inicio" className="brand brand-lockup" aria-label="SILENCIO 24 Inicio">
          <span className="brand-mark" aria-hidden="true">
            <Image src="/images/s24logo.webp" alt="" width={30} height={30} priority />
          </span>
          <span className="brand-wordmark">SILENCIO 24</span>
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />

          <a href="#reservas" className="button button-primary nav-cta">
            Reservar mi plaza
          </a>
        </div>
      </div>
    </header>
  );
}
