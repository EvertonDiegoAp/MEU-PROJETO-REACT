import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
    return (
      <nav>
        <ul>
           <li><Link to="/">Curriculo</Link></li>
           <li><Link to="/portfolio">Portfolio</Link></li>
           <li><Link to="/Contato">Contato</Link></li>
        </ul>
      </nav>
    );
}

export default Nav;