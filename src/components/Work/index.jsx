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

        <article className="fl w-100 w-50-l center ">
          <Link to={'projects/' + id} className="ph2 ph0-ns pb3 link db">
            <img src={projectImage} className="db w-100 br1" alt="Project image" />
              <div className="pa2-l ph3-ns p">
                <div className="dt w-100 mt1">
                  <div className="dtc">
                    <h3 className="f5 f4-ns mb0 black-90">{projectTitle}</h3>
                  </div>
                </div>
                <p className="f6 lh-copy mt2 mid-gray">
                  {projectDescription}
                </p>
              </div>
            </Link>
        </article>

      )
    }
}

export default Work;
