import { useState } from "react";
import "./hero.css";
import { Link } from "react-router-dom";
// @ts-ignore
import heroimage from "../../assets/kwunawxv.jpg";
import Soc from "../soc/soc";
import InstagramFeed from "./ins";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  const youtubeVideoId = "U1HTLBF5dx8";

  return (
    <section className="hero">
      <div className="placeholder-navbar no-select"></div>
      <div className="container hero-inner">
        
        <div className="hero-content">
          <h1 className="hero-title">Morava, kde má smysl žít.</h1>

          <Soc />

          <div className="hero-video-shell no-select">
            {!isPlaying ? (
              <button
                type="button"
                className="hero-video-cover"
                onClick={() => setIsPlaying(true)}
                aria-label="Přehrát volební klip"
              >
                <img
                  src={heroimage}
                  alt="Náhled volebního klipu"
                  className="hero-video-poster"
                />

                <div className="hero-video-overlay"></div>

                <div className="hero-play-button">
                  <span className="hero-play-icon">▶</span>
                </div>

                <div className="hero-video-caption">
                  Pustit volební klip
                </div>
              </button>
            ) : (
              <div className="hero-video-player">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="Volební klip"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            )}
          </div>
          <div className="hero-bottom no-select">
            <Link to="/program" className="button-primary navbar-cta">
                        Náš program
            </Link>
            <div><InstagramFeed /></div>
            
          </div>
        </div>
      </div>
    </section>
  );
}