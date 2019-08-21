import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = (props) =>{
  console.log(props)
  let {session,login} = props.propslogin;

  const links = (login === true) ? < SignedInLinks logout={props.logout} /> : < SignedOutLinks />
  
  return(
    <div className="navbar">
      <nav className="nav-wrapper  indigo darken-4 z-depth-2">
          <div className="container">
              {console.log(links)}
              {links}
          </div>
      </nav>
    </div>
  )
}

export default Navbar;