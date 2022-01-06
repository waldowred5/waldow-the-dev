import React from 'react';
import { PageHeader } from 'components/atoms/PageHeader';
import { SocialLinks } from 'components/molecules/SocialLinks';

// TO:DO replace inline styling

export const ContactController = () => (
  <div>
    <PageHeader label='Contact' />
    {/* TO:DO Set label based on route*/}
    {/* eslint-disable-next-line max-len */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SocialLinks />
    </div>
  </div>
);
