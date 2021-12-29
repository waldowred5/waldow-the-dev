import styled from 'styled-components';
import PropTypes from 'prop-types';

const headingProps = {
  type: PropTypes.string,
  colorVariant: PropTypes.string,
  fontSize: PropTypes.arrayOf(PropTypes.number),
};

const StyledHeading = styled('h1', headingProps)``;

export default StyledHeading;
