import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CookiesProvider } from 'react-cookie';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CookiesProvider><App /></CookiesProvider>, document.getElementById('root1'));
// registerServiceWorker();
