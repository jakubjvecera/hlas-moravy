import { Link } from "react-router-dom";
import "./hero.css";
// @ts-ignore
import heroimage from "../../assets/kwunawxv.jpg";

export default function Hero() {
  return (
    <section className="hero">
        <div className="placeholder-navbar"></div>
      <div className="container hero-inner">
        
        <div className="hero-content">
          <h1 className="hero-title">
            Morava, kde má smysl žít.
          </h1>
          <img
        src={heroimage}      alt="Morava"
            className="hero-image"
          />
          </div>
      </div>
    </section>
  );
}