import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';

export default class Events extends Component {
  render() {
    return (
      <div className="boxStyle">
        <div className="paperStyle" id="Autismus">
        <h1>Kalender</h1>
        <p>Wir freuen uns, bei folgenden Events im Programm zu sein.</p>
          <Grid verticalAlign="middle" columns={3} centered>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <div className="paperStyle">
              <h2>Z2X³</h2>
              <p>Festival der neuen Visionäre<br />
                12. Mai, Hamburg<br />
                NDR Campus<br />
                <a target="_blank" href="https://z2x.zeit.de/">
                  <i className="material-icons">explore</i>
                </a>
              </p>

              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <div className="paperStyle">
              <h2>EduLab.Space</h2>
              <p>The Future of Education<br />
                22. Mai, Berlin<br />
                Unicorn Co-working<br />
                <a target="_blank" href="https://www.edulab.space/">
                  <i className="material-icons">explore</i>
                </a>
              </p>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <div className="paperStyle">
                <h2>Priomy-Konferenz</h2>
                <p>Neue Konzepte für neue Arbeit<br />
                15. Juni, Berlin<br />
                CRCLR<br />
                <a target="_blank" href="https://priomy.events/">
                  <i className="material-icons">explore</i>
                </a>
              </p>
              </div>
            </Grid.Column>
          </Grid>
          <p>Für weitere Infos folge uns auf Facebook.</p>
          <a target="_blank" href="https://www.fb.me/auio.tv">
            <Button color="green">AUIO auf Facebook</Button>
          </a>
        </div>
      </div>
    );
  }
}
