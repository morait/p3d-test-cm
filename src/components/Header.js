import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>  P3D Cube test / Carlos Mora Ch.</h1>
    <ul>
      <li><div><NavLink to="/" activeClassName="is-active" exact={true}>Main</NavLink> </div></li>
      <li><div><NavLink to="/cube" activeClassName="is-active">Cube</NavLink> </div></li>

    </ul>
  </header>
);

export default Header;

