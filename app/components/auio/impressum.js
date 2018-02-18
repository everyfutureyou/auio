import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PopoverExampleSimple from '../components/poppy';
import MainMenu from '../components/menu';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Paper from 'material-ui/Paper';

import Claim from '../components/claim';

export default class Impressum extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <PopoverExampleSimple />
        </div>
      </MuiThemeProvider>
    );
  }
}
