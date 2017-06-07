import React, {Component} from 'react';
import { Link } from 'react-router';
import Anime from 'react-anime';

class Work extends Component {
    render() {

      const{
        id,
        projectImage,
        projectTitle,
        projectDescription
      } = this.props;

      return (
        <article className="mw8 center">
          <Link to={'projects/' + id} className="db pv4 ph3 ph0-l no-underline black dim link" >
            <div className="flex flex-column flex-row-ns">
              <div className="pr3-ns mb4 mb0-ns w-100 w-100-ns">
                <img src={projectImage} className="db mw9" alt="Photo of a dimly lit room with a computer interface terminal." />
              </div>
              <div className="w-100 w-100-ns pl3-ns">
                <h3 className="f1 mv0">{projectTitle}</h3>
                <p className="f6 f5-l lh-copy">
                  {projectDescription}
                </p>
              </div>
            </div>
          </Link>
        </article>



      )
    }
}

export default Work;
