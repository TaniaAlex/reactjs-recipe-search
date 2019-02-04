import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Router from './components/Router';
//import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
serviceWorker.unregister();
