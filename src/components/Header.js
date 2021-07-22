import React from "react";
import Logo from "../../src/assets/HAS-logo.png";

function Header(){
    return(
    <div>
<nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <img src={Logo} className="container-logo"></img>
          {/* <Link className="navbar-brand" to={"/sign-in"}>RemoteStack</Link> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {/* <Link className="nav-link" to={"/sign-in"}>Sign in</Link> */}
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to={"/sign-up"}>Sign up</Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    )
}
export default Header