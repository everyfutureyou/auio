import React, { Component } from 'react';
import LogoBunt from './LogoC.svg';

const style = { // unused
  background: '#404047',
  height: 140,
  fontFamily: 'Akko W01 Bold',
  boxShadow: '5px 5px 15px #4040474d',
};

const linkStyle = { // unused
  color: 'white',
};

export default class BrandAUIO extends Component {
  render() {
    return (
      <div className="brand">
        <div>
          <img src={LogoBunt} alt="" />AUIO<span className="dot">.TV</span>
        </div>
      </div>
    );
  }
}
