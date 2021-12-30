import styled from 'styled-components';
import PropTypes from 'prop-types';

const buttonProps = {
  colorVariant: PropTypes.string,
};

const StyledThemeButton = styled('button', buttonProps)`
  background-color: blue;
  height: 20px;
`;

export default StyledThemeButton;
