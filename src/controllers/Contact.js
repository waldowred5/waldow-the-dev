import React from 'react';
import { PageHeader } from 'components/atoms/PageHeader';
import { SocialLinks } from 'components/molecules/SocialLinks';

export const ContactController = () => (
  <div>
    <PageHeader label='Contact' />
    {/* eslint-disable-next-line max-len */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SocialLinks />
    </div>
  </div>
);
