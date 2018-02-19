import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import { Button } from 'semantic-ui-react';
import LogoBunt from '../Brand/LogoC.png';


const style = {
  fontFamily: 'Joanna Sans W01 Light',
  color: 'whitesmoke',
  boxShadow: '5px 5px 15px #4040474d',
  paddingBottom: 50
};

const buttonStyle = {
  marginTop: 10,
  background: '#34a3ae',
  color: 'white'
};

export default class ImprintFooter extends Component {
  render() {
  return(
    <div>
      <Grid verticalAlign='bottom'>
        <Grid.Column className="boxStyle" floated='left' textAlign='center' only="computer" computer={5}>
      <ResponsiveImage className="img-responsive">
        <ResponsiveImageSize
        default
        minWidth={0}
        path={LogoBunt}
        />
        <ResponsiveImageSize
        minWidth={768}
        path={LogoBunt}
        />
        <ResponsiveImageSize
        minWidth={1100}
        path={LogoBunt}
        />
      </ResponsiveImage>
      </Grid.Column>
      <Grid.Column className="boxStyle" floated='right' textAlign='center' mobile={15} tablet={15} computer={5}>
      <Link to="/"><Button style={buttonStyle} inverted color='blue' fluid>AUIO</Button></Link>
      </Grid.Column>
      </Grid>
  </div>
)};
}
