import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

const style = {
  textAlign: 'center',
};

export default class Support extends Component {
  render() {
    return (
      <div>
        <div className="paperStyle" style={style}>
          <h1>So kannst <span className="green">Du</span> uns unterstützen!</h1>
          <p>Um dieses Projekt möglichst gut zu machen und um möglichst vielen Menschen damit helfen zu können, brauchen wir Deine Unterstützung!</p>
          <Grid verticalAlign="middle" columns={3} centered>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <div className="paperStyle">
                <h2>Praktisch</h2>
                <p>Ideen, Feedback, ehrenamtliche Mitarbeit</p>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <div className="paperStyle">
                <h2>Finanziell</h2>
                <p>Startfinanzierung, Hilfe bei Förderanträgen</p>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <div className="paperStyle">
                <h2>Netzwerk</h2>
                <p>Erzähl von dem Projekt oder erzähl uns, wen wir unbedingt kennenlernen sollten.</p>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}
