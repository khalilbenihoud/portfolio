import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import './index.css';

import App from './App';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/Pages/About';
import Projects from './components/Pages/Projects';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/Profile" component={About} />
    <Route path="/projects" exact={true} component={Projects} />
    <Route path="/projects/:id" component={Projects} />

  </Router>,
  document.getElementById('root')
);
