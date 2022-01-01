// import { FONT_WEIGHT } from 'utils/constants';
// import { fontPx } from './layout';

// export const getFontStyles =({
//   fontFamily = '',
//   fontSize = 16,
//   fontWeight = FONT_WEIGHT.REGULAR,
//   letterSpacing = 0,
//   lineHeight = 18,
// }) => {
//   return `
//     font-family: ${fontFamily}, sans-serif;
//     font-size: ${fontPx(fontSize)};
//     font-weight: ${fontWeight};
//     letter-spacing: ${fontPx(letterSpacing)};
//     line-height: ${fontPx(lineHeight)};
//   `;
// };

// export const getThemeValue = (path, fallback = '') => {
//   return ({ theme }) => get(theme, path, fallback);
// };

export const getFontFamily = (fontFamily) => ({ theme }) => {
  return theme.fonts[fontFamily];
};

export const getFontWeight = (propName) => ({ theme }) => {
  const { fontWeights } = theme;
  return fontWeights[propName];
};
