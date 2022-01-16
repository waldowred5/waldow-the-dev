import React from 'react';
import PropTypes from 'prop-types';

export const PointLight = ({ color, position }) => {
  return (
    <pointLight
      args={color}
      position={position}
    />
  );
};

PointLight.propTypes = {
  color: PropTypes.array,
  position: PropTypes.array,
};
