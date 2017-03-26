import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import './index.css';

import App from './App';
import Home from './components/Home';
import About from './components/Pages/About';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
