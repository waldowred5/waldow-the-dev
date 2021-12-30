import React from 'react';
import { NavBar } from 'components/molecules/NavBar';
import routes from 'routes';

export const NavBarController = (props) => (
  <NavBar {...props} routes={routes} />
);


