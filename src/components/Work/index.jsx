import React, {Component} from 'react';

class Work extends Component {
    render() {

      const{
        projectImage,
        projectTitle,
        projectDescription
      } = this.props;

      return (
        <article className="fl w-100 w-50-m w-50-ns mr0 mr8">
          <div className="aspect-ratio aspect-ratio--16x9 hover-img">
            <img src={projectImage} className="db bg-center cover aspect-ratio--object" alt="" />
          </div>
          <a href="#0" className="ph2 ph0-ns pb3 link db">
            <h3 className="f5 f4-ns mb0 black-90">{projectTitle}</h3>
            <h3 className="f6 f5 fw4 mt2 black-60">{projectDescription}</h3>
          </a>
        </article>
      )
    }
}

export default Work;
