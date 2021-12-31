import React from 'react';
import PropTypes from 'prop-types';
import StyledHeroText, {
  PrimaryHeadingWrapper,
  PrimaryHeading,
  SecondaryHeading,
  SuffixHeading,
} from './styles';

export const HeroText = ({ children, colorVariant, fontSize, type }) => (
  <StyledHeroText>
    <PrimaryHeadingWrapper>
      <PrimaryHeading>WALDOW</PrimaryHeading>
      <SuffixHeading>.the.dev</SuffixHeading>
    </PrimaryHeadingWrapper>
    <SecondaryHeading>
      Thrill seeker by day, developer by night
    </SecondaryHeading>
  </StyledHeroText>
);

HeroText.propTypes = {
  children: PropTypes.node.isRequired,
  colorVariant: PropTypes.string,
  fontSize: PropTypes.array,
  type: PropTypes.string,
};
