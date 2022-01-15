import React from 'react';
import { PageHeader } from 'components/atoms/PageHeader';
import { TwoColumns } from 'layouts/TwoColumns';
import { Bio } from 'components/organisms/Bio';
import { Skills } from 'components/organisms/Skills';

export const AboutController = () => (
  <div>
    <PageHeader label='About' />
    <TwoColumns>
      <Bio />
      <Skills />
    </TwoColumns>
  </div>
);
