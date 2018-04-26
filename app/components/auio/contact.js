import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

export default class Contact extends Component {
  render() {
    return (
      <div id="Contact">

        <div className="paperStyle">
          <h1>Kontakt</h1>
          <p>Du kannst uns anrufen oder eine Email schreiben. Wenn Du dieses Projekt spannend findest, freuen wir uns, Dich kennenzulernen!</p>
          <List>
            <List.Item>
              <List.Icon><i className="material-icons">accessibility</i></List.Icon>
              <List.Content>Dein Ansprechpartner: Jan-Frederik Metje</List.Content>
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
          <p>Du kannst auch einen Termin ausmachen und uns hier besuchen kommen:</p>
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

      </div>
    );
  }
}
