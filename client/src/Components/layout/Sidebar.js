import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) =>{
  console.log(props)
  let {session,login} = props.propslogin;

  const links = (login === true) ? < SignedInLinks /> : < SignedOutLinks />
  
  return(
      <div className="row">
          <div className="container">
              <ul className="side-nav" id = "slide-out">
                  
              </ul>
          </div>
      </div>

    {/*<div className="navbar-fixed">
      <nav className="nav-wrapper  indigo darken-4 z-depth-2">
          <div className="container">
              <Link to='/' className="brand-logo left">Badminton Gaming</Link>
              
              {console.log(links)}
              {links}
          </div>
      </nav>
    </div>*/}
  )
}

export default Sidebar;