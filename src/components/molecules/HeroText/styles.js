import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fontPx } from 'utils/styles/layout';
import { FONT_FAMILY, HEADING_VARIANT } from 'utils/constants';

const getHeadingStyle = (colorVariant, propName) => ({ theme }) => {
  return theme.components.heading[colorVariant][propName];
};

const getFontFamily = (fontFamily) => ({ theme }) => {
  return theme.fonts[fontFamily];
};

const headingProps = {
  colorVariant: PropTypes.string,
  fontFamily: PropTypes.string,
  theme: PropTypes.object,
};

export const StyledHeroText = styled.div`
  position: absolute;
  right: ${fontPx(48)};
  bottom: ${fontPx(72)};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PrimaryHeadingWrapper = styled('div', headingProps)`
  display: flex;
  flex-direction: row;
  color: ${getHeadingStyle(HEADING_VARIANT.PRIMARY, 'color')};
`;

export const PrimaryHeading = styled('h1', headingProps)`
  margin: 0 8px 0 0;
  font-family: ${getFontFamily(FONT_FAMILY.TERTIARY)};
  font-size: 96px;
  line-height: 110px;
  font-weight: 400;
`;

export const SuffixHeading = styled('h1', headingProps)`
  margin: 40px 0 0 0;
  font-family: '${getFontFamily(FONT_FAMILY.SECONDARY)}', cursive;
  font-size: 64px;
  line-height: 68px;
  font-weight: 600;
`;

export const SecondaryHeading = styled('h2', headingProps)`
  margin: 0 48px 0 0;
  color: ${getHeadingStyle(HEADING_VARIANT.SECONDARY, 'color')};
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
`;

export default StyledHeroText;
