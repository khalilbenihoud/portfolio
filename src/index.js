import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


import './index.css';
import './animate.min.css'

import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Project from './components/Project';

const Application = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="about" component={About} />
      <Route path="project" exact={true} component={Project} />
      <Route path="project/:id" component={Project} />
    </Switch>
  </Router>
);

render(Application(),document.getElementById('root'));
