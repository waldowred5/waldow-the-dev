/* eslint-disable no-unused-vars */
import React from 'react';
import StyledLogo, {
  OuterContainer,
  InnerContainer,
  TextWrapper,
  MobilePrimaryHeading,
  TabletPrimaryHeading,
  SecondaryHeading, LogoCanvasContainer,
} from './styles';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { LogoPrimary } from '../../animation/LogoPrimary';
import { PointLight } from '../../animation/LightPoint';

const lang = {
  mobilePrimaryHeading: 'W',
  tabletPrimaryHeading: 'Waldow',
  secondaryHeading: '.the.dev',
};

export const LogoThree = ({ theme }) => (
  <LogoCanvasContainer>
    <Canvas>
      <PointLight
        color={[0xFFFFFF, 3, 15]}
        position={[0, 0, 8]}
      />
      <LogoPrimary/>
      {/* <StyledLogo> */}
      {/*   <OuterContainer> */}
      {/*     <InnerContainer> */}
      {/*       <TextWrapper> */}
      {/*         <MobilePrimaryHeading theme={theme}> */}
      {/*           {lang.mobilePrimaryHeading} */}
      {/*         </MobilePrimaryHeading> */}
      {/*         <TabletPrimaryHeading> */}
      {/*           {lang.tabletPrimaryHeading} */}
      {/*         </TabletPrimaryHeading> */}
      {/*         <SecondaryHeading> */}
      {/*           {lang.secondaryHeading} */}
      {/*         </SecondaryHeading> */}
      {/*       </TextWrapper> */}
      {/*     </InnerContainer> */}
      {/*   </OuterContainer> */}
      {/* </StyledLogo> */}
    </Canvas>
  </LogoCanvasContainer>
);

LogoThree.propTypes = {
  theme: PropTypes.object,
};
