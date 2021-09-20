import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="bp3-navbar .modifier bp3-dark" >
        <div className="bp3-navbar-group bp3-align-left">
          <div className="bp3-navbar-heading">TO-DO</div>
          
        </div>
        <div className="bp3-navbar-group bp3-align-right">
        <a className="bp3-button bp3-minimal bp3-icon-home" to="/">Home</a>
         
          <span className="bp3-navbar-divider"></span>
          <a className="bp3-button bp3-minimal bp3-icon-cog" to="/form">Setting</a>
          <button className="bp3-button bp3-minimal bp3-icon-user"></button>
          <button className="bp3-button bp3-minimal bp3-icon-notifications"></button>
        </div>
      </nav>
    </>
  );
}

export default Header;