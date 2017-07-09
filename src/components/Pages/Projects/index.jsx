import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import Header from '../../Header';
import Home from '../../Home';
import Footer from '../../Footer';
import Contact from '../../Contact';
import projects from '../../../data';


class Projects extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {_id: props.params && props.params.id}
  }
    render() {
      const project = projects[this.state._id];

      let previous_index = project.position - 1;
      let next_index = project.position + 1;

      if (previous_index < 0) {
        previous_index = projects[Object.keys(projects)[Object.keys(projects).length - 1]].position;
      }

      if (next_index > Object.keys(projects).length) {
        next_index = 0;
      }

      let previous_project = _.find(projects, { 'position': previous_index });
      let next_project = _.find(projects, { 'position': next_index });

      const list = function (listing) {
        return listing.map((element) => <li>{element}</li>)
      };

      return (
        <section id="ProjectDetails" className="cover cf center">



          <div className="cover bg-left bg-center-l dt w-100 vh-75" style={{background: 'url('+ project.details.projectImageHeader + ') no-repeat center right'}}>
            <div className="pb5 pb6-m pb7-l">
              <nav className="dt w-100 mw8 center">
                <div className="dtc w2 v-mid pa3">
                  <Header />
                        </div>
                      </nav>
                      <div className="tc-l mt4 mt5-m mt6-l ph3">
                        <time className="f5 f4-l db fw1 baskerville white-70 mb2 tc">
                          {project.details.projectTime}
                        </time>
                        <h2 className="tc f1 lh-title mt0 v-mid">
                          {project.projectTitle}
                        </h2>
                      </div>
                    </div>
                  </div>


          <div className="projects-infos db dt-ns mw8 center w-100 ph3">
            <div className="serif">
              <div className="cf">
                <article className="pv4 fl w-100 w-60-l pr0 pr2-l">
                  <h2 className="f5 f4-ns fw6  black">
                    Project info
                  </h2>
                  <p className="f5 lh-copy mt0 black-70">
                    {project.details.projectInfo}
                    <br/>
                  </p>
                  <a
                    href={project.details.projectLink}
                    className="link black b grow pointer no-underline highlight sans-serif">
                    &#10142; Visit {project.projectTitle} website
                  </a>
                </article>
                <article className="pv4 fl w-100 w-40-l pr0 pr2-l pl5-l">
                  <h2 className="f5 f4-ns fw6 black">Role</h2>
                  <p className="f5 lh-copy mt0 black-70 list">
                    {list(project.details.projectRole)}
                  </p>
                  <h2 className="f5 f4-ns fw6 black">Team</h2>
                  <p className="f5 lh-copy mt0 black-70 list">
                    {list(project.details.projectTeam)}
                  </p>
                </article>
              </div>

              <div className="f5 f3-m lh-copy">
                <div className="cf dt-l w-100 bt b--black-10 pv4">
                  <div className="dtc-l mw9">
                    <img className="w-100" src={project.details.projectImageInfo} alt="" />
                  </div>
                </div>
                <div className="cf dt-l w-100 pb3">
                  <div className="dtc-l mw9">
                    <img className="w-100" src={project.details.projectImageTop} alt="" />
                  </div>
                </div>


              <div className="cf">
                <div className="fl w-100 w-50-l pr2-l pb3">
                  <img
                    className="db w-100"
                    src={project.details.projectImage1}
                    alt="" />
                </div>
                <div className="fl w-100 w-50-l pr1-ns pr0-l pl2-l pb3">
                  <img
                    className="db w-100"
                    src={project.details.projectImage2}
                    alt="" />
                </div>
                <div className="f5 f3-m lh-copy">
                  <div className="cf dt-l w-100">
                    <div className="dtc-l mw9 pb3">
                      <img className="w-100" src={project.details.projectImage3} alt="" />
                    </div>
                  </div>
                  <div className="cf dt-l w-100 pb3">
                    <div className="dtc-l mw9">
                      <img className="w-100" src={project.details.projectImage4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          <section className="cf dt-l w-100">
            <h3 className="f2-ns tc">More projects</h3>
            <div className="fl w-50 cover bg-center pv6 tc" style={{background: 'url('+ previous_project.details.projectImageHeader + ') no-repeat center right'}}>
              <Link to={'projects/' + previous_project.id} className="f3 overflow-hidden white tc link"  target="_blank">
                {previous_project.projectTitle}
              </Link>
            </div>
            <div className="fl w-50 cover bg-center pv6 tc" style={{background: 'url('+ next_project.details.projectImageHeader + ') no-repeat center right'}}>
              <Link to={'projects/' + next_project.id} className="f3 overflow-hidden white tc link"  target="_blank">
                {next_project.projectTitle}
              </Link>
            </div>
          </section>
          <Footer />
        </section>

      )
    }
  }


export default Projects;
