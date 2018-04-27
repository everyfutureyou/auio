import React, { Component } from 'react';
import LogoBunt from '../BrandPro/LogoPro.svg';

export default class Claim extends Component {
  render() {
    return (
      <div className="claim">
        <img className="claimLogo" src={LogoBunt} alt="" />
        <h1 className="akko">Ihr <span className="mint">Zugang</span> zu neuen Welten.</h1>
      </div>
    );
  }
}
