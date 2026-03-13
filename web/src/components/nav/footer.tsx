import { Link } from "react-router-dom";
import "./footer.css";
import Soc from "../soc/soc";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
            <Soc />
          <div className="footer-copyright">
            <p>Vytvořeno pouze pro účely soutěže Den Hejtmanem. Nejedná se o reálnou politickou stranu.
            </p>
            <p>&copy; {new Date().getFullYear()} Hlas Moravy | Všechna práva vyhrazena</p>
          </div>
        </div>
      </div>
    </footer>
  );
}