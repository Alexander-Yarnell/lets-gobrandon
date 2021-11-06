import React from "react";

import logo from '../images/favicon.png';

import vector from '../images/Vector 1.png';

function Home() {
  return(
    <div>
      <div className="hero-bg">
        <img className="hero-vector" src={vector}></img>
      </div>
      <div className="logo-bg">
        <img className="logo" src={logo} alt="..." />
      </div>

      <div className="cta-bg">
        <div className="cta-header">GET STARTED</div>
        <div className="cta-paragraph">Join the fight against Joe Biden, and the currupt state of our political parties. Pick up a Lets go Brandon Tshirt, hat, or hoodie today.</div>
      </div>

    </div>
  )
}

export default Home;
