import React from 'react';
import StyledLogo, {
  OuterContainer,
  InnerContainer,
  TextWrapper,
  MobilePrimaryHeading,
  TabletPrimaryHeading,
  SecondaryHeading,
} from './styles';

const lang = {
  mobilePrimaryHeading: 'W',
  tabletPrimaryHeading: 'Waldow',
  secondaryHeading: '.the.dev',
};

export const Logo = () => {
  return (
    <StyledLogo>
      <OuterContainer>
        <InnerContainer>
          <TextWrapper>
            <MobilePrimaryHeading>
              {lang.mobilePrimaryHeading}
            </MobilePrimaryHeading>
            <TabletPrimaryHeading>
              {lang.tabletPrimaryHeading}
            </TabletPrimaryHeading>
            <SecondaryHeading>
              {lang.secondaryHeading}
            </SecondaryHeading>
          </TextWrapper>
        </InnerContainer>
      </OuterContainer>
    </StyledLogo>
  );
};
