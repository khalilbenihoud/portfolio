import React, { Component } from 'react';
import { Link } from 'react-router'

class Header extends Component {
  render(){
    const imgLogo = "images/logo.svg";
    return(
        <nav className="db dt-ns mw9 center w-100 pv4 nav-link animated fadeInDown">
          <h1>
            <Link to="/" className="db dtc-l v-mid dim w-100 w-25-l tc tl-l mb2 mb0-l" title="Home">
              <img src={imgLogo} class="dib w2 h2 br-100" alt="Site Name" />
            </Link>
          </h1>
          <div className=" dtc-l v-mid w-100 w-75-l tc tr-l ttu fw7">
            <ul className="list display-none-l pa0">
              <li>
                <Link className="link dim white-70 f6 f5-l dib tracked-mega-l" to="/" title="Home">Home</Link>
              </li>
              <li>
                <Link className="link dim white-70 f6 f5-l dib tracked-mega-l" to="/about" title="About">About</Link>
              </li>
              <li>
                <a href="#Contact" className="link dim white-70 f6 f5-l dib tracked-mega-l" title="Contact">Contact</a>
              </li>
            </ul>

          </div>
        </nav>
    )
  }
}

export default Header;
