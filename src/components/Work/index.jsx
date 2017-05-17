import React, {Component} from 'react';
import { Link } from 'react-router';

class Work extends Component {
    render() {

      const{
        id,
        projectImage,
        projectTitle,
        projectDescription
      } = this.props;

      return (
        <article className="fl w-100 w-50-l pr2-l pb3">
          <Link to={'projects/' + id} className="ph2 ph0-ns pb3 link db">
            <div className="aspect-ratio aspect-ratio--16x9 hover-img">
              <img src={projectImage} className="db bg-center cover aspect-ratio--object" alt="" />
            </div>
            <h3 className="f5 f4-ns mb0 black-90">{projectTitle}</h3>
            <p className="f6 f5 fw4 mt2 black-60">{projectDescription}</p>
          </Link>
        </article>
      )
    }
}

export default Work;
