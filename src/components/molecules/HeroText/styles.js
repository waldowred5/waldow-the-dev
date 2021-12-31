import styled from 'styled-components';

export const StyledHeroText = styled.div`
  position: absolute;
  right: 48px;
  bottom: 72px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PrimaryHeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #38E000;
`;

export const PrimaryHeading = styled.h1`
  margin: 0;
  font-family: 'Bangers', cursive;
  font-size: 96px;
  line-height: 72px;
  font-weight: 400;
`;

export const SuffixHeading = styled.h1`
  margin: 0;
  font-family: 'Baloo 2', cursive;
  font-size: 64px;
  line-height: 108px;
`;

export const SecondaryHeading = styled.h2`
  margin: 0 48px 0 0;
  color: #C56CEF;
  font-family: 'Roboto', serif;
  font-weight: 400;
  font-size: 48px;
  line-height: 18px;
`;

export default StyledHeroText;
