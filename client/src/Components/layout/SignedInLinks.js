import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = (props) =>{
  console.log(props);
  return(
    <ul className="right">
      {/*<li><NavLink to='/'>Home</NavLink> </li>*/}
      <li><a onClick={props.logout}>Log Out</a> </li>
      <li><NavLink to='/'>Messages</NavLink> </li>
     {/* <li><NavLink to='/'className='btn btn-floating pink lighten-1'>NN</NavLink> </li>*/}
    </ul>
  )
}

export default SignedInLinks