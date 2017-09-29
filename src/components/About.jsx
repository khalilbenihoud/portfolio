import React, { Component } from 'react';

import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';


class About extends Component {
    render() {

      const imgTestimonials = "images/marie.png"
      return (
        <section id="About-Khalil">
          <div className="khalil-intro cf bg-mid-gray center ph3 vh-75">
            <Header />
              <div className="db dt-ns mw8 center w-100 mt4">
                <div className="v-mid dtc">
                  <div className="pb3 pb4-ns pt4 pt4-ns">
                    <h2 className="f3 f1-ns f3-m fw7 lh-title measure-wide white">
                      Human. Creative. Workaholic.
                    </h2>
                    <p className="f3-ns white-70 lh-title measure">It's me again, I am a 24 years old creative guy living in Paris, fighting the cold weather by creativity and crazy ideas,
                    passionate about traveling, photography and longboarding.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          <div id="khalil-work-awards" className="bg-near-white pv4 ph3">
            <div className="mw8 center">
              <div className="cf pv4">
                <div className="fl w-100 w-50-ns ">
                  <div className="ttu b black-60 tracked-mega pb4">Work</div>
                  <article className="pv2 fl w-100 pr0 pr2-l">
                    <time className="f6 db gray ttu mb2">June 2015 - Present</time>
                    <p>Product Designer</p>
                    <a className="link black" href="http://viadeo.com/"><p className="b">Viadeo</p></a>
                  </article>
                  <article className="pv2 fl w-100 pr0 pr2-l">
                    <time className="f6 db gray ttu mb2">April 2014 - July 2014</time>
                    <p>UI Designer & Front-End Developer</p>
                    <a className="link black" href="https://www.agence-senzo.fr/"><p className="b">Agence Digital Senzo</p></a>
                  </article>
                  <article className="pv2 fl w-100 pr0 pr2-l">
                    <time className="f6 db gray ttu mb2">June 2013 - September 2013</time>
                    <p>UI Designer & Front-End Developer</p>
                    <a className="link black" href="http://www.obytes.com/"><p className="b">Obytes</p></a>
                  </article>
                </div>

                <div className="fl w-100 w-50-ns">
                  <div className="ttu b black-60 tracked-mega pb4">Honors & Awards</div>
                    <article className="pv2 fl w-100 pr0 pr2-l">
                      <time className="f6 db gray ttu">October 2016</time>
                      <p>1st prize "​Special prize by Uber"​</p>
                      <a className="link black" href="http://hackthecity.bemyapp.com/"><p className="b">Hack The City</p></a>
                    </article>
                    <article className="pv2 fl w-100 pr0 pr2-l">
                      <time className="f6 db gray ttu">January 2016</time>
                      <p>2nd prize</p>
                      <a className="link black" href="http://www.latechamienoise.com/pages/swamiens/swamiens2016.html"><p className="b">Startup week-end Amiens</p></a>
                    </article>
                    <article className="pv2 fl w-100 pr0 pr2-l">
                      <time className="f6 db gray ttu">November 2015</time>
                      <p>1st prize</p>
                      <a className="link black" href="http://hackthecity.bemyapp.com/"><p className="b">Hackathon UTC</p></a>
                    </article>
                </div>
              </div>
            </div>
          </div>
          <div className="khalil-recommendations ph3">
            <div className="tc pv4 b--black-10">
                <img src={imgTestimonials} alt="testimonials" /><br/>

                <blockquote className="reco f5 f4-m f4-l lh-copy measure-wide mb2 center">
                &#34;Khalil is an outstanding designer with many skills who use with perfect control.
                All the day, he has lots of proposals for creating UI and UX interface with clean and fresh design.
                It's a real pleasure to work with him, always with the smile ;)&#34;
                </blockquote>
                <cite className="f6 fw6 ttu tracked fs-normal black-50">Marie Dehayes - Head of UX Design <a className='link black-70 fw8 grow pointer no-underline' href="http://www.viadeo.com">Viadeo </a></cite>
            </div>
          </div>
          <Contact />
          <Footer />
        </section>

      )
    }
}

export default About;
