import React, { Component } from 'react';

class Contact extends Component {
  render(){
    return(
      <section id="Contact" className="tc pv5 b--black-10 bg-washed-blue">
        <div className="ph3 ph5-ns">
          <h4 className="f5 fw5 ttu tracked-mega black-60 mb4 Roboto">Want to grab a coffee or chat ?</h4>
          <a href="mailto:hello@benihoudkhalil.com" className="link b f3 f2-ns dim black-70 lh-solid email bb b--black-05 ph4 f4 b navy">hello@benihoudkhalil.com</a>
        </div>
      </section>
    )
  }
}

export default Contact;
