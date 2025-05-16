// src/pages/Home.jsx
import React, { useState } from "react";


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openImage = () => setIsModalOpen(true);
  const closeImage = () => setIsModalOpen(false);

  return (
    <>
    <div id="wrapper">

      <section className="main__container">
        <h1 className="home__heading">VELKOMMEN</h1>

        <article className="home-container">
          <img
            className="home__image"
            src="/Billeder/Fotos/57325198_2075682595883031_8842221344629194752_n.jpg"
            alt="Børnelejren"
            onClick={openImage}
            style={{
              width: "100%",
              height: "auto",
              cursor: "pointer",
              borderRadius: "8px",
            }}
          />

          <p>
            Børnelejren på Langeland er en forening, der udelukkende har til formål at sende
            dårligt stillede børn og unge sammen med deres pædagoger på et ophold i landlige
            omgivelser på det naturskønne Sydlangeland.
            <br /><br />
            Der er mange børn i verden, der ikke har det så godt, som de burde have det. Det gælder
            desværre også i Danmark. Der er børn med medfødte handicap, børn der er blevet alvorligt
            syge, børn der lider under omsorgssvigt eller bliver udsat for overgreb, børn der er
            tvangsfjernet fra deres hjem og familie, børn der vokser op i meget fattige familier –
            vi kender nok alle sammen et barn, der tilhører en af disse grupper, og det er disse
            børn, vi gerne vil gøre noget for.
          </p>
        </article>

        <article className="home-header">
          <p>
            Meningen med lejrene er, at give børnene et ophold på vores gamle bondegård med fokus på
            fællesskab, natur, kultur og gode fælles oplevelser, da mange af børnene er fattige på
            oplevelser. For nogle af børnene er opholdet det tætteste de kommer på en ferie, da de
            ikke kommer på ferie med deres egne familier, ofte pga. få ressourcer i familien, både
            menneskelige og økonomiske. Ligeledes betyder det noget for det sociale liv og
            sammenhold, at de har fælles oplevelser at kunne referere til. Personalet kan med deres
            faglighed og kendskab til børnene og de unge tilbyde andre aktiviteter end de vil få i
            hjemmet, da forældrene ofte er voldsom presset og det vil være et dejligt afbræk fra
            hverdagen for børnene, at få et ophold på Søgård Hovedgård.
            <br /><br />
            Desuden skulle børnene gerne komme hjem fyldt af glade minder og gode oplevelser, som
            gerne skulle give dem det overskud, der skal til, for at komme helskindet gennem deres
            ofte lidt triste hverdag. Mange af dem knytter bånd og venskaber under lejrene, der
            gerne skulle give dem et nyt netværk til støtte i fremtiden.
            <br /><br />
            Foreningen Børnelejren på Langeland samler penge ind fra erhvervslivet, fonde og private
            til at sende dårligt stillede børn på et velfortjent lejrophold på Søgård.
          </p>

          <div style={{ marginTop: "2rem" }}>
            <a
              href="https://www.lejren.dk/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#d0000b",
                color: "white",
                padding: "1rem 2rem",
                textDecoration: "none",
                display: "inline-block",
                borderRadius: "4px",
                fontWeight: "bold",
                fontFamily: "Urbanist",
              }}
            >
              Se mere
            </a>
          </div>
        </article>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeImage}>
          <img
            src="/Billeder/Fotos/57325198_2075682595883031_8842221344629194752_n.jpg"
            alt="Fullscreen Børnelejren"
            className="modal__image"
          />
        </div>
      )}
      </div>
    </>
  );
};

export default Home;
