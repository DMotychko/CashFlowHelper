import React, { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet';
import { appName } from './common/config';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';

import './styles/App.scss';
import DialogSpace from './components/common/dialogs/DialogSpace';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const onStart = useCallback(() => setGameStarted(true), [setGameStarted]);
  const onExit = useCallback(() => setGameStarted(false), [setGameStarted]);

  return (
    <>
      <Helmet>
        <title>{appName}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      {gameStarted ? <MainPage onExitGame={onExit} /> : <HomePage onStart={onStart} />}
      <DialogSpace />
    </>
  );
}

export default App;
