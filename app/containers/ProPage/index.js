/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';

import MainMenu from '../../components/auiopro/menu';

import Claim from '../../components/auiopro/claim';
import About from '../../components/auiopro/about';
import Events from '../../components/auio/events';
import NewsletterModal from '../../components/auio/newsletter_modal';
import Who from '../../components/auio/who';
import Autismus from '../../components/auio/autismus';
import Topics from '../../components/auio/topics';
import Motivation from '../../components/auio/motivation';
import Support from '../../components/auio/support';
import Contact from '../../components/auiopro/contact';
import Newsletter from '../../components/auio/newsletter';
import Footer from '../../components/auiopro/footer';

export default class ProPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
        <div className='container mint-bg people'>
          <Autismus />
        </div>
        <div className='container white-bg' id='contact'>
          <Contact />
        </div>
        <div className='dark-bg'>
          <Footer className="dark-bg"/>
        </div>
      </div>
    );
  }
}
