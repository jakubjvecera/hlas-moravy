import { useEffect } from "react";
import "./ins.css";
export default function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="instagram-section">
        <div className="instagram-wrapper">
      <div className="container instagram-grid">

        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DVynD1tDN6q/"
          data-instgrm-version="14"
        ></blockquote>

        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DVsZjcKjEh-/"
          data-instgrm-version="14"
        ></blockquote>

        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/DVwYVjHjBG3/"
          data-instgrm-version="14"
        ></blockquote>

      </div>
      </div>
    </section>
  );
}