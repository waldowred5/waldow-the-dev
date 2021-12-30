import styled from 'styled-components';
import PropTypes from 'prop-types';

const buttonProps = {
  colorVariant: PropTypes.string,
};

const StyledButton = styled('button', buttonProps)`
  background-color: blue;
`;

export default StyledButton;
