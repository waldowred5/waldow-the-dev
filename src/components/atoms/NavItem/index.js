import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StyledNavItem, { NavLabel, NavLink } from './styles';
import { BREAKPOINTS, SCREEN_SIZE } from 'utils/styles/layout';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export const NavItem = ({ label, id }) => {
  const [width] = useWindowSize();

  return (
    <StyledNavItem>
      <NavLink
        to={id}
        activeClass='active'
        offset={
          width < BREAKPOINTS[SCREEN_SIZE.TABLET] ?
            -64 : -90 // TO:DO replace with vars from schema.json
        }
        duration={500}
        spy={true}
        smooth={true}
      >
        <NavLabel>{label}</NavLabel>
      </NavLink>
    </StyledNavItem>
  );
};

NavItem.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};
