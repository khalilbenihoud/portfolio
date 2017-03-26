import React, { Component } from 'react';
import _ from 'lodash';

import Header from '../Header';
import Work from '../Work';
import Contact from '../Contact';
import Footer from '../Footer';
import About from '../Pages/About';

class Home extends Component{
  render(){
    const data = require('../../data.json').works;

    return(
      <main id="Home" className="w-100">
        <section id="Hero" className="cover cf center ph3">
        <Header />
          <div className="dt w-100 mw9 center ph5-l ">
            <h1 className="f1-l lh-solid fw7 i">Hello, my name is Khalil 👋🏼 </h1>
            <p className='f5 f2 f3-l measure-wide fw1 lh-copy f-subheadline-l measure-wide white-70'>
              I am a Product Designer at <a className='link white b grow pointer no-underline highlight' href="http://www.viadeo.com">Viadeo </a> where I am creating beautiful interfaces & tasty experiences.
              Want to know more <a href="../About/index.jsx" className='link white b grow pointer no-underline highlight'>about me </a> ?
            </p>

            <button className='f6 f5-ns fw6 dib ba b--black-20 white grow ph3 ph4-ns pv2 pv3-ns br2 no-underline tracked-mega ttu' href="mailto:hello@benihoudkhalil.com">Hire me →</button>
          </div>
        </section>
        <section className="dt w-100 mw9 center ph5-l pa2-ns overflow-hidden work pointer">
              {_.map(data, (work, i) => {
                return (
                  <Work
                    id={`work_${i}`}
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
