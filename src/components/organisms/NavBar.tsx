import React from 'react'
import { NavLink } from 'react-router-dom'
import navRoutes from '../../routes/navRoutes'

const NavBar = (): React.ReactElement => (
  <div>
      {navRoutes.map(tab => (
          <li key={tab.label}>
              <NavLink exact={tab.path === '/'} to={tab.path}>{tab.label}</NavLink>
          </li>
      ))}
  </div>
)

export default NavBar
