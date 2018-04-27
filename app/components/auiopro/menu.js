import React, { Component } from 'react';
import Headroom from 'react-headroom';
import { Grid } from 'semantic-ui-react';
import scrollToComponent from 'react-scroll-to-component';
import BrandAUIOpro from '../BrandPro/brand';
import MobileMenu from './menu_modal';

const style = {
  background: '#404047',
  height: 140,
  fontFamily: 'Akko W01 Bold',
  boxShadow: '5px 5px 15px #4040474d',
};


export default class MainMenu extends Component {
  render() {
    return (
      <Headroom style={style}>
        <div>
          <Grid>

            <Grid.Column mobile={12} tablet={12} computer={5}>
              <div onClick={() => scrollToComponent(document.getElementById('top'), { offset: -80, align: 'top', duration: 1500 })}>
                <BrandAUIOpro />
              </div>
            </Grid.Column>

            <Grid.Column only="computer" floated="right" computer={11}>
              <div className="menu">
                <div className="menu-list">
                  <div onClick={() => scrollToComponent(document.getElementById('contact'), { offset: -80, align: 'top', duration: 1500 })}>
                    Kontakt
                  </div>
                  <div onClick={() => scrollToComponent(document.getElementById('autismus'), { offset: -80, align: 'top', duration: 1500 })}>
                    <span className="mint">Autismus</span>
                  </div>
                  <div onClick={() => scrollToComponent(document.getElementById('about'), { offset: -80, align: 'top', duration: 1500 })}>
                    Video-Weiterbildung
                  </div>
                </div>
              </div>
            </Grid.Column>

            <Grid.Column only="tablet mobile" tablet={4} mobile={4} textAlign="right">
              <div className="menu_bar">
                <MobileMenu />
              </div>
            </Grid.Column>

          </Grid>
        </div>
      </Headroom>
    );
  }
}
