import React from 'react';
import { Grid, List } from 'semantic-ui-react';

const About = () => (
  <div>
    <div className="boxStyle">
      <h1>Videos über <span className="blue">Autismus</span> für alle!</h1>
      <p>Schön, dass Du dich für unser Projekt interessierst!</p>
      <p>AUIO ist eine Lernplattform für Menschen mit Autismus und deren Umfeld. Es ist unser Ziel die Lebensqualität von Menschen zu verbessern und dadurch Talente freizuschalten.</p>
      <p>Das erreichen wir, indem wir mit niedrigschwelligen Videos über Autismus aufklären und praxisorientierte Hilfestellung bei Fragen in allen Lebensbereichen liefern – Alltag, Familie, Freundschaften, Selbstkompetenz und Zukunftsplanung.</p>

      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <div className="paperStyle">
            <h2>Unsere <span className="green">Mission</span></h2>
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
            <h2>Unsere <span className="blue">Methode</span></h2>
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
            </List>
          </div>
        </Grid.Column>
      </Grid>

    </div>
  </div>
);

export default About;
