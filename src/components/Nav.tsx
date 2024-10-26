import {NavLink} from 'react-router-dom';

function Nav() {
    return (
      <nav>
        <NavLink to="/">About Me</NavLink>
        <NavLink to="/work">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/resume" >Resume</NavLink>
      </nav>
    )
  }

  export default Nav;