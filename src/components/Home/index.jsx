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
        <section id="Hero" className="cover cf center ph3 vh-100">
          <Header />
            <div className="db dt-ns mw8 center w-100 mt4">
              <div className="v-mid dtc">
                <div className="pb3 pb4-ns pt4 pt4-ns white">
                  <h2 className="f3 f1-ns f3-m fw5 lh-title measure">
                    Passionate Designer. Longboarder wannabe.
                  </h2>
                  <p className="f5 f4-ns fw4 b dib-m lh-copy white-70">Oh hey, my name is Benihoud Khalil. I am here to help you build your digital product.</p>
                </div>
              </div>
            </div>
        </section>
        <section id="Werk" className="db dt-ns mw8 center w-100 overflow-hidden work">
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
