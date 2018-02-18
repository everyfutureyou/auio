/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
/*import 'semantic-ui-css/semantic.min.css';*/
import '../../style/semantic-ui-css/semantic.css';
import '../../style/style.css';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import LandingPage from 'containers/LandingPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const AppWrapper = styled.div`
  min-width: 100vw;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - AUIO.tv"
        defaultTitle="AUIO.tv – Autismus-Lernplattform"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/impressum" component={FeaturePage} />
        <Route path="" component={LandingPage} />
      </Switch>
    </AppWrapper>
  );
}
