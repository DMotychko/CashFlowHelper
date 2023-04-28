import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import CSSBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupStore } from './store/store';
import PersistLoading from './components/common/PersistLoading';

import './styles/index.scss';

const store = setupStore();
const persistor = persistStore(store);

let theme = createTheme();
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CSSBaseline enableColorScheme />
        <PersistGate loading={<PersistLoading />} persistor={persistor}>
          <App />
        </PersistGate>
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
