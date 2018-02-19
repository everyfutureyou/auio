import React, { Component } from 'react';
import Headroom from 'react-headroom';
import { Grid, Image, Icon } from 'semantic-ui-react';
import scrollToComponent from 'react-scroll-to-component';
import { Link } from 'react-router-dom';
import BrandAUIO from '../Brand/brand';

const style = {
  background:'#404047',
  height:140,
  fontFamily: 'Akko W01 Bold',
  boxShadow: '5px 5px 15px #4040474d'
};


export default class ImprintMenu extends Component {
  render() {
    return (
    <Headroom style={style}>
      <div>
      <Grid>
        <Grid.Column mobile={12} tablet={12} computer={12}>
          <div>
            <Link to='/'><BrandAUIO/></Link>
          </div>
        </Grid.Column>
        <Grid.Column tablet={4} mobile={4} computer={4} textAlign='right'>
           <div className="menu_bar">
             <Link to='/'><Icon name='home' size='big' fitted /></Link>
           </div>
         </Grid.Column>

      </Grid>
      </div>
    </Headroom>
    );
  }
}
