import React, { Component } from 'react';

export default class Who extends Component {
  render() {
    return (
      <div className="boxStyle">
        <h1>Unsere <span className="green">Videos</span> sind für Dich!</h1>
        <p>Kommunikation funktioniert nur zu zweit. Wir werden deshalb alle Inhalte auch für neurotypische Menschen aufbereiten. Gemeinsam können wir so richtig coole Sachen erreichen, wenn wir die ein oder andere Selbstverständlichkeit hinterfragen und nochmal mit neuer Frische auf Menschen zugehen.</p>

        <h2>Autist*innen</h2>
        <p>Also alle Menschen im Autismus-Spektrum: Asperger, Kanner oder autistische Züge.</p>

        <h2>Freunde und Familie</h2>
        <p>Beziehungen, Bekanntschaften, Eltern, Geschwister usw.</p>

        <h2>Wegbegleiter</h2>
        <p>in Schule, Ausbildung, Studium und Beruf.</p>

        <h2>AUIO.pro – Profis & Neugierige</h2>
        <p>Menschen, die professionell Verantwortung für Andere übernehmen.</p>
      </div>
    );
  }
}
