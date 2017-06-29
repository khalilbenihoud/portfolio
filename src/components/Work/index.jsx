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
        <article className="cf fl w-100 w-100-ns mt4">
          <Link to={'projects/' + id} className="db link">
            <img src={projectImage} className="img-projects db br1 hover-img" alt="Screenshot of a project" />
            <div className="pa3 ph3-ns pb3-ns tc">
              <div className="dt w-100 mt1 ">
                <div className="dtc">
                  <h3 className="f3 f2-ns f3-m mv0 black-80">{projectTitle}</h3>
                </div>
              </div>
              <p className="f5 f4-ns mid-gray">
                {projectDescription}
              </p>
            </div>
          </Link>
        </article>
      )
    }
}

export default Work;
