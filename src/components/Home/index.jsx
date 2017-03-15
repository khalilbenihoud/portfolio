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
          <div className="w-100 mw9 center mv5 ph3-ns">
            <h1 className='ttu'>Bonjour</h1>
            <h2 className='lh-copy f5 f-subheadline-l measure f3-m f3-l white measure '>
              I am a Product Designer at <a href="#" className='link dim white b'>Viadeo</a> where I am creating beautiful interfaces & tasty experiences.
              Want to know more about me ? <a href="#" className='link dim white b'>Let’s go</a>
            </h2>
            <a className='f6 link ph3 pv2 mb2 dib white hire pulse-button-hover' href="#0">Hire me →</a>
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
