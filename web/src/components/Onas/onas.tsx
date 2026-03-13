import { Link } from "react-router-dom";
import "./onas.css";
import Kandidat from "../../kandidat/kandidat";
export default function Onas() {
  return (
    <section className="onas">
        <div className="placeholder-navbar"></div>
      <div className="container">
        <div className="onas-kandidati">¨
            <Kandidat name="Jan Valoušek" text="Jsem Jan Valoušek, pocházím z Miroslavi a právě studuji na Gymnáziu Brno-Řečkovice. Zároveň jsem předsedou strany Hlas Moravy. Ve volném čase dělám judo a plavání. Chci se zaměřit zejména na pracovní a studijní možností mladých v našem kraji." source="IMG_20260308_151719238.png" description="kandidát na hejtmana" />           
            <Kandidat name="Tomáš Javorský" text="Jsem Tomáš Javorský, pocházím ze Znojma a studuji na GPOA ve Znojmě. Ve volném čase peču nebo dělám Judo. " source="Untitled.png" description="kandidát do KZ" />
            <Kandidat name="Jan Lorenčík" text="Jmenuji se Jan Lorenčík a pocházím z Brna, kde žiji od svého narození. V součastnosti studuji Gymnázium v Brně-Řečkovicích. Rád se věnuji bojovým sportům, lezení a učení se jazykům. Pokusím se zaměřit na rozvoj spravedlivých pracovních příležitostí." source="1000027174.png" description="kandidát do KZ" />
        </div>
        
        <div className="onas-content">
           <div> Naše hnutí se skládá z lidí s vizí, jak zlepšit náš kraj a jak ho posunout dopředu. Zaměříme se na naši budoucnost. Vytvoříme vhodné prostředí pro rozvoj lokálních i nadnárodních firem, zkvalitníme studium a přístup k praxi na krajských školách, podpoříme mladé rodiny v bytové krizi. To vše, abychom udrželi šikovné a vzdělané moraváky v kraji.
          </div>
          <Link to="/program" className="button-primary navbar-cta onas-btn">
            Náš program
          </Link>
          </div>

      </div>
    </section>
  );
}