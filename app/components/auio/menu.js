import React, { Component } from 'react';
import Headroom from 'react-headroom';
import BrandAUIO from '../Brand/brand';
import { Menu } from 'semantic-ui-react';

const style = {
  background:'#404047',
  height:140,
  fontFamily: 'Akko W01 Bold',
  boxShadow: '5px 5px 15px #4040474d'
};

const linkStyle = {
  color: 'white'
}

export default class MainMenu extends Component {
  render() {
    return (
    <Headroom style={style}>
      <div>
        <BrandAUIO />
        <div className='menu'>
          <div className='menu-list'>
            <div style={linkStyle}>
                Über das <span className='green'>Projekt!</span>
            </div>
            <div style={linkStyle}>
                Was ist <span className='yellow'>Autismus?</span>
            </div>
            <div style={linkStyle}>
                Kontakt
            </div>
          </div>
          <div className='menu-icon'>  
            <div style={linkStyle}>
              <i className="material-icons">menu</i>
            </div>
          </div>
        </div>
      </div>
    </Headroom>
    );
  }
}
