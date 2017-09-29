import React, { Component } from 'react';

class Footer extends Component {
  render(){

    const imgFooter = "images/tarbouche.svg";

    return(
      <footer id="Footer" className="pv5 ph3 ph5-ns tc">
        <div className="ph3 ph5-ns">
          <img src={imgFooter} alt="Tarbouche" className="grow" />

        </div>
      </footer>

    )
  }
}

export default Footer;
