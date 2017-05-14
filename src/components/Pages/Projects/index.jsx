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
        <section id="Work-Section">
          <div className="work-info cf bg-mid-gray center ph3">
            <Header/>
              <div className="db dt-ns mw9 center w-100">
                  <div className="pb3 pb4-ns pt4 pt4-ns mt4 white fl-l w-50-l">
                    <h2 className="f4 fw6 f1-ns lh-title measure mt0">
                    {project.projectTitle}
                    </h2>
                    <p className="f5 f4-ns fw4 b measure dib-m lh-copy">
                    {project.projectDescription}
                    </p>
                </div>
              </div>
          </div>
        </section>

      )
    }
  }


export default Projects;
