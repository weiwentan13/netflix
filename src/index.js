import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles';
import 'normalize.css';
import reportWebVitals from './reportWebVitals';
import {firebase} from './lib/firebase.prod';
import {FirebaseContext} from './context/firebase';

render(
  <>
      <FirebaseContext.Provider value={{firebase}}>
        <GlobalStyles />
        <App />
      </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
