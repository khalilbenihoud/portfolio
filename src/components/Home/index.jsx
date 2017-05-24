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
      <main id="Home" className="w-100">
        <section id="Hero" className="cover cf center ph3">
          <Header />
            <div className="db dt-ns mw9 center w-100">
                <div className="pb3 pb4-ns pt4 pt4-ns mt4-l white">
                  <h2 className="f4 fw6 f1-l lh-title measure mt0 i">
                  Hello, my name is Khalil 👋🏼
                </h2>
                  <p className="f5 f4-ns fw4 b measure dib-m lh-copy">
                  I am a Product Designer at <a className='link white b grow pointer no-underline ' href="http://www.viadeo.com">Viadeo </a> where I am creating beautiful interfaces & tasty experiences.
                  Want to know more <Link to="about" className='link white b grow pointer no-underline '>about me </Link> ?
                  </p>
              </div>
            </div>
        </section>
        <section id="Werk" className="db dt-ns mw9 center w-100 overflow-hidden work pointer">
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
