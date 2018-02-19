/*
 * Impressum
 *
 * List all the features
 */
import React from 'react';

import ImprintMenu from '../../components/auio/menu_imprint';
import Imprint from '../../components/auio/imprint';
import ImprintFooter from '../../components/auio/footer_imprint';

export default class Impressum extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <ImprintMenu />
        <div className='container white-bg' id='contact'>
          <Imprint />
        </div>
        <div className='dark-bg'>
          <ImprintFooter className="dark-bg"/>
        </div>
      </div>
    );
  }
}
