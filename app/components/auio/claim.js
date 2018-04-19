import React, { Component } from 'react';
import LogoBunt from '../Brand/LogoC.png';

const claimBoxStyle = {
  margin: 20,
  padding: 30,
  fontFamily: 'Joanna Sans W01 Light',
  color: 'whitesmoke',
  textAlign: 'center',
};

export default class Claim extends Component {
  render() {
    return (
      <div style={claimBoxStyle} className="claim">
        <img src={LogoBunt} alt="" />
        <h1 className="akko">Dein <span className="yellow">Zugang</span> zu neuen Welten.</h1>
      </div>
    );
  }
}
