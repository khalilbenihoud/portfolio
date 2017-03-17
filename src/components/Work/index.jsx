import React, {Component} from 'react';

class Work extends Component {
    render() {

      const workImg1 = require('../../img/influans.png');
      const workImg2 = require('../../img/molotov-tv.png');
      const workImg3 = require('../../img/empreintes.png');
      const workImg4 = require('../../img/viadeo-partners.png');

        return (
          <section className="cf w-100 mw9 center pa2-ns work pointer">
            <article className="fl w-100 w-50-m  w-50-ns pa2-ns ">
                <div className="aspect-ratio aspect-ratio--16x9">
                  <img src={workImg1} className="db bg-center cover aspect-ratio--object hover-img" />
                </div>
                <a href="#0" className="ph2 ph0-ns pb3 link db">
                  <h3 className="f5 f4-ns mb0 black-90">Title of piece</h3>
                  <h3 className="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
                </a>
              </article>
              <article className="fl w-100 w-50-m  w-50-ns pa2-ns">
                <div className="aspect-ratio aspect-ratio--16x9">
                    <img src={workImg2} className="db bg-center cover aspect-ratio--object hover-img" />
                  </div>
                  <a href="#0" className="ph2 ph0-ns pb3 link db">
                    <h3 className="f5 f4-ns mb0 black-90">Title of piece</h3>
                    <h3 className="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
                  </a>
              </article>
              <article className="fl w-100 w-50-m  w-50-ns pa2-ns">
                <div className="aspect-ratio aspect-ratio--16x9">
                    <img src={workImg3} className="db bg-center cover aspect-ratio--object hover-img" />
                  </div>
                  <a href="#0" className="ph2 ph0-ns pb3 link db">
                    <h3 className="f5 f4-ns mb0 black-90">Title of piece</h3>
                    <h3 className="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
                  </a>
              </article>
              <article className="fl w-100 w-50-m  w-50-ns pa2-ns">
                <div className="aspect-ratio aspect-ratio--16x9">
                    <img src={workImg4} className="db bg-center cover aspect-ratio--object hover-img" />
                  </div>
                  <a href="#0" className="ph2 ph0-ns pb3 link db">
                    <h3 className="f5 f4-ns mb0 black-90">Title of piece</h3>
                    <h3 className="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
                  </a>
              </article>


          </section>
        )
    }
}

export default Work;
