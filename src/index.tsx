import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import CSSBaseline from '@mui/material/CssBaseline';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupStore } from './store/store';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { responsiveFontSizes } from '@mui/material';

import './styles/index.scss';

const store = setupStore();

let theme = createTheme();
theme = responsiveFontSizes(theme);


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CSSBaseline enableColorScheme />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
