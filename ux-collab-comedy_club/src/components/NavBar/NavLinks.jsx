import React from 'react'
import { NavLink } from 'react-router-dom';

function NavLinks() {
  return (
    <div>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/newsletter">Newsletter</NavLink>
    </div>
  )
}

export default NavLinks



