import React, {Component} from 'react';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import LogoBunt from '../Brand/LogoC.png';


const boxStyle = {
  margin: 20,
  padding: 100,
  paddingBottom: 50,
  fontFamily: 'Joanna Sans W01 Light',
  color: 'whitesmoke',
  textAlign: 'center'
};

const imgStyle = {
  width:'200'
};


  export default class Claim extends Component {
    render() {
    return(
    <div style={boxStyle} className='claim'>
        <img src={LogoBunt} />
        <h1 className="akko">Dein <span className='yellow'>Zugang</span> zu neuen Welten.</h1>
      </div>
)};
}
