import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Claim from '../auio/claim';
import About from '../auio/about';
import Who from '../auio/who';
import Autismus from '../auio/autismus';
import Topics from '../auio/topics';
import Motivation from '../auio/motivation';
import Support from '../auio/support';
import Contact from '../auio/contact';
import Newsletter from '../auio/newsletter';
import Footer from '../auio/footer';

export default class App extends Component {
  render() {
    return (

        <div>
          <div className='container dark-bg'>
            <Claim />
          </div>
          <div className='container white-bg'>
            <About />
          </div>
          <div className="bar">
            <h1>Ab August 2018</h1>
          </div>
          <div className='container white-bg'>
            <Who />
          </div>
          <div className='container yellow-bg brain'>
            <Autismus />
          </div>
          <div className='container white-bg'>
            <Topics />
          </div>
          <div className="bar">
            <h1>Newsletter bestellen</h1>
          </div>
          <div className='container white-bg'>
            <Motivation />
          </div>
          <div className='container green-bg people'>
            <Support />
          </div>
          <div className='container white-bg'>
            <Contact />
            <Newsletter />
          </div>
          <Footer className="dark-bg"/>
        </div>

    );
  }
}
