import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from '../../Header';
import Home from '../../Home';
import Footer from '../../Footer';
import Contact from '../../Contact';


class About extends Component {
    render() {

      const imgAbout = "images/me.png";
      const imgTestimonials = "images/marie.png"
      const imgQuote = "images/quote.svg"
      return (




          <section id="About-Khalil" className="">

            <div className="khalil-intro cover cf bg-mid-gray center ph0-ns ph3 ph0 vh-75">
              <Header />
                <div className="db dt-ns mw8 center w-100">
                    <div className="cf">
                      <div className="dt w-100 dtc v-mid cover ">
                          <h2 className="f3 f1-ns f3-m fw7 lh-title measure-wide white">
                            Human. Creative. Workaholic.
                          </h2>
                          <p className="f3-ns lh-title white-70 measure">
                                Hey, I am Khalil, 23 years old creative guy living in Paris, fighting the cold weather by creativity and crazy ideas,
                                passionate about traveling, design, new technologies.
                                In addition to my technical skills, I am adaptable, cheerful and love to be a part of building world class products.
                          </p>
                      </div>
                    </div>
                </div>
            </div>


          <div id="khalil-work-awards" className="bg-near-white pv4">
            <div className="mw8 center">
              <div className="cf pv4">
                <div className="fl w-100 w-50-ns pa2">
                  <div className="ttu b black-60 tracked-mega pb4">Work</div>
                  <article className="pv2 fl w-100 pr0 pr2-l">
                    <time className="f6 db gray ttu mb2">June 2015 - Present</time>
                    <p>Product Designer</p>
                    <Link className="link black" to="http://viadeo.com/"><p className="b">Viadeo</p></Link>
                  </article>
                  <article className="pv2 fl w-100 pr0 pr2-l">
                    <time className="f6 db gray ttu mb2">April 2014 - July 2014</time>
                    <p>UI Designer & Front-End Developer</p>
                    <Link className="link black" to="https://www.agence-senzo.fr/"><p className="b">Agence Digital Senzo</p></Link>
                  </article>
                  <article className="pv2 fl w-100 pr0 pr2-l">
                    <time className="f6 db gray ttu mb2">June 2013 - September 2013</time>
                    <p>UI Designer & Front-End Developer</p>
                    <Link className="link black" to="http://www.obytes.com/"><p className="b">Obytes</p></Link>
                  </article>
                </div>

                <div className="fl w-100 w-50-ns pa2">
                  <div className="ttu b black-60 tracked-mega pb4">Honors & Awards</div>
                    <article className="pv2 fl w-100 pr0 pr2-l">
                      <time className="f6 db gray ttu">October 2016</time>
                      <p>1st prize "​Special prize by Uber"​</p>
                      <Link className="link black" to="http://hackthecity.bemyapp.com/"><p className="b">Hack The City</p></Link>
                    </article>
                    <article className="pv2 fl w-100 pr0 pr2-l">
                      <time className="f6 db gray ttu">January 2016</time>
                      <p>2nd prize</p>
                      <Link className="link black" to="http://www.latechamienoise.com/pages/swamiens/swamiens2016.html"><p className="b">Startup week-end Amiens</p></Link>
                    </article>
                    <article className="pv2 fl w-100 pr0 pr2-l">
                      <time className="f6 db gray ttu">November 2015</time>
                      <p>1st prize</p>
                      <Link className="link black" to="http://hackthecity.bemyapp.com/"><p className="b">Hackathon UTC</p></Link>
                    </article>
                </div>
              </div>
            </div>
          </div>
          <div className="khalil-recommendations">
            <div className="tc pv4 b--black-10">
                <img src={imgTestimonials} alt="testimonials" /><br/>

                <p className="f5 f4-m f4-l lh-copy measure-wide mt0 center">
                &#34;Khalil is an outstanding designer with many skills who use with perfect control.
                All the day, he have lot of proposals for creating UI and UX interface with clean and fresh design.
                It's a real pleasure to work with him, always with the smile ;)&#34;
                </p>
                <cite className="f6 ttu tracked fs-normal black-70">Marie Dehayes - Head of UX Design <a className='link black-70 b grow pointer no-underline' href="http://www.viadeo.com">Viadeo </a></cite>
            </div>
          </div>
          <Contact />
          <Footer />
        </section>

      )
    }
}

export default About;
