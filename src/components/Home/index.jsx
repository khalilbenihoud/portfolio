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
        <section id="Hero" className=" cf center ph3 vh-50 vh-100-ns">
          <Header />
            <div className="db dt-ns mw8 center w-100 mt4">
              <div className="v-mid dtc">
                <div className="pb3 pb4-ns pt4 pt4-ns white">
                  <h2 className="f3 f1-ns f3-m fw7 lh-title measure">
                    Benihoud Khalil.
                  </h2>
                  <p className="f5 f4-ns fw4 b dib-m lh-copy white-70">Hi, I am a Product designer building great products with great people.</p>
                </div>
              </div>
            </div>
        </section>

        <section id="Werk" className="db dt-ns mw8 center ph3 w-100 overflow-hidden work">
          <div className="db dt-ns mw8 center w-100 mt4">
            <div className="v-mid dtc">
              <div className="pb3 pb4-ns pt4 pt4-ns">
                <h2 className="f3 f1-ns f3-m fw5 w-10-ns pr3-ns  lh-title measure black-30">
                  Selected Works
                </h2>
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
