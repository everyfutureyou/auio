import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';
import LogoBunt from '../BrandPro/LogoPro.svg';

const style = { // unused
  fontFamily: 'Joanna Sans W01 Light',
  color: 'whitesmoke',
  boxShadow: '5px 5px 15px #4040474d',
  paddingBottom: 50,
};

const Hstyle = { // unused
  fontFamily: 'Akko Rounded W01 Bold',
};

const buttonStyle = {
  marginTop: 10,
  background: '#0DB68B',
  border: '0',
  color: 'white',
};

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Grid verticalAlign="bottom">
          <Grid.Column className="boxStyle" floated="left" textAlign="center" only="computer" computer={5}>
            <img src={LogoBunt} className="img-responsive" alt="" />
          </Grid.Column>
          <Grid.Column className="boxStyle" floated="right" textAlign="center" mobile={15} tablet={15} computer={5}>
            <Link to="/impressum"><Button inverted color="blue" fluid>Datenschutzrichtlinie</Button></Link>
            <Link to="/impressum"><Button style={buttonStyle} inverted color="blue" fluid>Impressum</Button></Link>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
