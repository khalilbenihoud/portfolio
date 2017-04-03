import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import './index.css';

import App from './App';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/Pages/About';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
  </Router>,
  document.getElementById('root')
);
