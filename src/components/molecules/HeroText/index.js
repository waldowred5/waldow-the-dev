import React from 'react';
import PropTypes from 'prop-types';
import HeroContainer, {
  PrimaryHeadingWrapper,
  PrimaryHeading,
  SecondaryHeading,
  StyledDivider,
  StyledHeroText,
  SuffixHeading,
} from './styles';

export const HeroText = ({ theme }) => {
  return (
    <>
      <HeroContainer>
        <StyledDivider />
        <StyledHeroText theme={theme}>
          <PrimaryHeadingWrapper>
            <PrimaryHeading>WALDOW</PrimaryHeading>
            <SuffixHeading>.the.dev</SuffixHeading>
          </PrimaryHeadingWrapper>
          <SecondaryHeading>
        Thrill seeker by day, developer by night
          </SecondaryHeading>
        </StyledHeroText>
      </HeroContainer>
      <div id='mobileNavSpacer' style={{ height: 64 }} />
    </>
  );
};

HeroText.propTypes = {
  colorVariant: PropTypes.string,
  fontFamily: PropTypes.string,
  theme: PropTypes.object,
};
