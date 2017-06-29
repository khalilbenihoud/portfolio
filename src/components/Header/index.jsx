import React, { Component } from 'react';
import { Link } from 'react-router'

class Header extends Component {
  render(){
    const imgLogo = "images/logo.svg";
    return(
        <nav className="db dt-ns mw8 center w-100 pv4 nav-link">
          <h1>
            <Link to="/" className="f4-ns dark-gray db dtc-l v-mid dim w-100 w-25-l tl-l mb2 mb0-l" title="Home">
              <img src={imgLogo} class="dib w2 h2 br-100 dark-gray" alt="Site Name" />
            </Link>
          </h1>
          <Link className="link dim black-50 fw5 f5 f5-ns dib mr3" to="#" title="Home">Home</Link>
          <Link className="link dim black-50 fw5 f5 f5-ns dib mr3" to="/profile" title="About">Profile</Link>
          <Link className="link dim black-50 fw5 f5 f5-ns dib" to="/contact" title="Contact">Get in touch</Link>
        </nav>
    )
  }
}

export default Header;
