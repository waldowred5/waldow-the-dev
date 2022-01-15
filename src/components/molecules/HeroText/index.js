import React from 'react';
import HeroContainer, {
  PrimaryHeadingWrapper,
  PrimaryHeading,
  SecondaryHeading,
  StyledDivider,
  StyledHeroText,
  SuffixHeading,
} from './styles';

export const HeroText = () => {
  return (
    <>
      <HeroContainer>
        <StyledDivider />
        <StyledHeroText>
          <PrimaryHeadingWrapper>
            <PrimaryHeading>WALDOW</PrimaryHeading>
            <SuffixHeading>.the.dev</SuffixHeading>
          </PrimaryHeadingWrapper>
          <SecondaryHeading>
            Thrill seeker by day, developer by night
          </SecondaryHeading>
        </StyledHeroText>
      </HeroContainer>
    </>
  );
};
