import React from 'react';
import ThreeJsCanvas, {
  HeadingContainer, PrimaryHeadingWrapper,
  PrimaryHOne,
  PrimaryHTwo,
  SecondaryHOne,
} from './H-REMOVE_HeroStyles';

export const HeroController = () => (
  <>
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
