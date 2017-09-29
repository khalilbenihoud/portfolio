import React, {Component} from 'react';
import { Link } from 'react-router-dom';

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
          <Link to={'project/' + id} className="db link">
            <img src={projectImage} className="img-projects db br1 hover-img" alt="Screenshot of a project" />
            <div className="pa3 ph3-ns pb3-ns tc">
              <div className="dt w-100 mt1 ">
                <div className="dtc">
                  <h3 className="f3 f2-ns f3-m mv0 dark-gray">{projectTitle}</h3>
                </div>
              </div>
              <p className="f5 f5-ns light-silver">
                {projectDescription}
              </p>
            </div>
          </Link>
        </article>


                /*<article className="pv4 bt bb b--black-10 ph3 ph0-l">
                  <Link to={'projects/' + id} className="db link">

                  <div className="flex flex-column flex-row-ns">
                    <div className="w-100 w-40-ns pr3-ns order-2 order-1-ns">
                      <h1 className="f3 athelas mt0 lh-title">{projectTitle}</h1>
                      <p className="f5 f4-l lh-copy athelas">
                        {projectDescription}
                      </p>
                    </div>
                    <div className="pl3-ns order-1 order-2-ns mb3 mb0-ns w-100 w-60-ns">
                      <img src={projectImage} className="img-projects db br1 hover-img" alt="Screenshot of a project" />
                    </div>
                  </div>
                  </Link>

                </article>*/

      )
    }
}

export default Work;
