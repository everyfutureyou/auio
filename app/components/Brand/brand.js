import React, { Component } from 'react';
import LogoBunt from './LogoC.png';

const style = {
  background:'#404047',
  height:140,
  fontFamily: 'Akko W01 Bold',
  boxShadow: '5px 5px 15px #4040474d'
};

const linkStyle = {
  color: 'white'
}

export default class BrandAUIO extends Component {
  render() {
    return (
      <div className='brand'>
          <img src={LogoBunt}/>AUIO<span className='dot'>.TV</span>
      </div>
    );
  }
}
