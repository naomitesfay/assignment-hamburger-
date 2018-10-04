import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header>

        <label for="hamburger" class="hamburger-label" ></label>

        <Grid className="header-grid">
        <label for="hamburger" className="hamburger-label">
           <span className="hamburger-1"></span>
           <span className="hamburger-2"></span>
           <span className="hamburger-3"></span>
         </label>

         <input id="hamburger" type="checkbox" className="hamburger-checkbox" name="" value="" />

         <nav class="menu">
           <ul>
             <li><a href="http://technigo.io">Technigo</a></li>
             <li><a href="http://technigo.io">Boot Camp</a></li>
             <li><a href="http://technigo.io">Stories</a></li>
             <li><a href="http://technigo.io">About</a></li>
           </ul>
         </nav>
        </Grid>
      </header>
    )
  }

}

export default Header
