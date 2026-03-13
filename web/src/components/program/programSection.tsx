import ProgramItem from "./programItem";
import './programSection.css';
// @ts-ignore
import orange from "../../assets/orange.svg";
// @ts-ignore
import tyrkys from "../../assets/tyrkys.svg";
const programData = [
  {
    title: "Školství a pracovní příležitosti",
    text: "Náš kraj má možnost stát se technologickým centrem celé střední Evropy, již teď se v Brně vyrábí třetina elektronových mikroskopů, ale to nestačí náš kraj má na daleko více. Základem je ale vzdělání. A proto:\n • Rozšíříme kapacity gymnázií a lyceí\n • Modernizujeme vybavení škol\n • Zapojíme studenty do fungování firem. Protože praktické znalosti z oboru se ve škole jen tak nenaučí.\n • Postaráme se o to aby se náš kraj stal centrem technologických firem.\n • Podpora startupů"
  },
  {
    title: "Dostupné bydlení",
    text: "Náš kraj zaostává v poskytování bydlení svým občanům. Místo toho aby podporoval obce k poskytování bytů mladým rodinám, tak je klidně nechává dál rozprodávat byty spekulantům na realitním trhu. \n • Spolu s obcemi vytvoříme plán rozvoje bydlení\n • Vytvoříme krajský bytový fond."
  },
  {
    title: "Doprava",
    text: "Náš kraj zažívá obrovský rozvoj dopravy, ale pořád je co zlepšovat. Od starých vlaků, nedostatečného množství spojů až po nedostavěné obchvaty.\n • Zasadíme se o dostavbu obchvatů Znojma, Kuřimi, Hodonína a Břeclavi\n • Zavedeme levnější roční kupón na cestování po celém kraji hromadnou dopravou\n • Vytvoříme službu poptávkové dopravy\n • Modernizujeme vozové parky dopravních podniků\n • Zavedeme systém záchytných parkovišť v okolí Brna"
  },
  {
    title: "Nemocnice",
    text: "Posuneme zdravotnictví na novou úroveň. Ať už se jedná o modernizaci nemocnic či službu mobilního lékaře - lidé pak nebudou muset cestovat kvůli každé nemoci klidně i 20 kilometrů do nejbližší nemocnice.\n • Vyřešíme problém nedostatku praktických lékařů a zdravotnického personálu\n • Zavedeme službu mobilního lékaře\n • Modernizujeme všechny krajské nemocnice\n • Zamezíme dalšímu zavírání oddělení v nemocnicích"
  },
  {
    title: "Rozvoj regionů",
    text: "Kvůli práci či škole již se nebudete muset stěhovat pryč z vašich domovů díky tomu, že se postaráme o rozvoj všech regionů.\n •Vytvoříme zóny firemního rozvoje v okresních městech\n •Zvýšíme kvalitu vzdělání i v okrajových regionech "
  }
];

export default function ProgramSection() {
  return (
    <section className="program">
        <img className="program-background2 no-select" src={tyrkys} alt="" />
        <img className="program-background no-select" src={orange} alt="" />
        
        <div className="placeholder-navbar no-select"></div>
      <div className="container">
        <div className="program-header no-select">
          <h2 className="programsection-heading">Náš program</h2>
          <a href="/program-hlas-moravy.pdf" className="button-primary program-download-button" download>Stáhnout program v PDF</a>
        </div>
        <div className="program-grid">
          {programData.map((item) => (
            <ProgramItem
              key={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}