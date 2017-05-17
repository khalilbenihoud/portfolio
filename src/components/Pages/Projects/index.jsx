import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from '../../Header';
import Home from '../../Home';
import Footer from '../../Footer';
import Contact from '../../Contact';
import projects from '../../../projects';


class Projects extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {_id: props.params && props.params.id}
  }

    render() {

      const details = projects[0]['details'];
      const project = details[this.state._id];
      return (
          <section id="">
            <div id="Projects" className="cover cf center ph3">
              <Header />
                <div className="projects-top db dt-ns mw9 center w-100 tc">
                  <div className="pb3 pb4-ns pt4 pt4-ns mt4 white-70">
                    <time className="f5 f4-l db fw1 baskerville mb2"> March 19th, 2015</time>
                    <h2 className="tc f1 lh-title mt0 i">
                      {project.projectTitle}
                    </h2>
                  </div>
                </div>
              </div>
                <div className="projects-infos db dt-ns mw9 center w-100 ">
                  <h3>Overview</h3>
                  <div className="center measure-wide f5 pv5 lh-copy ph2">
                    <p>{project.projectOverview}</p>
                  </div>
                </div>
          </section>




      )
    }
  }


export default Projects;
