import React, { useRef } from 'react';
import PropTypes from 'prop-types';

export const PointLight = ({ color, position }) => {
  const light = useRef();
  return (
    <pointLight
      ref={light}
      args={color}
      position={position}
    />
  );
};

PointLight.propTypes = {
  color: PropTypes.array,
  position: PropTypes.array,
};
