import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from '../../Header';
import Home from '../../Home';
import Footer from '../../Footer';
import Contact from '../../Contact';


class About extends Component {
    render() {

      const imgAbout = "images/me.png";

      return (

          <section id="About-Khalil" className="">
            <div className="khalil-intro cover cf bg-mid-gray center ph3">
              <Header />
                <div className="db dt-ns mw9 center w-100">
                  <div className="mw9 center">
                    <div className="cf ">
                      <div className="fl w-100 w-50-ns">
                        <div className="pv4">
                          <h2 className="f4 fw6 f1-ns white lh-title measure mt0 i">
                            Husband of 2. Father of 1👋🏼
                          </h2>
                          <p className="f5 f4-ns fw4 b measure dib-m white-80 lh-copy pb6">
                                Hey, I am Khalil, 23 years old creative guy living in Paris, fighting the cold weather by creativity and crazy ideas,
                                passionate about traveling, design, new technologies.
                                In addition to my technical skills, I am adaptable, cheerful and love to be a part of building world class products.
                          </p>
                        </div>
                      </div>
                      <div className="fl-l w-100 w-50-l">
                        <div className="pv4">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>


          <div id="khalil-work-awards" className="bg-near-white sans-serif pv4">
            <div className="mw9 center">
              <div className="cf">
                <div className="fl w-100 w-50-ns pa2">
                  <div className="pv4 ttu b black-60 tracked-mega">Work</div>
                  <article className="pv2 fl w-100 pr0 pr2-l">
                    <time className="f6 db gray ttu sans-serif mb2">June 2015 - Present</time>
                    <p className="serif">Product Designer</p>
                    <Link className="link black" to="http://viadeo.com/"><p className="serif b">Viadeo</p></Link>
                  </article>
                  <article className="pv2 fl w-100 pr0 pr2-l">
                    <time className="f6 db gray ttu sans-serif mb2">April 2014 - July 2014</time>
                    <p className="serif">UI Designer & Front-End Developer</p>
                    <Link className="link black" to="https://www.agence-senzo.fr/"><p className="serif b">Agence Digital Senzo</p></Link>
                  </article>
                  <article className="pv2 fl w-100 pr0 pr2-l">
                    <time className="f6 db gray ttu sans-serif mb2">June 2013 - September 2013</time>
                    <p className="serif">UI Designer & Front-End Developer</p>
                    <Link className="link black" to="http://www.obytes.com/"><p className="serif b">Obytes</p></Link>
                  </article>
                </div>

                <div className="fl w-100 w-50-ns pa2">
                  <div className="pv4 ttu b black-60 tracked-mega">Honors & Awards</div>
                    <article className="pv2 fl w-100 pr0 pr2-l">
                      <time className="f6 db gray ttu sans-serif">October 2016</time>
                      <p className="serif">1st prize "​Special prize by Uber"​</p>
                      <Link className="link black" to="http://hackthecity.bemyapp.com/"><p className="serif b">Hack The City</p></Link>
                    </article>
                    <article className="pv2 fl w-100 pr0 pr2-l">
                      <time className="f6 db gray ttu sans-serif">January 2016</time>
                      <p className="serif">2nd prize</p>
                      <Link className="link black" to="http://www.latechamienoise.com/pages/swamiens/swamiens2016.html"><p className="serif b">Startup week-end Amiens</p></Link>
                    </article>
                    <article className="pv2 fl w-100 pr0 pr2-l">
                      <time className="f6 db gray ttu sans-serif">November 2015</time>
                      <p className="serif">1st prize</p>
                      <Link className="link black" to="http://hackthecity.bemyapp.com/"><p className="serif b">Hackathon UTC</p></Link>
                    </article>
                </div>
              </div>
            </div>
          </div>
          <div className="khalil-recommendations">
            <div className="tc pv5 b--black-10">
              <h2 className="f5 fw6 ttu tracked black-60 mb4 sans-serif tracked-mega">Recommendations</h2>
                <p className="f5 f4-m f3-l lh-copy measure mt0 center">
                Khalil is an outstanding designer with many skills who use with perfect control.
                All the day, he have lot of proposals for creating UI and UX interface with clean and fresh design.
                It's a real pleasure to work with him, always with the smile ;)
                </p>
                <cite className="f6 ttu tracked fs-normal">Marie Dehayes - Head of UX Design <Link className="link black" to="http://viadeo.com/">Viadeo</Link></cite>
            </div>
          </div>
          <Contact />
          <Footer />
        </section>

      )
    }
}

export default About;
