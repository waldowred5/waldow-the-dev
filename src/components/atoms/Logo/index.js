import React from 'react';
import StyledLogo, {
  OuterContainer,
  InnerContainer,
  TextWrapper,
  MobilePrimaryHeading,
  TabletPrimaryHeading,
  SecondaryHeading,
} from './styles';
import PropTypes from 'prop-types';

const lang = {
  mobilePrimaryHeading: 'W',
  tabletPrimaryHeading: 'Waldow',
  secondaryHeading: '.the.dev',
};

export const Logo = ({ theme }) => (
  <StyledLogo>
    <OuterContainer>
      <InnerContainer>
        <TextWrapper>
          <MobilePrimaryHeading theme={theme}>
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

Logo.propTypes = {
  theme: PropTypes.object,
};
