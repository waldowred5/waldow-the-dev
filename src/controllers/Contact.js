import React from 'react';
import { PageHeader } from 'components/atoms/PageHeader';
import { SocialLinks } from 'components/molecules/SocialLinks';

export const ContactController = () => (
  <div>
    <PageHeader label='Contact' />
    {/* TO:DO Set label based on route*/}
    <SocialLinks />
  </div>
);
