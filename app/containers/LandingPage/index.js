/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';

import MainMenu from '../../components/auio/menu';

import Claim from '../../components/auio/claim';
import About from '../../components/auio/about';
import Events from '../../components/auio/events';
import NewsletterModal from '../../components/auio/newsletter_modal';
import Who from '../../components/auio/who';
import Autismus from '../../components/auio/autismus';
import Topics from '../../components/auio/topics';
import Motivation from '../../components/auio/motivation';
import Support from '../../components/auio/support';
import Contact from '../../components/auio/contact';
import Newsletter from '../../components/auio/newsletter';
import Footer from '../../components/auio/footer';

export default class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <MainMenu />
        <div className='container dark-bg' id='top'>
          <Claim />
        </div>
        <div className='container white-bg' id='about'>
          <About />
        </div>
        <div className="bar">
          <h1>Ab August 2018</h1>
        </div>
        <div className='container white-bg'>
          <Who />
        </div>
        <div className="bar">
          <h1>AUIO Events</h1>
        </div>
        <div className='container white-bg'>
          <Events />
        </div>
        <div className='container yellow-bg brain' id='autismus'>
          <Autismus />
        </div>
        <div className='container white-bg'>
          <Topics />
        </div>
        <div className="bar link">
          <NewsletterModal />
        </div>
        <div className='container white-bg'>
          <Motivation />
        </div>
        <div className='container green-bg people'>
          <Support />
        </div>
        <div className='container white-bg' id='contact'>
          <Contact />
          <Newsletter />
        </div>
        <div className='dark-bg'>
          <Footer className="dark-bg"/>
        </div>
      </div>
    );
  }
}
