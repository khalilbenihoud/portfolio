import React, { Component } from 'react';
import { Link } from 'react-router'


class Header extends Component {
  render(){
    const imgLogo = require('../../img/logo.svg')
    return(
      <header id="header" className='dt w-100 mw9 center mv4 ph3-ns'>
        <nav className="db dt-l w-100 border-box">
          <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
            <img src={imgLogo} className="dib w2 h2 " alt="Site Name" />
          </a>
          <div className="db dtc-l v-mid w-100 w-75-l tc tr-l nav-link ttu">
            <a className="link dim white-50 f6 f5-l dib mr3 mr4-l" href="#" title="Home">Home</a>
            <a className="link dim white-50 f6 f5-l dib mr3 mr4-l" href="#" title="About">About</a>
            <a className="link dim white-50 f6 f5-l dib pr2-ns" href="#" title="Contact">contact</a>
          </div>
        </nav>
      </header>

    )
  }
}

export default Header;
