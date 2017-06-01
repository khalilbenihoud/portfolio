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

        <article className="fl w-100 w-100-m w-50-ns pr2-ns ph1-ns pointer">
          <Link to={'projects/' + id} className="ph2 ph0-ns pb3 link db">
            <img src={projectImage} className="db w-100 br1" alt="Project image" />
              <a href="#0" className="ph2 ph0-ns pb3 link db">
                <h3 className="f5 f4-ns mb0 black-90">{projectTitle}</h3>
              </a>
            </Link>
        </article>


      )
    }
}

export default Work;
