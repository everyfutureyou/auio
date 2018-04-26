import React, { Component } from 'react';
import LogoBunt from '../Brand/LogoC.svg';

export default class Claim extends Component {
  render() {
    return (
      <div className="claim">
        <img className="claimLogo" src={LogoBunt} alt="" />
        <h1 className="akko">Dein <span className="yellow">Zugang</span> zu neuen Welten.</h1>
      </div>
    );
  }
}
