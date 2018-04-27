import React from 'react';
import { Grid, List } from 'semantic-ui-react';

const About = () => (
  <div>
    <div className="boxStyle">
      <h1>Video-<span className="mint">Weiterbildung</span> zu Autismus</h1>
      <p>AUIO.pro ist die digitale Weiterbildungsplattform zum Thema Autismus-Spektrum für alle, die professionell Verantwortung für andere Menschen übernehmen – in Schulen und Kindergärten, Firmen, sowie in Vereinen und bei sozialen Trägern.</p>
      <p>Kurzweilige Videos auf einer speziell dafür entwickelten Plattform liefern praxisorientierte Hilfestellung und Erklärungen – auch für tiefergehende Herausforderungen im beruflichen Alltag. Ein Forum im eigenen sozialen Netzwerk schafft Raum für gegenseitigen Austausch und vermittelt Kontakte vor Ort.</p>

      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <div className="paperStyle">
            <h2>Unsere Mission</h2>
            <List className="list">
              <List.Item>
                <List.Icon><i className="material-icons">cached</i></List.Icon>
                <List.Content>Wissen über Autismus verbreiten</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon><i className="material-icons">people</i></List.Icon>
                <List.Content>Menschen zusammenbringen</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon><i className="material-icons">compare_arrows</i></List.Icon>
                <List.Content>Gegenseitiges Verständnis erhöhen</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon><i className="material-icons">bubble_chart</i></List.Icon>
                <List.Content>Vorurteile und Stereotype aufbrechen</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon><i className="material-icons">extension</i></List.Icon>
                <List.Content>Selbstkompetenz steigern</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon><i className="material-icons">question_answer</i></List.Icon>
                <List.Content>Kommunikationsfähigkeiten verbessern</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon><i className="material-icons">nature_people</i></List.Icon>
                <List.Content>Lebensqualität steigern</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon><i className="material-icons">grade</i></List.Icon>
                <List.Content>Talente freischalten</List.Content>
              </List.Item>
            </List>
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <div className="paperStyle">
            <h2>Unsere Methode</h2>
            <List className="list">
              <List.Item>
                <List.Icon><i className="material-icons">video_library</i></List.Icon>
                <List.Content>Videos über Autismus</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon><i className="material-icons">thumb_up</i></List.Icon>
                <List.Content>Kurzweilig aufbereitet</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon><i className="material-icons">build</i></List.Icon>
                <List.Content>Praxisorientierte Hilfestellung</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon><i className="material-icons">pie_chart</i></List.Icon>
                <List.Content>Erklärungen</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon><i className="material-icons">format_quote</i></List.Icon>
                <List.Content>Erfahrungen und Geschichten</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon><i className="material-icons">chat</i></List.Icon>
                <List.Content>Soziales Netzwerk</List.Content>
              </List.Item>
            </List>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  </div>
);

export default About;
