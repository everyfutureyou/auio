import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const buttonStyle = {
  marginTop: 10,
  background: '#0DB68B',
  color: 'white',
};

export default class Contact extends Component {
  render() {
    return (
      <div id="Contact">

        <div className="paperStyle">
          <h1>Kontakt</h1>
          <p>Sie können uns anrufen oder eine Email schreiben. Wenn Sie dieses Projekt spannend finden, freuen wir uns, Sie kennenzulernen!</p>
          <List>
            <List.Item>
              <List.Icon><i className="material-icons">accessibility</i></List.Icon>
              <List.Content>Ihr Ansprechpartner: Jan-Frederik Metje</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon><i className="material-icons">call</i></List.Icon>
              <List.Content>
                <a href="tel:+4917670390887">+49 176 / 70 39 08 87</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon><i className="material-icons">email</i></List.Icon>
              <List.Content>
                <a href="mailto:hallo@auio.tv">hallo@auio.tv</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon><i className="material-icons">dashboard</i></List.Icon>
              <List.Content>
                <a href="http://fb.me/auio.tv" target="_blank">facebook.com/auio.tv</a>
              </List.Content>
            </List.Item>
          </List>
        </div>

        <div className="paperStyle">
          <h2>Vor Ort in Kreuzberg</h2>
          <p>Sie können auch einen Termin ausmachen und uns hier besuchen kommen:</p>
          <List>
            <List.Item>
              <List.Icon><i className="material-icons">home</i></List.Icon>
              <List.Content>
                <p>AUIO<br />
                  c/o Diversicon<br />
                  Oranienstraße 183<br />
                  (3. Hinterhof, Aufgang C)<br />
                  10999 Berlin-Kreuzberg
                </p>
              </List.Content>
            </List.Item>
          </List>
        </div>
        <div className="paperStyle">
          <h2>AUIO für alle</h2>
          <p>Mit AUIO.tv klären wir die Öffentlichkeit über Autismus auf. Autistische Menschen und deren Freunde und Familie können durch niedrigschwellige Videos lernen, sich gegenseitig besser zu verstehen.</p>
          <Link to="/"><Button style={buttonStyle}>Zu AUIO.tv</Button></Link>
        </div>

      </div>
    );
  }
}
