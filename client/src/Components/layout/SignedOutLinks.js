import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () =>{
  return(
    <ul className="right">
      <li><NavLink to='/'>Home</NavLink> </li>
      <li><NavLink to='/login'>Log In</NavLink> </li>
      <li><NavLink to='/signup'>Signup</NavLink> </li>
    </ul>
  )
}

export default SignedOutLinks