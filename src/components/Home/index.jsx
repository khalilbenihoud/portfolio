import React, { Component } from 'react';
import { Link } from 'react-router'

import _ from 'lodash';

import Header from '../Header';
import Work from '../Work';
import Contact from '../Contact';
import Footer from '../Footer';

class Home extends Component{
  render(){
    const data = require('../../data.json');

    return(
      <main id="Home" className="w-100 animated fadeIn">
        <section id="Hero" className="cover cf center ph3 vh-70">
          <Header />
            <div className="db dt-ns mw9 center w-100 mt4">
                <div className="pb3 pb4-ns pt4 pt4-ns white">
                  <h2 className="f3 f1-ns f3-m fw5 lh-title measure mt0">
                  Hello, my name is Khalil !
                </h2>
                  <p className="f5 f4-ns f4-m fw5 white-90 measure-wide dib-m lh-copy">
                    I am a Product Designer from Paris. Currently working at Viadeo on exciting projects. Oh, I am also accepting <span className="b white">freelance</span> projects for Web & mobile.
                  </p>
              </div>
            </div>
        </section>
        <section id="Werk" className="db dt-ns mw9 center w-100 overflow-hidden work">
          <div className="mw9 center">
            <div className="cf">
              <div className="fl w-20 pb3 pb4-ns pt4 pt4-ns">
                <h3 className="f3 f1-ns f3-m fw2 lh-title measure mt0 mt4 black-30">Selected works</h3>
              </div>

            </div>
          </div>
              {_.map(data, (work, key) => {
                return (
                  <Work
                    id={key}
                    projectImage={work.projectImage}
                    projectTitle={work.projectTitle}
                    projectDescription={work.projectDescription}
                  />
                )
              })}
        </section>
        <Contact />
        <Footer />
      </main>

    )
  }
}

export default Home;
