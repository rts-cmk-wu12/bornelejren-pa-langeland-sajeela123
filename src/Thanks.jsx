// src/pages/Thanks.jsx
import React from "react";

const Thanks = () => {
  return (
    <section className="thanks-container">
      <h1>Børnelejren Takker</h1>
      <p>
        Børnelejren på Langeland takker alle, der på den ene eller anden måde har støttet
        foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård
        Hovedgård — det være sig ved naturaliesponsorater, økonomisk støtte fra
        støttemedlemmer, virksomhedssponsorer og donationer fra fonde.
      </p>

      <ul>
        <li>Sponsor A/S</li>
        <li>Fonden for Glade Børn</li>
        <li>XYZ Firma</li>
        {/* You can later dynamically load this list */}
      </ul>
    </section>
  );
};

export default Thanks;
