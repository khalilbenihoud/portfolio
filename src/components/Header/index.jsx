import React, { Component } from 'react';
import { Link } from 'react-router'


class Header extends Component {
  render(){
    const imgLogo = require('../../img/logo.svg')
    return(
        <nav className="dt w-100 mw9 center ph5-l db dt-l border-box pv4  nav-link">
          <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
            <img src={imgLogo} class="dib w2 h2 br-100" alt="Site Name" />
          </a>
          <div className="db dtc-l v-mid w-100 w-75-l tc tr-l ttu fw7">
            <a className="link dim white-70 f6 f5-l dib mr3 mr4-l tracked-mega-l" href="#" title="Home">Home</a>
            <a className="link dim white-70 f6 f5-l dib mr3 mr4-l tracked-mega-l" href="#" title="About">About me</a>
            <a className="link dim white-70 f6 f5-l dib tracked-mega-l" href="#" title="Contact">Contact</a>
          </div>
        </nav>
    )
  }
}

export default Header;
