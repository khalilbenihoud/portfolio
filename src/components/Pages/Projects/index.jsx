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
      const imageHeader = project.details.projectImageHeader;

      return (
        <section id="" className="cover cf center">
          <div
            style={{background: 'url('+imageHeader + ') no-repeat center right'}}
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
          <div className="projects-infos db dt-ns mw9 center w-100 ph3 ph4-m ph5-l">
            <div className="serif ph3 ph4-m ph5-l">
              <div className="cf">
                <article className="pv2 fl w-100 w-60-l pr0 pr2-l">
                  <h2 className="f5 f4-ns fw6 mb0 black">
                    Project info
                  </h2>
                  <p className="f5  lh-copy mt0">
                    {project.details.projectInfo}
                    <br/>
                    <br/>
                    <Link
                      to="/"
                      className='link black b grow pointer no-underline highlight '>
                      Visit the website
                    </Link>
                  </p>
                </article>
                <article className="pv2 fl w-100 w-40-l pr0 pr2-l">
                  <h2 className="f5 f4-ns fw6 mb0 black">Role</h2>
                  <p className="f6 f5-ns measure lh-copy mt0 list pl0">
                    {list(project.details.projectRole)}
                  </p>
                  <h2 className="f5 f4-ns fw6 mb0 black">Team</h2>
                  <p className="f6 f5-ns measure lh-copy mt0 list pl0">
                    {list(project.details.projectTeam)}
                  </p>
                </article>
              </div>



              <div className="f5 f3-m lh-copy">
                <div className="cf dt-l w-100 bt b--black-10 pv4">
                  <div className="dtc-l v-mid mw6 pr3-l">
                    <img
                      className="w-100"
                      src="../images/PYMK_Contact_Added.png"
                      alt="" />
                  </div>
                  <div className="dtc-l v-mid f6 f5-m f4-l measure-l">
                    <p className="measure pv4-l center">
                      Before it burned to the ground, the structure filled a small beach
                      inlet below the Cliff House, also owned by Adolph Sutro at the time.
                      Shortly after closing, a fire in 1966 destroyed the building
                      while it was in the process of being demolished. All that remains
                      of the site are concrete walls, blocked off stairs and
                      passageways, and a tunnel with a deep crevice in the middle. The
                      cause of the fire was arson. Shortly afterwards, the developer
                      left San Francisco and claimed insurance money.
                    </p>
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
                    src="../images/PYMK_Contact_Added.png"
                    alt="" />
                </div>
                <div className="fl w-50 w-50-l pr1 pr0-l pl2-l pb3">
                  <img
                    className="db w-100"
                    src="../images/PYMK_Contact_Added.png"
                    alt="" />
                </div>
                <div className="fl w-50 w-50-l pl2 pl0-l pr2-l pb3">
                  <img
                    className="db w-100"
                    src="../images/PYMK_Contact_Added.png"
                    alt="" />
                </div>
                <div className="fl w-100 w-50-l pl2-l">
                  <img
                    className="db w-100"
                    src="../images/PYMK_Contact_Added.png"
                    alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="bg-gray  cf dt-l w-100 ">
            <div className="f1 fl w-50 cover bg-center pv5  tc" style={{background: 'url('+imageHeader + ') no-repeat center right'}}>
              <Link to="/" className="overflow-hidden white tc" title="">
                  {project.projectTitle}
              </Link>
            </div>
            <div className="fl w-50 cover bg-center pv5  pa5 tc" style={{background: 'url('+imageHeader + ') no-repeat center right'}}>
              <Link to="/" className="f1 overflow-hidden white tc" title="">
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
