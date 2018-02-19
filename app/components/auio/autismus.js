import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

export default class Autismus extends Component {
  render() {
  return(
  <div>
    <div className="paperStyle" id="Autismus">
      <h1>Was ist Autismus?</h1>
      <p>Es gibt viele unterschiedliche Wege zu erklären, was Autismus ist. Das autistische Gehirn verarbeitet Wahrnehmungen etwas anders, was zu Besonderheiten führt, die manchmal von außen sichtbar sind, oft aber auch unsichtbar bleiben.</p>
      <Grid verticalAlign='middle' columns={3} centered>
        <Grid.Column mobile={16} tablet={8} computer={5}>
            <div className="paperStyle">
              <h2>Wahrnehmung</h2>
              <p>Höhere Sensibilität einzelner oder mehrerer Sinne</p>
            </div>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
            <div className="paperStyle">
              <h2>Denkweise</h2>
              <p>Stärkere Wahrnehmung von Strukturen und Mustern</p>
            </div>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
            <div className="paperStyle">
              <h2>Interaktion</h2>
              <p>Schwächen bei der intuitiven sozialen Interaktion</p>
            </div>
          </Grid.Column>
          </Grid>

      <p>Auf der Plattform werden wir einen eigenen Themenbereich einrichten, der sich dieser Frage ausführlich widmet. So können wir für unterschiedliche Wissensstände die passenden Informationen bereitstellen.</p>
    </div>
  </div>
)};
}
