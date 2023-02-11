import React from 'react';
import { Helmet } from 'react-helmet';
import { appName } from './common/config';
import MainPage from './pages/MainPage';

import './styles/App.scss';

function App() {
  return (
    <>
      <Helmet>
        <title>{appName}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <MainPage />
    </>
  );
};

export default App;
