import styled from 'styled-components';
import PropTypes from 'prop-types';

// const getButtonStyle = (propName) => ({ colorVariant, ...props }) =>
//   getThemeValue(`colors.button.${colorVariant}.${propName}`)(props);

const buttonProps = {
  colorVariant: PropTypes.string,
};

const StyledButton = styled('button', buttonProps)`
  // background-color: ${getButtonStyle('background')};
  // color: ${getButtonStyle('text')};
`;

export default StyledButton;
