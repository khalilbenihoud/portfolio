import React, {Component} from 'react';

class Work extends Component {
    render() {

      const workImg1 = require('../../img/influans.png');
      const workImg2 = require('../../img/molotov-tv.png');
      const workImg3 = require('../../img/empreintes.png');
      const workImg4 = require('../../img/viadeo-partners.png');

        return (
          <section className="dt w-100 mw9 center work ph3-ns">
          <div>
            <article className="fl w-100 w-50-m w-50-ns pr2-ns">
              <div className="aspect-ratio aspect-ratio--16x9 hover-img">
                <img src={workImg1} className="db bg-center cover aspect-ratio--object" />
              </div>
              <a href="#0" className="ph2 ph0-ns pb3 link db">
                <h3 className="f5 f2-ns mb0 black-90">
                  Influans
                </h3>
                <h3 className="f6 f5 fw4 mt2 black-60 lh-title">
                  Spicy jalapeno burgdoggen picanha tail, pork loin flank filet mignon porchetta sirloin.
                  Picanha kevin meatball burgdoggen ham alcatra
                </h3>
              </a>
            </article>
            <article className="fl w-100 w-50-m w-50-ns pr2-ns">
              <div className="aspect-ratio aspect-ratio--16x9 hover-img">
                <img src={workImg2} className="db bg-center cover aspect-ratio--object" />
              </div>
              <a href="#0" className="ph2 ph0-ns pb3 link db">
                <h3 className="f5 f2-ns mb0 black-90">
                  Molotov Tv
                </h3>
                <h3 className="f6 f5 fw4 mt2 black-60 lh-title">
                  Spicy jalapeno burgdoggen picanha tail, pork loin flank filet mignon porchetta sirloin.
                  Picanha kevin meatball burgdoggen ham alcatra
                </h3>
              </a>
            </article>
            <article className="fl w-100 w-50-m w-50-ns pr2-ns">
              <div className="aspect-ratio aspect-ratio--16x9 hover-img">
                <img src={workImg3} className="db bg-center cover aspect-ratio--object" />
              </div>
              <a href="#0" className="ph2 ph0-ns pb3 link db">
                <h3 className="f5 f2-ns mb0 black-90">
                  Empreintes
                </h3>
                <h3 className="f6 f5 fw4 mt2 black-60 lh-title">
                  Spicy jalapeno burgdoggen picanha tail, pork loin flank filet mignon porchetta sirloin.
                  Picanha kevin meatball burgdoggen ham alcatra
                </h3>
              </a>
            </article>
            <article className="fl w-100 w-50-m w-50-ns pr2-ns">
              <div className="aspect-ratio aspect-ratio--16x9 hover-img">
                <img src={workImg4} className="db bg-center cover aspect-ratio--object" />
              </div>
              <a href="#0" className="ph2 ph0-ns pb3 link db">
                <h3 className="f5 f2-ns mb0 black-90">
                  Viadeo Partners
                </h3>
                <h3 className="f6 f5 fw4 mt2 black-60 lh-title">
                  Spicy jalapeno burgdoggen picanha tail, pork loin flank filet mignon porchetta sirloin.
                  Picanha kevin meatball burgdoggen ham alcatra
                </h3>
              </a>
            </article>
          </div>
          </section>
        )
    }
}

export default Work;
