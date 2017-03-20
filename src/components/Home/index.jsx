import React, { Component } from 'react';
import _ from 'lodash';

import Header from '../Header';
import Work from '../Work';
import Contact from '../Contact';
import Footer from '../Footer'

class Home extends Component{
  render(){
    const data = [
          {
            projectImage: require('../../img/influans.png'),
            projectTitle: "Influans",
            projectDescription: "dadda"
          },
          {
            projectImage: require('../../img/molotov-tv.png'),
            projectTitle: "Molotov Tv",
            projectDescription: "dadadada"
          },
          {
            projectImage: require('../../img/empreintes.png'),
            projectTitle: "Empreintes",
            projectDescription: "dadadada"
          },
          {
            projectImage: require('../../img/viadeo-partners.png'),
            projectTitle: "Viadeo Partners",
            projectDescription: "dadadada"
          },
        ];

    return(
      <main id="Home" className="w-100">
        <section id="Hero" className="cover cf center ph3">
        <Header />
          <div className="dt w-100 mw9 center ph5-l ma3">
            <h1 className='ttu tracked'>Hello</h1>
            <h2 className='lh-copy f5 f-subheadline-l measure-wide f3-l white'>
                I am a Product Designer at <a className='link white b grow pointer no-underline highlight' href="http://www.viadeo.com">Viadeo </a> where I am creating beautiful interfaces & tasty experiences.
                Want to know more <a href="#" className='link white b grow pointer no-underline highlight'>about me </a> ?
            </h2>
            <button className='f6 f5-ns fw6 dib ba b--black-20 white grow ph3 ph4-ns pv2 pv3-ns br2 no-underline tracked-mega ttu' href="mailto:hello@benihoudkhalil.com">Hire me →</button>
          </div>
        </section>
        <section className="dt w-100 mw9 center ph5-l overflow-hidden work pointer">
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
