import "./NotFoundPage.css";
// @ts-ignore
import svg from "../assets/Jihomoravsky_kraj.svg";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <main>
      <section className="nf-color">
        <div className="placeholder-navbar no-select"></div>
        <div className="container nf-container">
            <div className="nf-content">
            <div>Tato stránka neexistuje, ale náš plán pro kraj je připraven!!</div>
            <Link to="/" className="button-primary navbar-cta">
                        Zpět na hlavní stránku
                      </Link>
                      <Link to="/program" className="button-primary nf-btn">
            Podívejte se na náš program
          </Link>
            </div>
            <img src={svg} alt="404 not found" className="nf-image" />
        </div>
      </section>
    </main>
  );
}