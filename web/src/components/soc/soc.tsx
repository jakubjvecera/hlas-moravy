import { Mail, Instagram } from "lucide-react";
import "./soc.css";

export default function Soc() {
  return (
    <div className="soc-links no-select">
      <a href="mailto:info@hlas-moravy.cz" aria-label="Email">
        <Mail size="2rem" />
      </a>
      <a href="https://www.instagram.com/hlasmoravy_denhejtmanem" target="_blank" rel="noopener noreferrer" aria-label="Instagramu">
        <Instagram size="2rem" />
      </a>
    </div>
  );
}