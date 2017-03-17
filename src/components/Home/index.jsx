import React, { Component } from 'react';

import Header from '../Header';
import Work from '../Work';
import Contact from '../Contact';
import Footer from '../Footer'

class Home extends Component{
  render(){
    return(
      <div id="Home" className="w-100">

        <section className="cover hero cf center ph3 ph3-ns">
          <Header />
          <div className="w-100 mw9 center mv5 ph3-ns ">
            <h1 className='ttu'>Bonjour</h1>
            <h2 className='lh-copy f5 f-subheadline-l measure-wide f3-l white'>
              I am a Product Designer at <a className='link white b grow pointer no-underline highlight z1' href="http://www.viadeo.com">Viadeo </a> where I am creating beautiful interfaces & tasty experiences.
              Want to know more <a href="#" className='link white b grow pointer no-underline highlight'>about me </a> ?
            </h2>
            <button className='ttu no-underline tracked-mega pointer' href="#0"  data-wipe="HIRE ME →">Hire me →</button>
          </div>
        </section>
        <Work />
        <Contact />
        <Footer />
      </div>

    )
  }
}

export default Home;
