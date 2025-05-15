// src/pages/Thanks.jsx
import React from "react";


const sponsors = [
  "2025 Aage og Johanne Louis-Hansens Fond kr. 20.000",
  "2024 Civilingeniør H.C. Bechgaard og hustru Ella Mary Bechgaards Fond kr. 100.000",
  "2024 Medarbejdernes Honorarfond i Novo Gruppen kr. 25.000",
  "2024 Otto Bruuns Fond kr. 60.000",
  "2023 Aage og Johanne Louis-Hansens Fond kr. 20.000",
  "2022 Ingemann Graphics kr. 10.000",
  "2021 Otto Bruuns Fond kr. 60.000",
  "2020 Nykredits Fond kr. 50.000",
  "2020 Civilingeniør H.C. Bechgaard og hustru Ella Mary Bechgaards Fond kr. 125.000",
  "2019 Medarbejdernes Honorarfond i Novo Gruppen kr. 30.000",
  "2018 Knud og Dagny Gad Andresens Fond kr. 100.000",
  "2017 Eiland Elinstallation A/S",
  "2016 Otto Bruuns Fond kr. 40.000",
  "2015 Arbejdsmarkedets Feriefond kr. 250.000",
  "2014 TrygFonden kr. 65.000 til etablering af flugtvejstrapper",
  "2013 Otto Bruuns Fond kr. 40.000",
  "2012 Medarbejdernes Honorarfond i Novo Gruppen kr. 19.000",
  "2011 Medarbejdernes Honorarfond i Novo Gruppen kr. 15.000",
  "2010 Otto Bruuns Fond kr. 40.000",
  "2008 Medarbejdernes Honorarfond i Novo Gruppen kr. 10.000",
  "2006 Medarbejdernes Honorarfond i Novo Gruppen kr. 10.000"
];

const Thanks = () => {
  return (
    <section className="thanks-container">
      <div className="takker__image-wrapper">
        
        <img
          src="Billeder/Fotos/252.jpg"
          alt="Børn på lejr"
          className="takker__image"
        />
        
        
        <h1 className="takker__heading">Børnelejren Takker</h1>
        
      </div>

      <p className="takker__text">
        Børnelejren på Langeland takker alle,<br></br> der på den ene eller anden måde har støttet
        foreningens arbejde med at sende dårligt<br></br> stillede børn på et ophold på Søgård
        Hovedgård — det være sig ved naturaliesponsorater,<br></br> økonomisk støtte fra
        støttemedlemmer, virksomhedssponsorer og donationer fra fonde.
      </p>

      <h2 className="takker__info">En særlig tak til:</h2>

      <ul className="takker__list">
        {sponsors.map((item, index) => (
          <li key={index} style={{ "--delay": index }}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Thanks;
