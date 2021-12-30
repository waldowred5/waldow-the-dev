import get from 'lodash/get';
import { FONT_WEIGHT } from 'utils/constants';
import { fontPx } from './layout';

export const getFontSizing = ([
  fontSize = 16,
  lineHeight = 18,
  letterSpacing = 0,
]) => {
  return (props) => `
    font-size: ${fontPx(fontSize)};
    line-height: ${fontPx(lineHeight)};
    letter-spacing: ${fontPx(letterSpacing)};
  `;
};

export const getFontStyles = ({
  sizes: [fontSize = 16, lineHeight = 18, letterSpacing = 0],
  weight = FONT_WEIGHT.REGULAR,
  fontFamily = 'Montserrat',
  style = 'inherit',
  variant = 'normal',
}) => {
  return (props) => `
    ${getFontSizing([fontSize, lineHeight, letterSpacing])};
    font-family: ${fontFamily}, sans-serif;
    font-weight: ${weight};
    font-style: ${style};
    font-variant: ${variant};
  `;
};

export const getThemeValue = (path, fallback = '') => {
  return ({ theme }) => get(theme, path, fallback);
};
