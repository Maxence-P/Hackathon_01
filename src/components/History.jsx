import React from "react";
import "./History.css";

function History() {
  return (
    <div className="page-wrapper">
      <header>
        <h1>
          <i className="fas fa-brain"></i> History of Antiquity
        </h1>
        <h2>
          <i className="fas fa-user"></i>
          Antiquity begins in the 4th millennium BC. The date usually taken to
          indicate the end of antiquity in the European and Mediterranean
          civilization, and therefore the beginning of the Middle Age, is the
          fall of the Western Romans, marked by the deposition of Emperor of the
          West Romulus Augustule in 476. It is the first period of history; it
          comes after Prehistory and precedes the Middle Ages. It is generally
          delimited by the invention of writing, about 3,500 BC, and the fall of
          the Roman Empire, in 476.
        </h2>
      </header>

      <main id="chronology">
        <article className="timeline">
          <div className="time-block">
            <h3> - 3500 Invention of writing in Mesopotamia</h3>
            <p>
              The earliest forms of writing were drawn symbols engraved on clay
              tablets
            </p>
          </div>
        </article>

        <article className="timeline">
          <div className="time-block">
            <h3>
              {" "}
              -3500 The first great civilizations develop in the Middle East
            </h3>
          </div>
        </article>

        <article className="timeline">
          <div className="time-block">
            <h3> -1200 Invention of the alphabet by the Phoenicians</h3>
          </div>
        </article>

        <article className="timeline">
          <div className="time-block">
            <h3>
              -776 Les premiers jeux olympiques antiques se déroulent à Olympie,
              en Grèce
            </h3>
          </div>
        </article>

        <article className="timeline">
          <div className="time-block">
            <h3>
              -52 Vercingetorix lays his arms at the feet of Julius Caesar
            </h3>
            <p>Conquête de la Gaule par les légions romaines</p>
          </div>
        </article>

        <article className="timeline">
          <div className="time-block">
            <h3>0 Naissance de Jésus-Christ (-6 ? - 4 ?)</h3>
          </div>
        </article>

        <article className="timeline">
          <div className="time-block">
            <h3>
              406 Beginning of the barbarian invasions (Alamans, Burgundians,
              Vandals, Franks ...) in Roman Gaul
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </article>

        <article className="timeline">
          <div className="time-block">
            <h3>
              476 End of the Western Roman Empire End of the Western Roman
              Empire
            </h3>
          </div>
        </article>
      </main>
    </div>
  );
}

export default History;
