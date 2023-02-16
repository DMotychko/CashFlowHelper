import React from 'react';
import { Helmet } from 'react-helmet';
import { appName } from './common/config';
import Header from './components/mainPage/Header';

import './styles/App.scss';

function App() {
  return (
    <>
      <Header />
      <Helmet>
        <title>{appName}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
    </>
  );
};

export default App;
