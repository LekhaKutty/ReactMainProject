import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const Navbar = (props) =>{
  console.log(props)
  let {session,login} = props.propslogin;

  const links = (login === true) ? < SignedInLinks logout={props.logout} /> : < SignedOutLinks />
  
  return(
    <div className="navbar">
      <nav className="nav-wrapper  indigo darken-4 z-depth-2">
          <div className="container">
              {/*<Link to='/' className="brand-logo left">Badminton Gaming</Link>*/}
              
              {console.log(links)}
              {links}
          </div>
      </nav>
    </div>
  )
}

export default Navbar;