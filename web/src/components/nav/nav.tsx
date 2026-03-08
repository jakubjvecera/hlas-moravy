import { NavLink, Link } from "react-router-dom";
import "./nav.css";
// @ts-ignore
import logo from "../../assets/LogoPurple.png";

export default function Navbar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link nav-link-active" : "nav-link";

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Hlas Moravy logo" className="navbar-logo-image" />
        </Link>

        <nav className="navbar-nav">
  
          <NavLink to="/onas" className={navLinkClass}>
            O nás
          </NavLink>
            <NavLink to="/kandidati" className={navLinkClass}>
            Kandidáti
          </NavLink>
          <NavLink to="/kontakt" className={navLinkClass}>
            Kontakt
          </NavLink>

          <Link to="/program" className="button-primary navbar-cta">
            Náš program
          </Link>
        </nav>
      </div>
    </header>
  );
}