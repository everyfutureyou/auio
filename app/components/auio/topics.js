import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Brain from '../../media/brain.png';
import People from '../../media/people.png';
import Birds from '../../media/birds.png';
import Self from '../../media/self.png';
import Rocket from '../../media/rocket.png';
import Plate from '../../media/plate.png';

export default class Topics extends Component {
  render() {
    return (
      <div>
        <div className="boxStyle">
          <h1>Themen</h1>
          <p>Wir haben schon einen großen Katalog, wie diese Kategorien mit Inhalt gefüllt werden können. Wir sind auch neugierig, welche Themen Dir einfallen! Schreib uns doch eine Nachricht.</p>
        </div>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={8} verticalAlign="middle">
            <div className="DarkPaperStyle">
              <img src={Brain} alt="" />
              <h2>Autismus allgemein</h2>
              <p>Diagnosekriterien, Spezialinteressen, Stärken und weitere Besonderheiten</p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8} verticalAlign="middle">
            <div className="DarkPaperStyle">
              <img src={People} alt="" />
              <h2>Freundschaft</h2>
              <p>Wie kann ich meine sozialen Kontakte verbessern?</p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8} verticalAlign="middle">
            <div className="DarkPaperStyle">
              <img src={Birds} alt="" />
              <h2>Familie</h2>
              <p>Wie können wir als Familie mit dem Autismus umgehen?</p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8} verticalAlign="middle">
            <div className="DarkPaperStyle">
              <img src={Self} alt="" />
              <h2>Selbstkompetenz</h2>
              <p>Wie kann ich lernen, mich selbst besser einzuschätzen?</p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8} verticalAlign="middle">
            <div className="DarkPaperStyle">
              <img src={Rocket} alt="" />
              <h2>Zukunftsplanung</h2>
              <p>Wie finde ich meinen Weg in Schule, Studium, Ausbildung und Beruf?</p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8} verticalAlign="middle">
            <div className="DarkPaperStyle">
              <img src={Plate} alt="" />
              <h2>Alltag</h2>
              <p>Ernährung, Wohnen, Straßenverkehr, Gesundheit</p>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
