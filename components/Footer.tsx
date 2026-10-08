import Image from "next/image";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Reservas", href: "#reservas" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand brand-lockup">
            <span className="brand-mark" aria-hidden="true">
              <Image src="/images/s24logo.webp" alt="" width={30} height={30} />
            </span>
            <span className="brand-wordmark">SILENCIO 24</span>
          </div>
          <p className="footer-copy">
            Una experiencia colectiva para descubrir qué ocurre cuando dejamos de hablar.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Enlaces del pie de página">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link footer-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-meta">
          <a href="mailto:hola@silencio24.com" className="email-link">
            hola@silencio24.com
          </a>
          <p className="legal-note">
            SILENCIO 24 no es terapia, tratamiento médico ni retiro religioso.
          </p>
          <p className="copyright">© {currentYear} SILENCIO 24</p>
        </div>
      </div>
    </footer>
  );
}
