import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class Events extends Component {
  render() {
    return (
      <div className="boxStyle">
        <h1>Event mit <span className="green">AUIO</span></h1>
        <p>Wir freuen uns, bei folgenden Events im Programm zu sein.</p>

        <h2>Z2X³</h2>
        <p>Festival der neuen Visionäre<br />
          12. Mai, Hamburg / NDR Campus</p>

        <h2>EduLab.Space</h2>
        <p>The Future of Education<br />
          22. Mai, Berlin / Unicorn Co-working</p>

        <h2>Priomy-Konferenz</h2>
        <p>Neue Konzepte für neue Arbeit<br />
          15. Juni, Berlin / CRCLR</p>

        <br />
        <p>Für weitere Infos folge uns auf Facebook.</p>
        <a target="_blank" href="https://www.fb.me/auio.tv">
          <Button color="green">AUIO auf Facebook</Button>
        </a>
      </div>
    );
  }
}
