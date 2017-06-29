import React, { Component } from 'react';
import { Link } from 'react-router'

class Footer extends Component {
  render(){

    const imgFooter = "images/tarbouche.svg";

    return(
      <footer id="Footer" className="pv5 ph3 ph5-ns tc">
        <div className="ph3 ph5-ns">
          <img src={imgFooter} alt="Tarbouche" className="grow" />
          <p className="f5 fw5 ttu black-70 tracked-mega">
            <div className="spinner-heart">
              <svg className="heart" viewBox="0 0 32 29.6">
                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
              </svg>
            </div>
            </p>



        </div>
      </footer>

    )
  }
}

export default Footer;
