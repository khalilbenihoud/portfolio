import React, { Component } from 'react';

import _ from 'lodash';

import Header from './Header';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';

class Home extends Component{
  render(){
    const data = require('../data.json');
    const imgArrow = "images/arrow.svg";

    return(
      <main id="Home" className="w-100 animated fadeIn">
        <section id="Hero" className="cf center vh-75 ph3">
          <Header />
            <div className="db dt-ns mw8 center w-100 mt4">
              <div className="v-mid dtc">
                <div className="pb3 pb4-ns pt4 pt4-ns">
                  <h2 className="f3 f1-ns f3-m fw7 lh-title measure-wide dark-gray">
                    Stop looking, I am your guy.
                  </h2>
                  <p className="f3-ns light-silver measure">I am Benihoud Khalil, a Product Designer based in Paris. I like to solve problems and enjoy the process at the same time.</p>
                </div>
              </div>
            </div>
            <div className="w-100 mw8 center dn db-ns bouncing">
              <a href="#Werk">
                <img src={imgArrow} alt="Site Name" />
              </a>
            </div>

        </section>

        <section id="Werk" className="db dt-ns mw8 center w-100 overflow-hidden work ph3 ">
          <div className="db dt-ns  center w-100">
            <div className="v-mid dtc">
              <div className="pb3 pb4-ns pt4 pt4-ns">
                <h2 className="f2 fw2-ns f1-ns w-10-ns fw4 lh-title black-30">
                  Selected Works
                </h2>
              </div>
            </div>
          </div>
              {_.map(data, (work, key) => {
                return (
                  <Work
                    id={key}
                    key={key}
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
