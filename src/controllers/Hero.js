import React from 'react';
// import { CubeAnimation } from 'components/atoms/CubeAnimation';
import ThreeJsCanvas, {
  HeadingContainer, PrimaryHeadingWrapper,
  PrimaryHOne,
  PrimaryHTwo,
  SecondaryHOne,
} from './H-REMOVE_HeroStyles';

export const HeroController = () => (
  <>
    {/* <CubeAnimation />*/}
    <ThreeJsCanvas />
    <HeadingContainer>
      <PrimaryHeadingWrapper>
        <PrimaryHOne>WALDOW</PrimaryHOne>
        <SecondaryHOne>.the.dev</SecondaryHOne>
      </PrimaryHeadingWrapper>
      <PrimaryHTwo>Thrill seeker by day, developer by night</PrimaryHTwo>
    </HeadingContainer>
  </>
);
