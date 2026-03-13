import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./nav.css";
// @ts-ignore
import logo from "../../assets/LogoPurple.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link nav-link-active" : "nav-link";

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar no-select">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Hlas Moravy logo" className="navbar-logo-image" />
        </Link>

        <button
          className={`navbar-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-nav ${menuOpen ? "navbar-nav-open" : ""}`}>
          <NavLink to="/onas" className={navLinkClass} onClick={closeMenu}>
            O nás
          </NavLink>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9YyJVs1kbqKY8Ql58cgCUwP0TClG1w0sUtz7qxPZrIpOyrA/viewform" className="nav-link" onClick={closeMenu}>
            Chci být v obraze
          </a>

          <Link to="/program" className="button-primary navbar-cta" onClick={closeMenu}>
            Náš program
          </Link>
        </nav>
      </div>
    </header>
  );
}