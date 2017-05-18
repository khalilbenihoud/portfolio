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
                    <time className="f5 f4-l db fw1 baskerville mb2">{project.projectTime}</time>
                    <h2 className="tc f1 lh-title mt0 i">
                      {project.projectTitle}
                    </h2>
                  </div>
                </div>
              </div>
                <div className="projects-infos db dt-ns mw9 center w-100 ph3 ph4-m ph5-l">
                  <div className="serif ph3 ph4-m ph5-l">
                    <p className="lh-copy f5 f3-m f4-l measure center pv4">{project.projectInfo}</p>
                      <div className="cf">
                        <article className="fl pv2 w-100 w-third-l pr4-l">
                          <h2 className="f5 f4-ns fw6 mb0 black">Project info</h2>
                          <p className="f6 f5-ns measure lh-copy mt0">
                            {project.projectInfo}
                          </p>
                        </article>
                        <article className="pv2 fl w-100 w-third-l ph3-l">
                          <h2 className="f5 f4-ns fw6 mb0 black">Role</h2>
                          <p className="f6 f5-ns measure lh-copy mt0">
                            {project.projectInfo}
                          </p>
                        </article>
                        <article className="pv2 fl w-100 w-third-l pl4-l">
                          <h2 className="f5 f4-ns fw6 mb0 black">
                            Teammates
                          </h2>
                          <p className="f6 f5-ns measure lh-copy mt0">
                            {project.projectTeam}
                          </p>
                        </article>
                      </div>



                </div>
              </div>
          </section>




      )
    }
  }


export default Projects;
