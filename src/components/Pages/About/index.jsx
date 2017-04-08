import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from '../../Header';
import Home from '../../Home';
import Footer from '../../Footer';
import Contact from '../../Contact';


class About extends Component {
    render() {

      const imgAbout = "images/me.jpg";

      return (
        <section id="About-Khalil">
          <div className="vh-75 dt w-100 tc bg-dark-gray white cover">
            <Header />
            <h1 className="f1 f-subheadline-l measure lh-title fw9 v-mid">Me, myself & I</h1>
          </div>
          <div className="khalil-infos dt w-100 mw9 center ph5-l">
            <p className="f3-l lh-copy f3-m center pv4 serif">
              Hey, I am Khalil, 23 years old creative guy living in Paris, fighting the cold weather by creativity and crazy ideas,
              passionate about traveling, design, new technologies.
              In addition to my technical skills, I am adaptable, cheerful and love to be a part of building world class products.
            </p>
          </div>
          <div className="khalil-work-awards bg-near-white sans-serif ">
            <div className="mw9 center ph3-ns ph5-l">
              <div className="cf ph2-ns">
                <div className="fl w-100 w-50-ns pa2">
                  <div className="pv4 ttu b tracked-mega">Work</div>
                  <article>
                    <time className="f6 db gray ttu sans-serif">June 2015 - Present</time>
                    <p className="serif">Product Designer</p>
                    <p className="serif b">Viadeo</p>
                  </article>
                  <article>
                    <time className="f6 db gray ttu sans-serif">April 2014 - July 2014</time>
                    <p className="serif">UI Designer & Front-End Developer</p>
                    <p className="serif b">Agence Digital Senzo</p>
                  </article>
                  <article>
                    <time className="f6 db gray ttu sans-serif">June 2013 - September 2013</time>
                    <p className="serif">UI Designer & Front-End Developer</p>
                    <p className="serif b">Obytes</p>
                  </article>
                </div>

                <div className="fl w-100 w-50-ns pa2">
                  <div className="pv4 ttu b">Honors & Awards</div>
                    <article>
                      <time className="f6 db gray ttu sans-serif">October 2016</time>
                      <p className="serif">1st prize "​Special prize by Uber"​</p>
                      <p className="serif b">Hack The City</p>
                    </article>
                    <article>
                      <time className="f6 db gray ttu sans-serif">January 2016</time>
                      <p className="serif">2nd prize</p>
                      <p className="serif b">Startup week-end Amiens</p>
                    </article>
                    <article>
                      <time className="f6 db gray ttu sans-serif">November 2015</time>
                      <p className="serif">1st prize</p>
                      <p className="serif b">Hackathon UTC</p>
                    </article>
                </div>
              </div>
            </div>
          </div>
          <div className="khalil-recommendations">
            <div className="pa4 mw9 center ph3-ns ph5-l">
              <h2 className="tracked-mega-l ttu ">Recommendations</h2>
              <blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
                <p className="f5 f4-m f3-l lh-copy measure mt0">
                Khalil is an outstanding designer with many skills who use with perfect control.
                All the day, he have lot of proposals for creating UI and UX interface with clean and fresh design.
                It's a real pleasure to work with him, always with the smile ;)
                </p>
                <cite className="f6 ttu tracked fs-normal">- Marie Dehayes</cite>
              </blockquote>
            </div>
          </div>
          <Contact />
          <Footer />
        </section>

      )
    }
}

export default About;
