import React, { Component } from 'react';
import { Link } from 'react-router';

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


      const list = function (listing) {
        return listing.map((element) => <li>{element}</li>)
      };

      return (
        <section id="" className="cover cf center">
          <div
            style={{background: 'url('+ project.details.projectImageHeader + ') no-repeat center right'}}
            className="imageheader vh-50-l cover ph3 ph4-m ph5-l">
            <Header />
            <div className="projects-top db mw9 center w-100 tc v-mid">
              <div className="pb3 pb4-ns pt4 pt4-ns">
                <time className="f5 f4-l db fw1 baskerville white-70 mb2">
                  {project.details.projectTime}
                </time>
                <h2 className="tc f1 lh-title mt0 i v-mid">
                  {project.projectTitle}
                </h2>
              </div>
            </div>
          </div>
          <div className="projects-infos db dt-ns mw9 center w-100">
            <div className="serif ph3 ph4-m ph5-l">
              <div className="cf">
                <article className="pv2 fl w-100 w-60-l pr0 pr2-l ">
                  <h2 className="f5 f4-ns fw6 mb0 black">
                    Project info
                  </h2>
<<<<<<< HEAD
                  <p className="f5 pt3 pb3 lh-copy mt0">
=======
                  <p className="f5 lh-copy mt0 sans-serif">
>>>>>>> d520f6565591471785b15750130d4702049966f8
                    {project.details.projectInfo}
                    <br/>
                  </p>
                  <Link
                    to={project.details.projectLink}
                    className="link black b grow pointer no-underline highlight">
                    &#10142; Visit the website
                  </Link>
                </article>
                <article className="pv2 fl w-100 w-40-l pr0 pr2-l pl5-l">
                  <h2 className="f5 f4-ns fw6 mb0 black">Role</h2>
                  <p className="f6 f5-ns measure lh-copy mt0 list pl0 sans-serif">
                    {list(project.details.projectRole)}
                  </p>
                  <h2 className="f5 f4-ns fw6 mb0 black">Team</h2>
                  <p className="f6 f5-ns measure lh-copy mt0 list pl0 sans-serif">
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
                <div className="cf dt-l w-100 pv4">
                  <div className="dtc-l mw9">
                    <img className="w-100" src={project.details.projectImageTop} alt="" />
                  </div>
                </div>

                <div className="cf dn">
                  <div className="fl w-100 w-50-l">
                    <p className="f5 pv4">
                      During high tides, water would flow directly into the pools from the
                      nearby ocean, recycling the <span className="db f4 f3-m f1-l fw6 measure lh-title">two million US gallons of water in about an hour. </span>
                  </p>
                </div>
                <div className="fl w-100 w-50-l">
                  <p className="f5">
                    During low tides, a powerful turbine water pump,
                    built inside a cave at sea level, could be switched on from a control
                    room and could fill the tanks at a rate of 6,000 US gallons a minute,
                    recycling all the water in five hours.
                  </p>
                </div>
              </div>
              <div className="cf">
                <div className="fl w-100 w-50-l pr2-l pb3">
                  <img
                    className="db w-100"
                    src={project.details.projectImage1}
                    alt="" />
                </div>
                <div className="fl w-100 w-50-l pr1 pr0-l pl2-l pb3">
                  <img
                    className="db w-100"
                    src={project.details.projectImage2}
                    alt="" />
                </div>
                <div className="fl w-100 w-100-l pl2 pl0-l pr2-l pb3">
                  <img
                    className="db w-100"
                    src={project.details.projectImage3}
                    alt="" />
                </div>
                <div className="fl w-100 w-100-l pl2 pl0-l pr2-l pb3">
                  <img
                    className="db w-100"
                    src={project.details.projectImage4}
                    alt="" />
                </div>

              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD

        <section className="cf dt-l w-100 center">
          <h3 className="f2 tc">More projects</h3>
            <div className="fl w-100 w-50-ns cover pv6-l pa5 pa5-ns pa5-l tc" style={{background: 'url('+imageHeader + ') no-repeat center right'}}>
              <Link to="/" className="prev f3 overflow-hidden white tc link" title="">
                  {project.projectTitle}
              </Link>
            </div>
            <div className="fl w-100 w-50-ns cover pv6-l pa5 pa5-ns pa5-l tc" style={{background: 'url('+imageHeader + ') no-repeat center right'}}>
              <Link to="/" className="next f3 overflow-hidden white tc link" title="">
=======
        <section className="bg-gray  cf dt-l w-100 ">
            <div className="f1 fl w-50 cover bg-center pv5  tc" style={{background: 'url('+ project.details.projectImageHeader + ') no-repeat center right'}}>
              <Link to="/" className="overflow-hidden white tc" title="">
                  {project.projectTitle}
              </Link>
            </div>
            <div className="fl w-50 cover bg-center pv5  pa5 tc" style={{background: 'url('+ project.details.projectImageHeader + ') no-repeat center right'}}>
              <Link to="/" className="f1 overflow-hidden white tc" title="">
>>>>>>> d520f6565591471785b15750130d4702049966f8
                  {project.projectTitle}
              </Link>
            </div>
        </section>
        <Footer />
      </section>

      )
    }
  }


export default Projects;
