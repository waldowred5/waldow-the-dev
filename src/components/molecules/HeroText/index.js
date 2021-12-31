import React from 'react';
import PropTypes from 'prop-types';
import StyledHeroText, {
  PrimaryHeadingWrapper,
  PrimaryHeading,
  SecondaryHeading,
  SuffixHeading,
} from './styles';

export const HeroText = ({ theme }) => {
  return (
    <StyledHeroText theme={theme}>
      <PrimaryHeadingWrapper>
        <PrimaryHeading>WALDOW</PrimaryHeading>
        <SuffixHeading>.the.dev</SuffixHeading>
      </PrimaryHeadingWrapper>
      <SecondaryHeading>
        Thrill seeker by day, developer by night
      </SecondaryHeading>
    </StyledHeroText>
  );
};

HeroText.propTypes = {
  colorVariant: PropTypes.string,
  fontFamily: PropTypes.string,
  theme: PropTypes.object,
};
