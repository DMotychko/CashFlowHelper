import React from 'react';
import { Helmet } from 'react-helmet';
import { appName } from './common/config';
import MainPage from './pages/MainPage';
import Home from './pages/Home';

import './styles/App.scss';

function App() {
  return (
    <>
      <Home/>
      <Helmet>
        <title>{appName}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
    </>
  )
}

export default App;
